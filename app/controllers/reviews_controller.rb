class ReviewsController < ApplicationController
    def create
        review = Review.create(review_params)
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
        review.update(review_params)
        render json: review, status: :created
    end

    private

    def review_params
        params.require(:review).permit(:user_id, :encabulator_id, :body)
    end
end
