class SchoolDistrict
  attr_reader :city_name, :superattendant
  # attr_reader :schools
  @@all = []

  def initialize(city_name, person)
    @city_name = city_name
    @superattendant = person

    # instead of manually keeping an array of schools
    # that we would have to manipulate and add/remove
    # schools when things change, now we just have one
    # property on the School class and we can define a
    # method that iterates through schools to select ones
    # that refer to this district.
    # This is a "single source of truth." It prevents us
    # from ever having a school that refers to this
    # district that is not in this array, or having a
    # school in this array that does not refer back to it
    # in it's own district property.
    # @schools = []

    @@all << self
  end

  def to_s
    @city_name
  end

  def self.all
    @@all
  end

  def schools
    School.all.select do |school|
      school.district == self
    end
  end
end