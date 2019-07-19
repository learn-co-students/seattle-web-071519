class Student
  attr_reader :name, :ssn
  @@all = []

  def initialize(name, ssn)
    @name = name
    @ssn = ssn
    @@all << self
  end

  def to_s
    @name
  end

  def self.all
    @@all
  end

  def enroll(course, percent=0)
    Grade.new(self, course, percent)
  end

  # returns an array of grades for this student
  def grades
    Grade.all.select do |grade|
      grade.student == self
    end
  end

  # returns an array of courses the student is in
  def courses
    self.grades.collect do |grade|
      grade.course
    end
  end
end