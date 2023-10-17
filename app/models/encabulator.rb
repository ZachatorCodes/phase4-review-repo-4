class Encabulator < ApplicationRecord
    has_many :reviews
    has_many :users, through: :reviews

    validates :name, presence: true
    validates :description, presence: true, length: { minimum: 20 }

    def self.find_words
        encabulators = self.all
        encabulator_array = []

        encabulators.each do |encabulator|
            if encabulator.description.include?(params[:word])
                encabulator_array << encabulator
            end
        end

        render json: encabulator_array
    end

end