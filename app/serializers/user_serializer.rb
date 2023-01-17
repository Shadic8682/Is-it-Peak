class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :password, :about, :profile_image
  has_many :reviews
end
