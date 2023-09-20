Rails.application.routes.draw do
  
  resources :encabulators, only: [:index, :create]
  resources :reviews, only: [:index, :create, :destroy, :update]
  resources :users

  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/encabulators/:word", to: "encabulators#description"


end

