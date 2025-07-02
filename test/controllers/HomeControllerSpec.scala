package controllers

import org.scalatestplus.play._
import org.scalatestplus.play.guice._
import play.api.test._
import play.api.test.Helpers._

/** Add your spec here. You can mock out a whole application including requests,
  * plugins etc.
  *
  * For more information, see
  * https://www.playframework.com/documentation/latest/ScalaTestingWithScalaTest
  */
class HomeControllerSpec
    extends PlaySpec
    with GuiceOneAppPerTest
    with Injecting {

  "HomeController GET" should {

    "render the index page from a new instance of controller" in {
      val stubLoggingAction = org.mockito.Mockito.mock(classOf[actions.LoggingAction])
      val controller = new HomeController(stubControllerComponents(), stubLoggingAction)
      val home = controller.index().apply(FakeRequest(GET, "/"))

      status(home) mustBe OK
      contentType(home) mustBe Some("text/plain")
      contentAsString(home) must include("Hello World!")
    }

  }
}
