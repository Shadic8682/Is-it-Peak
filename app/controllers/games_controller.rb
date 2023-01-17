class GamesController < ApplicationController
    
    def index
        render json: Game.all
    end

    def create
        render json: Game.create(:game_params), status: :created
    end

    private

    def game_params
        params.permit(:name, :image_url, :description)
    end
end
