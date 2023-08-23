class Encabulator < ApplicationRecord
    has_many :reviews
    has_many :users, through: :reviews

    validates :name, presence: true
    validates :description, presence: true, length: { minimum: 20 }


end

# Make a custom method that takes in an argument and 
# returns all the encabulators that have a description with that parameter present somewhere in the string (fuzzy match). 


