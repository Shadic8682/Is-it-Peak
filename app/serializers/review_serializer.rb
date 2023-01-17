class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :critique, :review_score
  belongs_to :user
  belongs_to :game
end
