require_relative '../config/environment'

is_running = true
while is_running
  puts 'Welcome to registrar!'
  puts "What would you like to do?"
  puts "1. View grades"
  puts "2. Enter new student"
  puts "3. Enter new course"
  puts "4. Exit"

  choice = gets.chomp
  if choice == "1"
    puts Grades.all
  elsif choice == "4"
    is_running = false
  end
end