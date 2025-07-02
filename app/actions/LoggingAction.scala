package actions
import play.api.* 
import play.api.mvc.*
import play.api.mvc.BodyParser
import javax.inject._
import scala.annotation.internal.Body
import scala.concurrent.ExecutionContext
import scala.concurrent.Future
final case class LoggingAction @Inject()(parser:BodyParsers.Default)(implicit ec: ExecutionContext) extends ActionBuilder[Request, AnyContent]   with Logging  {
 

  override protected def executionContext: ExecutionContext = ec

  override def invokeBlock[A](request: Request[A], block: Request[A] => Future[Result]): Future[Result] = {
    // Log the request details
    logger.info(s"Request received: ${request.method} ${request.uri} with headers: ${request.headers.toSimpleMap}")
    val requestBody=request.body.asInstanceOf[AnyContentAsJson].json 

    (requestBody \"emailId").asOpt[String].map(emailId =>logger.info(s"Email ID: $emailId"))
    .getOrElse(logger.warn("Email ID not found in the request body"))
        
    // Call the next block in the action chain
       block(request).map { result =>
         // Log the response details
         logger.info(s"Response sent with status: ${result.header.status}")
         result
     }
}

}