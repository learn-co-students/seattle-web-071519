require 'pry'

class Dog
  attr_reader :name, :is_hungry
  attr_writer :is_hungry
  attr_accessor :is_hungry

  @@all = []

  def initialize(name)
    @name = name
    @is_hungry = true

    @@all << self
  end

  def Dog.all
    @@all
  end

  def self.feed_all_dogs
    Dog.all.each do |dog|
      dog.feed
    end
  end

  def feed
    @is_hungry = false
  end

  def walk
    @is_hungry = true
  end

  # we don't need to manually create this
  # "setter" because we're using attr_writer
  # def is_hungry=(value)
  #   @is_hungry = value
  # end

  # we don't need to define these functions
  # manually because we're using attr_reader now
  # def name
  #   puts "accessing name"
  #   @name
  # end

  # def is_hungry
  #   puts "accessing is_hungry"
  #   @is_hungry
  # end

end

lassie = Dog.new("Lassie")
clifford = Dog.new("Clifford")
beethoven = Dog.new("Beethoven")

if clifford.is_hungry
  puts "#{clifford.name} is hungry"
end

binding.pry
