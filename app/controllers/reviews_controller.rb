class ReviewsController < ApplicationController
    user = User.find_by(id: session[:user_id])
    def create
        if user
            review = Review.create(review_params)
            if review.valid?
                render json: review, status: :created
            else
                render json: { error: "Review not valid" }, status: :unprocessable_entity
            end
        else
            render json: { errors: ["not authorized"]}, status: :unauthorized
        end            
    end

    def index
        
    end

    def destroy
    end

    def update
    end

    private

    def review_params
        params.permit(:user_id, :encabulator_id, :body)
end
