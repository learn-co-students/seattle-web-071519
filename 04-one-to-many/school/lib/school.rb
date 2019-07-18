class School
  attr_reader :name, :mascot, :colors
  attr_accessor :district
  @@all = []

  def initialize(name, mascot, colors, district)
    @name = name
    @mascot = mascot
    @colors = colors
    @district = district
    @@all << self
  end

  def to_s
    @name
  end

  def self.all
    @@all
  end
end