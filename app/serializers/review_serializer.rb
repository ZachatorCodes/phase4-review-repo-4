class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :encabulator_id, :body
end
