require_relative '../config/environment'

# Student		
# id	name	SSN
# 11	Bartholomew	434-09-6532
# 22	Lisa	980-98-0000
# 33	Milhouse	989-00-1111

# Course		
# id	title	description
# 100	English	...
# 200	Math	...
# 300	Science	...
# 400	Programming	...

# Grade			
# id	student_id	course_id	grade
# 1	22	100	99
# 2	22	200	102
# 3	22	300	123
# 4	11	100	52
# 5	33	100	84
# 6	11	400	0
# 7	33	400	95
# 	22	400	110

bart = Student.new("Bart", 234)
lisa = Student.new("Lisa", 56543)
milhouse = Student.new("Milhouse", 2345)

math = Course.new("Math", "numbers and stuff")
english = Course.new("English", "read books!")
science = Course.new("Science", "mix chemicals")
programming = Course.new("Programming", "Ruby rules!!")

Grade.new(lisa, english, 99)
Grade.new(lisa, science, 102)
Grade.new(lisa, math, 123)
Grade.new(lisa, programming, 110)

Grade.new(bart, math, 52)
Grade.new(bart, english, 44)
Grade.new(bart, programming, 0)

Grade.new(milhouse, english, 84)
Grade.new(milhouse, programming, 95)

bobby = Student.new("Bobby Hill")
bobby.enroll(programming, 198)

puts "Barts courses:"
puts bart.courses
puts

binding.pry