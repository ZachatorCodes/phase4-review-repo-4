class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :name, :bio

  has_many :reviews
  has_many :users, through: :reviews
end
