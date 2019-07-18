class Bicycle
 
  attr_reader :tire
  @@bikes = []
  @@styles = []
 
    def initialize(tire, gears, style)
      @tire = tire
      @gears = gears
      @style = style

      @@bikes << self
      @@styles << style
    end
 
    def tire_size
      self.tire
    end

    def tire_size=(value)
      self.tire = value
    end
 
    def gears
      @gears
    end

    def self.bikes
      @@bikes
    end

    def self.styles
      @@bikes.map do |bike|
        bike.style
      end
    end
 
end
 
mongoose = Bicycle.new(4, 10, "BMX")