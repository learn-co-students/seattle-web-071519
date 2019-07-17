class Store
  attr_reader :name, :sales
  @@all = []

  def initialize(name)
    @name = name
    @sales = 0
    @@all << self
  end

  def self.all
    @@all
  end

  def to_s
    @name
  end

  # spend money to restock the store
  def restock(amount)
    @sales -= amount
  end

  def sell(amount)
    @sales += amount
  end

  # returns an array of store instances that have negative sales
  def Store.stores_in_the_red
    # .each, .find, .filter, .select, .map
    @@all.filter do |store|
      store.sales < 0
    end
  end
end