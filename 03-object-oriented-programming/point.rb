# represents a 2D point
class Point
  attr_accessor :xx, :yy
  @@all = []

  def initialize(xx, yy)
    @xx = xx
    @yy = yy
    @@all << self
  end

  # slides a point by the amount specified
  def translate(dx, dy)
    @xx += dx
    @yy += dy
  end

  def distance_to(other_point)
    dx = self.xx - other_point.xx
    dy = self.yy - other_point.yy
    return Math.sqrt(dx * dx + dy * dy)
  end

  # accepts two points and returns the distance between them
  def Point.distance(x1, y1, x2, y2)
    dx = x1 - x2
    dy = y1 - y2
    return Math.sqrt(dx * dx + dy * dy)
  end

  # this method returns the average xx and yy for
  # all points that have been created.
  def Point.center
    # .each, .find, .filter, .map, .select
    total_x = 0
    total_y = 0
    @@all.each do |point|
      total_x += point.xx
      total_y += point.yy
    end

    average_x = total_x / @@all.length
    average_y = total_y / @@all.length
    Point.new(average_x, average_y)
  end
end