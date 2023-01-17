class GameSerializer < ActiveModel::Serializer
  attributes :id, :image_url, :name, :description
  has_many :reviews
end
