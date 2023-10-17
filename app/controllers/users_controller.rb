class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create, :challenge, :charcount]
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

    def charcount
        reviews = Review.all

        filtered_reviews = reviews.select {|review| review.body.length > params[:num].to_i}

        if (filtered_reviews.length == 0)
            render json: {error: "No review contains more than #{params[:num]} characters. Please try again with a smaller value."}
        else
            users = filtered_reviews.map {|review| review.user}
            render json: users
        end           
    end


    private

    def user_params
        params.permit(:username, :password, :name, :bio, :password_confirmation)
    end

end