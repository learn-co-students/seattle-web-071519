class Person
  attr_reader :name, :kids
  @@all = []

  def initialize(name, kids)
    @name = name
    @kids = kids
    @@all << self
  end

  def Person.all
    @@all
  end

  def to_s
    "Hi, I'm #{self.name}. I have #{self.kids} kids"
  end

  # iterates over every instance of a Person object that has been created
  # and sums the total number of their kids and themselves.
  def Person.population
    sum = 0
    self.all.each do |person|
      sum += 1 + person.kids
    end
    sum
  end

  def self.kids
    kids = 0
    self.all.each do |person|
      kids += person.kids
    end
    kids
  end
end