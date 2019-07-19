class Course
  attr_reader :title, :description
  @@all = []

  def initialize(title, description)
    @title = title
    @description = description
    @@all << self
  end

  def to_s
    @title
  end

  def self.all
    @@all
  end

  def add_student(student)
    Grade.new(student, self, 0)
  end

  # returns an array of Grade instances which have a reference
  # to a student, this course, and the grade for that student
  # in this course
  def gradebook
    Grade.all.select do |grade|
      grade.course == self
    end
  end

  # returns the value of grades for all students in this course
  # returns an array of integers
  def grades
    self.gradebook.map do |entry|
      entry.grade
    end
  end

  def best_student
  end

  # returns the average grade for all students in this course
  def average_grade
    grades.sum / grades.length

    # the manual approach
    # sum = 0
    # grades.each do |grade|
    #   sum += grade
    # end
    # sum
  end
end