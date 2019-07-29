=begin
Problem Domain
Create a method `palindrome?()` that takes in a string as an argument and determines whether that string is a palindrome. Output the input string with a return of `True` or `False` for the method.
=end
=begin
def palindrome?(string)
  string == string.reverse
end

def palindrome?(string)
  string.downcase == string.downcase.reverse
end

def palindrome?(string)
  #string.downcase.delete(' ') == string.downcase.delete(' ').reverse
  #refactor for DRY
  str = string.downcase.delete(' ')
  str == str.reverse
end
=end

def switch(string)
  forward = string.split('')
  reverse = []
  counter = -1
    until reverse.length == forward.length
      reverse << forward[counter]
      counter -= 1
    end
    reverse.join
end



def palindrome?(string)
  switch(string).downcase == string.downcase
end

# puts switch("hana")
puts ("Is \" \" a Palindrome? #{palindrome?(" ")}")
puts ("Is \"rr\" a Palindrome? #{palindrome?("rr")}")
puts ("Is \"hanah\" a Palindrome? #{palindrome?("hanah")}")
puts ("Is \"flatiron\" a Palindrome? #{palindrome?("flatiron")}")
puts ("Is \"hell0\" a Palindrome? #{palindrome?("hello")}")
puts ("Is \"Tacocat\" a Palindrome? #{palindrome?("Tacocat")}")