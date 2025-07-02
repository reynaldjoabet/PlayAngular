package models

object Schedule extends Enumeration {
  protected case class ScheduleVal(quote: String) extends super.Val {}

  implicit def valueToScheduleVal(x: Value): ScheduleVal = x.asInstanceOf[ScheduleVal]

  type Schedule = Value

  val SUNDAY = ScheduleVal("TakeRest buddy!, Let the muscle grow")
  val MONDAY = ScheduleVal("Lets start with Chest!")
  val TUESDAY = ScheduleVal("Lets do Legs today!")
  val WEDNESDAY = ScheduleVal("Why not Shoulder today!")
  val THURSDAY = ScheduleVal("keep going with Biceps & Abs")
  val FRIDAY = ScheduleVal("Lets do Cardio today")
  val SATURDAY = ScheduleVal("Why Not Circuit with your favourite workouts")
}