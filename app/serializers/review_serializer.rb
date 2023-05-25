class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :body, :user

  belongs_to :encabulator
  belongs_to :user, serializer: ReviewUserSerializer
end
