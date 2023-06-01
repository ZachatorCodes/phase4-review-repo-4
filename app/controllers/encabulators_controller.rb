class EncabulatorsController < ApplicationController
    def index
        user = User.find_by(id: session[:user_id])
        encabulators = Encabulator.all
        if user
            render json: encabulators, status: :ok
        else
            render json: { errors: ["not authorized"]}, status: :unauthorized
        end
    end

    def create
        user = User.find_by(id: session[:user_id])
        if user
            encabulator = Encabulator.create(encabulator_params)
            if encabulator.valid?
                render json: encabulator, status: :created
            else
                render json: {  errors: encabulator.errors.full_messages  }, status: :unprocessable_entity
            end
        else
            render json: { error: "NOT AUTHORIZED"}, status: :unauthorized
        end
    end

    private

    def encabulator_params
        params.permit(:name, :description, :price, :image_url)
    end
end
