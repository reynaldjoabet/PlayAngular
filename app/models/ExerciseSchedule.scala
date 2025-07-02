package models

import play.api.mvc.QueryStringBindable

case class ExerciseSchedule(weekday: String)

object ExerciseSchedule {

  implicit def queryStringBindable(implicit stringBinder: QueryStringBindable[String]):QueryStringBindable[ExerciseSchedule] = new QueryStringBindable[ExerciseSchedule] {
    override def bind(key: String, params: Map[String, Seq[String]]): Option[Either[String, ExerciseSchedule]] = {
      for {
        weekday <- stringBinder.bind("weekday", params)
      } yield {
        (weekday) match {
          case (Right(weekday)) => Right(ExerciseSchedule(weekday))
          case _ => Left("Unable to bind an AgeRange")
        }
      }
    }

    override def unbind(key: String, exerciseSchedule: ExerciseSchedule): String = {
      stringBinder.unbind("from", exerciseSchedule.weekday)
    }
  }
}