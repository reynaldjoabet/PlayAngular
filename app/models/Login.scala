package models

import play.api.libs.json._
import play.api.libs.json.Reads._
import play.api.libs.functional.syntax.{toFunctionalBuilderOps}

case class Login(userId: String, hash: String)

case class UserLogin(userId: String, password: String)

object UserLogin {

  implicit val implicitRegisterWrites:Writes[UserLogin] = new Writes[UserLogin] {
    def writes(userLogin: UserLogin): JsValue = {
      Json.obj("emailId" -> userLogin.userId,
        "password" -> userLogin.password,
      )
    }
  }

  implicit val implicitRegisterReads: Reads[UserLogin] = (
    (JsPath \ "emailId").read[String] and
      (JsPath \ "password").read[String]
    ) (UserLogin.apply _)
}