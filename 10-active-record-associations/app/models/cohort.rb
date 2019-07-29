class Cohort < ActiveRecord::Base 
  has_many :awards
  has_many :comps, through: :awards

  def gold_list
    awards.select do |award|
      award.medal == 'gold'
    end
  end
end