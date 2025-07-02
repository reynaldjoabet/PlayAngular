package repository

import com.google.inject.ImplementedBy
import models.{Login, Register, User}
import play.api.Logger

import javax.inject.{Inject, Singleton}
import scala.collection.mutable.Map

@ImplementedBy(classOf[OfficeUserRepository])
trait UserRepository {
  def getUsers : List[User]

  def registerUser(register: Register, hash: String): Unit

  def getUserLogin(userId: String): Option[Login]
}
@Singleton
class OfficeUserRepository @Inject extends UserRepository {

  private val logger: Logger = Logger(this.getClass())

  private val userList : Map[String,User] = Map()
  private val loginDetails : Map[String,Login] = Map()

  def getUsers : List[User] = {
    logger.info("getting user list")
    List(userList).flatMap(_.values)
  }

  private def addUser(user : User) : Unit = {
    logger.info("adding user to repo")
    userList += (user.userEmail -> user)
  }

  override def registerUser(register: Register,hash : String): Unit = {
    loginDetails.isDefinedAt(register.userEmail) match {
      case true => {
        logger.error("user already exist")
        throw new RuntimeException("User already available")
      }
      case false => {
        logger.info("User doesn't exist in repository")
      }
    }
    logger.info("adding user to list")
    loginDetails += (register.userEmail -> Login(register.userEmail,hash))
    addUser(User(register.userEmail,register.firstName,register.lastName))
  }

  override def getUserLogin(userId: String): Option[Login] = {
    logger.info("get user details for provided user")
    loginDetails.get(userId).orElse(Option.empty)
  }
}

