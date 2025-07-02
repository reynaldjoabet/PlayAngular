var userList : Map[Int,String] = Map()

userList += (1 -> "Test", 2-> "Test2", 3 -> "Test3")

val l = List(userList)

val listOfStrings = l.flatMap(_.values)

println(listOfStrings)

