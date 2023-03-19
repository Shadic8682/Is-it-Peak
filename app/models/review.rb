class Review < ApplicationRecord
  belongs_to :user
  belongs_to :game

  def self.latest
    self.last(3)
  end

  validates :game, uniqueness: {scope: :user,
message: "cannot review same game twice"}

end
