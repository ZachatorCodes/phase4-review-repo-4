class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :name, :bio

  # has_many :reviews
  # has_many :encabulators
end
