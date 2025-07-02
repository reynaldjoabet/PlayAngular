package models

import play.api.libs.functional.syntax.{toFunctionalBuilderOps}
import play.api.libs.json._
import play.api.libs.json.Reads._

case class User (userEmail: String, firstName:String, lastName:String)

object User {

  implicit val implicitUserWrites: Writes[User] = new Writes[User] {
    def writes(user: User): JsValue = {
      Json.obj("emailId" -> user.userEmail,
        "firstName" -> user.firstName,
        "lastName" -> user.lastName,
      )
    }
  }

  implicit val implicitUserReads: Reads[User] = (
    (JsPath \ "emailId").read[String] and
      (JsPath \ "firstName").read[String] and
      (JsPath \ "lastName").read[String]
    ) (User.apply _)
}
