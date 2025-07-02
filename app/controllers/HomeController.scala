package controllers

import play.api.data.Form
import play.api.i18n.I18nSupport
import javax.inject._
import play.api._
import play.api.mvc._
import actions.LoggingAction
/** This controller creates an `Action` to handle HTTP requests to the
  * application's home page.
  */
@Singleton
class HomeController @Inject() (val controllerComponents: ControllerComponents,loggingAction: LoggingAction)
    extends BaseController {

  /** Create an Action to render an HTML page.
    *
    * The configuration in the `routes` file means that this method will be
    * called when the application receives a `GET` request with a path of `/`.
    */
  def index() = Action { implicit request: Request[AnyContent] =>
    Ok("Hello World!").withHeaders(
      "Content-Type" -> "text/plain",
      "Cache-Control" -> "no-cache"
    )
  }

//Since Action is just an implementation of ActionBuilder[Request], we can extend ActionBuilder to use in place of Action.
  def login= loggingAction { implicit request: Request[AnyContent] =>
    // Here you can handle the login logic, e.g., authenticate the user
    Ok("Login successful!").withHeaders(
      "Content-Type" -> "text/plain",
      "Cache-Control" -> "no-cache"
    )
  }
}
