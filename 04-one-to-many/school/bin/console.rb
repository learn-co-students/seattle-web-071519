require_relative '../config/environment'

arlen = SchoolDistrict.new("Arlen", "Hank Hill")
mars = SchoolDistrict.new("Mars", "Buzz Aldren")

arlen_elementary = School.new("Arlen Elementary", "Rams", ["red", "green"], arlen)
mars_elementary = School.new("Mars Elementary", "Martians", ["maroon", "burgandy"], mars)

puts "Schools in Arlen:"
puts arlen.schools
puts
puts "Schools in Mars:"
puts mars.schools
puts

puts "Arlen Elementary is in district"
puts arlen_elementary.district
puts "Mars Elementary is in district"
puts mars_elementary.district

binding.pry