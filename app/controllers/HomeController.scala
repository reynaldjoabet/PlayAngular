package controllers

import play.api.data.Form
import play.api.i18n.I18nSupport
import javax.inject._
import play.api._
import play.api.mvc._

/** This controller creates an `Action` to handle HTTP requests to the
  * application's home page.
  */
@Singleton
class HomeController @Inject() (val controllerComponents: ControllerComponents)
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
}
