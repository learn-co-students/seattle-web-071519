class Astronaut
  attr_reader :name, :rank
  @@all = []

  def initialize(name, rank)
    @name = name
    @rank = rank
    @@all << self
  end

  def self.all
    @@all
  end

  # given a string find the first astronaut that
  # has a name containing that string
  def self.find_by_name(name)
    @@all.find do |astronaut|
      astronaut.name.downcase.include? name.downcase
    end
  end

  # returns an array of every mission this astronaut has been on
  def missions
    Mission.all.select do |mission|
      mission.crew.include? self
    end
  end
end