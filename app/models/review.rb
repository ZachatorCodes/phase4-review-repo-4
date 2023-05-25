class Review < ApplicationRecord
    belongs_to :encabulator
    belongs_to :user
end
