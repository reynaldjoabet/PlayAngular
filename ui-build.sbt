import scala.sys.process.Process

/*
 * UI Build hook Scripts
 */
// This file is used to build the UI and run the tests

// Execution status success.
val Success = 0

// Execution status failure.
val Error = 1

// Run angular serve task when Play runs in dev mode, that is, when using 'sbt run'
// https://www.playframework.com/documentation/2.8.x/SBTCookbook
PlayKeys.playRunHooks += baseDirectory.map(FrontendRunHook.apply).value

// True if build running operating system is windows.
val isWindows = System.getProperty("os.name").toLowerCase().contains("win")

// Execute on commandline, depending on the operating system. Used to execute npm commands.
def runOnCommandline(script: String)(implicit dir: File): Int = {
  if (isWindows) { Process("cmd /c " + script, dir) }
  else { Process(script, dir) }
} !

// Execute `npm install` command to install all node module dependencies. Return Success if already installed.
def runNpmInstall(implicit dir: File): Int =
  runOnCommandline(FrontendCommands.dependencyInstall)

// Execute task if node modules are installed, else return Error status.
def ifNodeModulesInstalled(task: => Int)(implicit dir: File): Int =
  if (runNpmInstall == Success) task
  else Error

// Execute frontend test task. Update to change the frontend test task.
def executeUiTests(implicit dir: File): Int = ifNodeModulesInstalled(
  runOnCommandline(FrontendCommands.test)
)

// Execute frontend prod build task. Update to change the frontend prod build task.
def executeProdBuild(implicit dir: File): Int = ifNodeModulesInstalled(
  runOnCommandline(FrontendCommands.build)
)

// Create frontend build tasks for prod, dev and test execution.

lazy val `ui-test` = taskKey[Unit]("Run UI tests when testing application.")

`ui-test` := {
  implicit val userInterfaceRoot = baseDirectory.value / "ui"
  if (executeUiTests != Success) throw new Exception("UI tests failed!")
}

lazy val `ui-prod-build` =
  taskKey[Unit]("Run UI build when packaging the application.")

`ui-prod-build` := {
  implicit val userInterfaceRoot = baseDirectory.value / "ui"
  if (executeProdBuild != Success)
    throw new Exception("Oops! UI Build crashed.")
}

// Execute frontend prod build task prior to play dist execution.
// If task A depends on task B, then task B will be executed first.
dist := (dist dependsOn `ui-prod-build`).value

// Execute frontend prod build task prior to play stage execution.
stage := (stage dependsOn `ui-prod-build`).value


Universal / packageZipTarball := (Universal / packageZipTarball).dependsOn(`ui-prod-build`).value
// Execute frontend test task prior to play test execution.
test := ((Test / test) dependsOn `ui-test`).value

ThisBuild / semanticdbEnabled := true

ThisBuild / fork / run := true

ThisBuild / fork / test := true
