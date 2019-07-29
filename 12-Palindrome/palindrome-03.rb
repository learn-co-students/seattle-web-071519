=begin
Problem Domain
Create a method `palindrome?()` that takes in a string as an argument and determines whether that string is a palindrome. Output the input string with a return of `True` or `False` for the method.
=end

# Solution 3

def palindrome?(string)
  for i in (0..(string.length / 2 - 1))
      if string[i] != string[-1 - i]
          return false 
      end
  end 
  true
end

puts ("Is \" \" a Palindrome? #{palindrome?(" ")}")
puts ("Is \"rr\" a Palindrome? #{palindrome?("rr")}")
puts ("Is \"hanah\" a Palindrome? #{palindrome?("hanah")}")
puts ("Is \"flatiron\" a Palindrome? #{palindrome?("flatiron")}")
puts ("Is \"hell0\" a Palindrome? #{palindrome?("hello")}")
puts ("Is \"Tacocat\" a Palindrome? #{palindrome?("Tacocat")}")