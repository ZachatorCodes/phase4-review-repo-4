class User < ApplicationRecord
    has_many :reviews
    has_many :users, through: :reviews

    validates :username, presence: true, uniqueness: true
    validates :name, presence: true
end
