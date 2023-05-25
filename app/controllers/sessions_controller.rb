class SessionsController < ApplicationController
    def create
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: { error: "NOT AUTHORIZED" }, status: :unauthorized
        end
    end

    def destroy
        user = User.find_by(id: session[:id])
        if user
            session.delet :user_id
            head: :no_content, status: :no_content
        else
            render json: { errors: "NOT AUTHORIZED" }, status: :unauthorized
        end
    end
end
