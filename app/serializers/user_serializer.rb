class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :email, :password, :about, :profile_image
  has_many :reviews
  has_many :games
end
