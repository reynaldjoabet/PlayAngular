import play.routes.compiler.static.twirl.reverseRouter
name := """playangular"""

version := "1.0-SNAPSHOT"

lazy val root = (project in file("."))
  .enablePlugins(PlayScala)
  .settings(
    // watchSources ++= ...: Adds those files to the list of sources SBT watches during ~ tasks (like ~compile, ~test, etc.)
    watchSources ++= (baseDirectory.value / "ui/src" ** "*").get
  )

ThisBuild / scalaVersion := "3.3.3"

routesGenerator := InjectedRoutesGenerator

generateJsReverseRouter := false

generateReverseRouter := false

libraryDependencies ++= Seq( 
  guice,
"com.github.plokhotnyuk.jsoniter-scala" %% "jsoniter-scala-core" % "2.36.5",
"com.github.plokhotnyuk.jsoniter-scala" %% "jsoniter-scala-circe" % "2.36.5",
"com.github.plokhotnyuk.jsoniter-scala" %% "jsoniter-scala-macros" % "2.36.5" % "provided",
 "org.scalatestplus.play" %% "scalatestplus-play" % "7.0.1" % Test

)
// Adds additional packages into Twirl
//TwirlKeys.templateImports += "com.example.controllers._"

// Adds additional packages into conf/routes
// play.sbt.routes.RoutesKeys.routesImport += "com.example.binders._"

Global / onChangedBuildSource := ReloadOnSourceChanges

fork := true

//addCommandAlias("dist", "universal:packageXzTarball")