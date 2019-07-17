require_relative './person'

asif = Person.new("Asif", 2)
steve = Person.new("Steve", 0)

puts asif.to_s
puts steve.to_s

puts "Total population #{Person.population}"
puts "Total       kids #{Person.kids}"