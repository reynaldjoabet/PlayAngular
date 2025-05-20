package v1

import play.api.i18n.I18nSupport
import play.api.mvc._
import javax.inject.Inject
import play.api.routing.Router.Routes
import play.api.routing.Router
import play.api.routing.SimpleRouter
import play.api.routing.sird._
import play.api.http.HttpErrorHandler
import play.api.mvc.Results._
import play.api.mvc.Action
import play.api._

final class Routes  @Inject() (
override val controllerComponents: ControllerComponents
) extends SimpleRouter
    with I18nSupport
    with BaseControllerHelpers {

  override def routes: Router.Routes = {
    case GET(p"/") => TODO
  }
}