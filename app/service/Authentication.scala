package service

import com.google.inject.ImplementedBy
import play.api.Logger

import javax.inject.Singleton
import scala.util.{Failure, Success}

@ImplementedBy(classOf[AuthenticationService])
trait AuthInterface {
  def generateHash(password: String): String

  def validateUserLogin(hash: String, password: String): Unit
}

@Singleton
class AuthenticationService extends AuthInterface {
  private val logger = Logger(getClass)
  override def generateHash(password:String): String = "password.bcryptSafeBounded match {"
    // case Success(value) => {
    //   logger.info("generated hash value for password")
    //   value
    // }
    // case Failure(exception) => {
    //   logger.error("exception occurred while hashing the password "+exception)
    //   throw new RuntimeException("Exception occurred while parsing the password")
    // }
 // }

  override def validateUserLogin(hash: String, password: String): Unit = ()//{
    // password.isBcryptedSafeBounded(hash) match {
    //   case Success(value) =>
    //     logger.info("Login validation executed!")
    //     if (!value) {
    //       logger.warn("Login validation failed")
    //       throw new RuntimeException("Invalid user")
    //     }
    //   case Failure(exception) => {
    //     logger.error("Exception occurred while parsing the password "+exception)
    //     throw new RuntimeException("Exception occurred while parsing the password")
    //   }
    //}
  //}
}
