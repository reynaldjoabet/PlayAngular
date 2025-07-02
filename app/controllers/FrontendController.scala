package controllers

import javax.inject._
import play.api.mvc.*
import play.libs.pekko.PekkoGuiceSupport
import play.libs.streams.Accumulator
import play.libs.streams.ActorFlow
import play.libs.streams.PekkoStreams
import play.libs.Files
import play.libs.Json
import play.filters.csrf.RequireCSRFCheckAction
import play.filters.csrf.AddCSRFToken
import play.filters.csrf.AddCSRFTokenAction
import io.jsonwebtoken.Jwts.*
@Singleton
class FrontendController @Inject() (
    assets: Assets,
    cc: ControllerComponents
) extends AbstractController(cc) {

  def index: Action[AnyContent] =
    assets.at("/public", "index.html", aggressiveCaching = false)

  def assetOrDefault(resource: String): Action[AnyContent] = {
    if resource.startsWith("static") ||
      resource.endsWith(".css") ||
      resource.endsWith(".ico")
      || resource.endsWith(".js")
      || resource.endsWith(".png")
    then assets.at("/public", resource, aggressiveCaching = false)
    else index

  }

  def unknown(resource: String): Action[AnyContent] =
    Action {
      NotFound(s"$resource not found")
    }

}
