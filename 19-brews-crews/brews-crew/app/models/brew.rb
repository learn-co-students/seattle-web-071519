class Brew < ApplicationRecord
  has_many :purchases
  validates :blend_name, uniqueness: true

  def self.strongest
    @strongest_brew = self.all.max_by{|per_brew| per_brew.strength }
    @strongest = self.all.select{|brew| brew.strength == @strongest_brew.strength}
  end

  def customers
    self.purchases.map{ |purchase| purchase.customer_name}
  end
end
