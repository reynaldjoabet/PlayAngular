/** Frontend build commands. Change these if you are using some other package
  * manager. i.e: Yarn
  */
object FrontendCommands {
  val dependencyInstall: String = "npm install"
  val test: String = "npm run test"
  val testCi: String = "npm run test:ci"
  val testCoverage: String = "npm run test:coverage"
  val testCoverageCi: String = "npm run test:coverage:ci"
  val lint: String = "npm run lint"
  val serve: String = "npm run start"
  val build: String = "npm run build:prod"
  val buildDev: String = "npm run build:dev"
  val e2e: String = "npm run e2e"
  val start: String = "npm run start"

}
