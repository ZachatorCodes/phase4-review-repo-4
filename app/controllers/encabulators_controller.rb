class EncabulatorsController < ApplicationController
    def index
        encabulators = Encabulator.all
        render json: encabulators, status: :ok
    end

    def create
        encabulator = Encabulator.create(encabulator_params)
        if encabulator.valid?
            render json: encabulator, status: :created
        else
            render json: {  errors: encabulator.errors.full_messages  }, status: :unprocessable_entity
        end
    end

    private

    def encabulator_params
        params.permit(:name, :description, :price, :image_url)
    end
end
