require_relative './track'

t1 = Track.new(8, '*')
t2 = Track.new(12, 'h') # horse

30.times do
  puts t1.to_s
  t1.tick
end

30.times do
  puts t2.to_s
  t2.tick
end