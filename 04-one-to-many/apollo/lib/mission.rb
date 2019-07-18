class Mission
  attr_reader :name
  attr_accessor :crew
  @@all = []

  def initialize(name, crew)
    @name = name 
    @crew = crew
    @@all << self
  end

  def self.all
    @@all
  end
end