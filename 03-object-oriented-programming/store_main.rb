require_relative './store'

ice_cream_store = Store.new("Ice Cream")
sandwich_store = Store.new("Paseo")
shoe_store = Store.new("Payless Shoe Store")

sandwich_store.sell(10)
sandwich_store.sell(10)
sandwich_store.sell(10)
sandwich_store.sell(10)

ice_cream_store.sell(7)
ice_cream_store.sell(7)
ice_cream_store.sell(7)
ice_cream_store.sell(7)

shoe_store.restock(1434)

puts "Businesses in the red:"
puts Store.stores_in_the_red