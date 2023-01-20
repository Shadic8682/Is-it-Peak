class Review < ApplicationRecord
  belongs_to :user
  belongs_to :game

  def self.latest
    self.last(3)
  end


end
