package service

import models.UserSession
import play.api.Logger
import play.api.mvc.Result
import play.api.mvc.Results.Forbidden
import repository.SessionRepository

import java.time.{LocalDateTime, ZoneId, ZonedDateTime}
import java.time.format.DateTimeFormatter
import java.time.temporal.ChronoUnit
import javax.inject.{Inject, Singleton}
import scala.util.{Failure, Random}

@Singleton
class SessionService @Inject()(val repository: SessionRepository){
  private val logger = Logger(getClass)

  val timeFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss")

  def activateSession(userId : String): String = {
    logger.info("session creation started!")
    var sessionCookie = generateCookie()
    repository.setSession(UserSession(userId,sessionCookie,timeFormatter.format(LocalDateTime.now())))
    sessionCookie
  }

  def validateSession(userSession: UserSession): Option[String] = {
    logger.info("session validation started!")
    repository.getSession(userSession.userEmail) match {
      case Some(sessionDetail) =>
        if(!validateCookie(sessionDetail.cookie, userSession.cookie) || !validateTimeStamp(sessionDetail.createdAt)){
          Some("Session Validation failed")
        }else {
          None
        }
      case None => Some("unable to parse the request")
    }
  }

  private def validateCookie(expectedCookie: String, actualCookie : String): Boolean ={
    logger.info("validating cookie!")
    expectedCookie.equals(actualCookie)
  }

  private def validateTimeStamp(createdAt: String): Boolean ={
    logger.info("validating auth cookie time!")
    val difference = ZonedDateTime.of(LocalDateTime.parse(createdAt,timeFormatter),ZoneId.of("Europe/London")).until(ZonedDateTime.now(ZoneId.of("Europe/London")),ChronoUnit.MINUTES)
    logger.info("difference : "+difference)
    difference <= 30
  }

  private def generateCookie(): String = {
    Iterator.continually(Random.nextPrintableChar())
      .filter(_.isLetterOrDigit)
      .take(15)
      .mkString
  }

}