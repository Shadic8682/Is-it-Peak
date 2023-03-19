class Game < ApplicationRecord
    has_many :reviews, dependent: :destroy

    validates :name, uniqueness: {case_sensitive: false}
end
