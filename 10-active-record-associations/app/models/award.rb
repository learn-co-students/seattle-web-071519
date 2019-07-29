class Award < ActiveRecord::Base 
  belongs_to :cohort
  belongs_to :comp
end