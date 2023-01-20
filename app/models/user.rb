class User < ApplicationRecord
    has_many :reviews, dependent: :destroy
    has_many :games, through: :reviews
    has_secure_password

    validates :username, :email, :password, :name, presence: true, on: :create
    validates :username, :email, uniqueness: true
end
