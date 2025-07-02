package models

import play.api.libs.json._
import play.api.libs.json.Reads._
import play.api.libs.functional.syntax.{toFunctionalBuilderOps}

case class Register(userEmail: String, password: String, firstName: String, lastName: String)

object Register {

  implicit val implicitRegisterWrites:Writes[Register] = new Writes[Register] {
    def writes(registerDetails: Register): JsValue = {
      Json.obj("emailId" -> registerDetails.userEmail,
        "password" -> registerDetails.password,
        "firstName" -> registerDetails.firstName,
        "lastName" -> registerDetails.lastName,
      )
    }
  }

  implicit val implicitRegisterReads: Reads[Register] = (
    (JsPath \ "emailId").read[String] and
      (JsPath \ "password").read[String] and
      (JsPath \ "firstName").read[String] and
      (JsPath \ "lastName").read[String]
    ) (Register.apply _)
}