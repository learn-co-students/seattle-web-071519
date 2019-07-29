=begin
Problem Domain
Create a method `palindrome?()` that takes in a string as an argument and determines whether that string is a palindrome. Output the input string with a return of `True` or `False` for the method.
=end

# Solution 4

def palindrome?(string)
  i_left = 0
  i_right = string.length-1
  # run it for only half the string so the indices
  # never cross over and double-check things
  while i_left < i_right 
      if string[i_left] != string[i_right]
          return false 
      end 
      i_left += 1
      i_right -= 1
  end
  true
end

puts ("Is \" \" a Palindrome? #{palindrome?(" ")}")
puts ("Is \"rr\" a Palindrome? #{palindrome?("rr")}")
puts ("Is \"hanah\" a Palindrome? #{palindrome?("hanah")}")
puts ("Is \"flatiron\" a Palindrome? #{palindrome?("flatiron")}")
puts ("Is \"hell0\" a Palindrome? #{palindrome?("hello")}")
puts ("Is \"Tacocat\" a Palindrome? #{palindrome?("Tacocat")}")
