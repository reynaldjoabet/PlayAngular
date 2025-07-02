package service

import models.{Register, User, UserLogin}
import play.api.Logger
import repository.UserRepository

import javax.inject.{Inject, Singleton}

@Singleton
class UserService @Inject()(val userRepository: UserRepository, val authenticationService: AuthenticationService){
  private val logger = Logger(getClass)

  def registerUser(registerDetails : Register): Unit = {
    logger.info("registerUser service method invoked")
    val hashPassword = authenticationService.generateHash(registerDetails.password)
    userRepository.registerUser(registerDetails,hashPassword)
  }

  def getUsers() : List[User] = {
    logger.info("getUsers service method invoked")
    userRepository.getUsers
  }

  def login(userLogin: UserLogin): Unit = {
    logger.info("login - service method invoked")
    val userLoginDetail = userRepository.getUserLogin(userLogin.userId).orElse(throw new RuntimeException("INVALID_LOGIN"))
    logger.info("login - User exist & initializing authentication")
    try{
      authenticationService.validateUserLogin(userLoginDetail.get.hash,userLogin.password)
    } catch {
      case e: Exception =>
        logger.error("Exception occurred while validating user login - "+e.getMessage)
        if (e.getMessage contains("Invalid user")){
          logger.error("Invalid User")
          throw new RuntimeException("INVALID_LOGIN")
        }
        logger.error("Unhandled error")
        throw new RuntimeException("UNHANDLED_ERROR")
    }
  }

}