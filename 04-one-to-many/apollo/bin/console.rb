require_relative '../config/environment'

buzz = Astronaut.new("Buzz Aldren", "Captain")
neil = Astronaut.new("Neil Armstrong", "Captain")
michael = Astronaut.new("Michael Collins", "Leuitenant Comander")
yuri = Astronaut.new("Yuri Gregarian", "Russian")
data = Astronaut.new("Data", "Leuitenant Comander")

apollo1 = Mission.new('Apollo 1', [data])
apollo11 = Mission.new('Apollo 11', [buzz, neil])
apollo13 = Mission.new('Apollo 13', [michael, yuri, buzz])

binding.pry