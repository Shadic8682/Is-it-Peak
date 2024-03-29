class SessionsController < ApplicationController
    skip_before_action :authorized_user, only: [:create, :index]
  
    def create
      user = User.find_by(username: params[:username])
  
      if user&.authenticate(params[:password])
        session[:user_id] = user.id
  
        render json: user, status: :ok
      else
        render json: {
                 errors: 'Invalid Username or Password',
               },
               status: :unauthorized
      end
    end

    def show
      render json: current_user, status: :ok
    end
  
    def delete
      session.delete :user_id
      head :no_content
    end
  end