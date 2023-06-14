Rails.application.routes.draw do
  resources :encabulators, only: [:index, :create]
  resources :reviews, only: [:index, :create, :destroy, :update]

  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/encabulator_reviews/:n", to: "encabulators#encabulator_reviews"
end
