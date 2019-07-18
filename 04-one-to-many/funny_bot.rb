class FunnyBots  
 
  attr_accessor :name, :quotes  

  @@bots = []

  def initialize(name, quotes)
    @name = name
    @quotes = quotes
    @@bots << self
  end

 def random_quote
    self.quotes.sample
  end

  def self.bots
    @@bots
  end

end

archer = FunnyBots.new("Archer", ["Danger Zone!", "Read a book", "The cumulative hangover would literally kill me"] )
king_of_the_hill = FunnyBots.new("King of the Hill", ["Gosh dang it bobby"])
friends = FunnyBots.new("Freinds", []`)