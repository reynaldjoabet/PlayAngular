
package repository

import com.google.inject.ImplementedBy
import models.UserSession
import play.api.Logger

import javax.inject.{Inject, Singleton}
import scala.collection.mutable.Map
import scala.util.Random

@ImplementedBy(classOf[UserSessionRepository])
trait SessionRepository {
  def setSession(userSession: UserSession) : Unit

  def getSession(userId: String) : Option[UserSession]
}
@Singleton
class UserSessionRepository @Inject extends SessionRepository {

  private val logger: Logger = Logger(this.getClass())

  private val sessionList : Map[String,UserSession] = Map()

  def setSession(userSession: UserSession) : Unit = {
    logger.info("setting user session")
    sessionList += (userSession.userEmail -> userSession)
  }

  override def getSession(userId: String): Option[UserSession] = {
    logger.info("getting user session")
    sessionList.get(userId)
  }
}

