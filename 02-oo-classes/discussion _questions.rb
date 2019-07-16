require 'pry'

# 3 . How would you select all of the words that start with the letter "a" from the below array?
food = ["apple", "pear", "face", "champagne", "palm tree", "aardvark", "pineapple"]

$results = []
def bad_version(stuff)
  stuff.each do |thing|
    if thing[0] == 'a'
      $results << thing
    end
  end
  return $results
end

def get_things_that_start_with_the_first_letter_a(stuff)
  things_that_start_with_a = []
  stuff.each do |thing|
    if thing[0] == 'a'
      things_that_start_with_a << thing
    end
  end
  things_that_start_with_a
end

def get_things_that_start_with_the_first_letter_a2(stuff)
  stuff.select do |thing|
    thing[0] == 'a'
  end
end

puts "Bad versions"
puts "first time"
puts bad_version(food)
puts "second time"
puts bad_version(food)
puts "third time"
puts bad_version(food)
puts

puts "Good versions"
puts get_things_that_start_with_the_first_letter_a(food)
puts get_things_that_start_with_the_first_letter_a2(food)


def word_count(sentence)
  binding.pry
  sentence.split(' ').length
end

def word_count_for_loop(sentence)
  i = 0
  words = 0
  while i < sentence.length
    letter = sentence[i]
    if letter == ' '
      words += 1
    end
    i += 1
  end

  return words + 1
end

def word_count_select(sentence)
  spaces = sentence.split('').select do |letter|
    letter == ' '
  end
  result = spaces.length + 1 
  binding.pry
  return result
end

puts word_count("Hi, isn't this a great and interesting sentence??")
puts word_count_select("Hi, isn't this a great and interesting sentence??")

def rude_greeting(name=nil)
  name ||= "you jerk"
  puts "Hey there, #{name}"
 end

def rude_greeting(name=nil)
  name = name || "you jerk"
  puts "Hey there, #{name}"
 end