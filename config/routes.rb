Rails.application.routes.draw do
  resources :encabulators, only: [:index, :create]
  resources :reviews, only: [:index, :create, :destroy, :update]

  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"


end

#Implement a custom route with a word as a parameter that finds all the encabulators that have that word in the description, implementing the custom method you created.