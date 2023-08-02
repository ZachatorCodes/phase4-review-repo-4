Rails.application.routes.draw do
  resources :encabulators, only: [:index, :create]
  resources :reviews, only: [:index, :create, :destroy, :update]

  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  get "/users/:n", to: "users#challenge"

end



# Make a custom route that takes a parameter of a number. Then use this number to determine all the users who have more than that number of reviews. When you have found the users who meet this criterion, turn around and find all the encabulators associated with those users. Render back an array of encabulator objects. If not users meet that criteria send back a message in json saying so and including the number sent as a parameter in the message. 
