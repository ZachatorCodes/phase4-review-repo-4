class ReviewsController < ApplicationController
    def create
        user = User.find_by(id: session[:user_id])
        review = user.reviews.create(review_params)
        if review.valid?
            render json: review, status: :created
        else
            render json: { errors: review.errors.full_messages }, status: :unprocessable_entity
        end         
    end

    def index
        reviews = Review.all
        render json: reviews, status: :ok  
    end

    def destroy
        review = Review.find_by(id: params[:id])
        review.destroy
        render json: review      
    end

    def update
        review = Review.find_by(id: params[:id])        
        if review.update(review_params)
            render json: review, status: :created
        else
            render json: { errors: review.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private

    def review_params
        params.require(:review).permit(:encabulator_id, :body)
    end
end
