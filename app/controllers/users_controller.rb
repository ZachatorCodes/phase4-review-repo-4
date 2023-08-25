class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create, :challenge]
    def create
        user = User.create(user_params)
        if user.valid?
            render json: user, status: :created
            session[:user_id] = user.id
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def show
        user = User.find_by(id: session[:user_id])
        render json: user, status: :ok
    end


    private

    def user_params
        params.permit(:username, :password, :name, :bio, :password_confirmation)
    end
end


# Make a custom route that finds all users that have a review that is over n characters where n is a param sent back in the route.
# Once you find the users that fit that criterion, turn around and find all the encabulators that those users have written about and render this back as json. 
#If you don’t find any users that meet the criterion, write a descriptive message telling us that we should search again with a smaller than n parameter.