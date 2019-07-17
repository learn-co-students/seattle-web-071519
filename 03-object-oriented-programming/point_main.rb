require_relative './point'

seattle = Point.new(47.6062, 122.3321)
portland = Point.new(46.6062, 120.3321)
calgary = Point.new(51.0486, 114.0708)

puts "distance from Seattle to Calgary"
puts Point.distance(seattle.xx, seattle.yy, calgary.xx, calgary.yy)
puts seattle.distance_to(calgary)

puts Point.distance(51.5074, 0.1278, 31.2304, 121.4737)

center = Point.center
puts center.distance_to(seattle)
puts center.distance_to(calgary)
puts center.distance_to(portland)
