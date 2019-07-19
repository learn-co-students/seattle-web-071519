class Grade
  attr_reader :student, :course, :grade
  @@all = []

  def initialize(student, course, grade)
    @student = student
    @course = course
    @grade = grade
    @@all << self
  end

  def to_s
    "#{@student.name} has a #{@grade} in #{@course.title}"
  end

  def self.all
    @@all
  end
end