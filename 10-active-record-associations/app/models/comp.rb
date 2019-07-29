class Comp < ActiveRecord::Base 
  has_many :awards
  has_many :cohorts, through: :awards
end