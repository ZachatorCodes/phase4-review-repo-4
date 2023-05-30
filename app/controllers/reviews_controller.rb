class ReviewsController < ApplicationController
    def create
        user = User.find_by(id: session[:user_id])
        if user
            review = Review.create(review_params)
            if review.valid?
                render json: review, status: :created
            else
                render json: { errors: review.errors.full_messages }, status: :unprocessable_entity
            end
        else
            render json: { errors: ["not authorized"]}, status: :unauthorized
        end            
    end

    def index
        user = User.find_by(id: session[:user_id])
        reviews = Review.all
        if user
            render json: reviews, status: :ok
        else
            render json: { errors: ["not authorized"]}, status: :unauthorized
        end   
    end

    def destroy
        user = User.find_by(id: session[:user_id])
        review = Review.find_by(id: params[:id])
        if user
            review.destroy
            render json: review
        else
            render json: { errors: ["not authorized"]}, status: :unauthorized
        end           
    end

    def update
        user = User.find_by(id: session[:user_id])
        review = Review.find_by(id: params[:id])
        if user
            review = review.update(review_params)
            render json: review, status: :created
        else
            render json: { errors: ["not authorized"]}, status: :unauthorized
        end
    end

    private

    def review_params
        params.require(:review).permit(:user_id, :encabulator_id, :body)
    end
end
