class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :encabulator_id, :body

  belongs_to :encabulator
  belongs_to :user, serializer: ReviewUserSerializer
end
