package models

import play.api.libs.functional.syntax.toFunctionalBuilderOps
import play.api.libs.json.Reads._
import play.api.libs.json._

case class UserSession (userEmail: String, cookie:String, createdAt:String)

object UserSession {

  implicit val implicitUserSessionWrites:Writes[UserSession] = new Writes[UserSession] {
    def writes(session: UserSession): JsValue = {
      Json.obj("userEmail" -> session.userEmail,
        "sessionCookie" -> session.cookie,
        "createdAt" -> session.createdAt,
      )
    }
  }

  implicit val implicitUserSessionReads: Reads[UserSession] = (
    (JsPath \ "userEmail").read[String] and
      (JsPath \ "sessionCookie").read[String] and
      (JsPath \ "createdAt").read[String]
    ) (UserSession.apply _)
}
