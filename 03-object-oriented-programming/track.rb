class Track
  # |*---------|
  # |-*--------|
  # |--*-------|
  # width - a integer representing how many dashes - are between the two bars |
  # item - a single character representing something going back and forth on the track
  def initialize(width, item)
    @width = width
    @item = item
    @position = 0
    @is_moving_right = true
  end

  # returns a string representing the object in its current state
  def to_s
    track = "|" + "-" * @width + "|"
    track[@position] = @item
    track
  end

  # updates the state of the object to move the item one position forward
  # left or right depending on which way it's currently going, and it will
  # flip it back the other direction when it reaches either end
  def tick
    if @position == @width && @is_moving_right
      @is_moving_right = false
      @position -= 1
    elsif @position == 0 && !@is_moving_right
      @is_moving_right = true
      @position += 1
    elsif @is_moving_right
      @position += 1
    else
      @position -= 1
    end


  end
end