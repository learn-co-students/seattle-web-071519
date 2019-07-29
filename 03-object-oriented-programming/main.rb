require_relative './track'

t1 = Track.new(8, '*')
t2 = Track.new(12, 'h') # horse

30.times do
  `clear`
  puts t1.to_s
  t1.tick
end

30.times do
  system('clear')
  puts t2.to_s
  sleep 0.2
  t2.tick
end
