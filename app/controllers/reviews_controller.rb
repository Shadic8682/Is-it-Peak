class ReviewsController < ApplicationController
    skip_before_action :authorized_user, only: [:index, :show, :latest]

    def index
        render json: Review.all, status: :found
    end

    def latest
        render json: Review.last(3)
    end

    def create
        render json: Review.create!(:review_params)
    end

    private

    def review_params
        params.permit(:review_score, :game_id, :user_id)
    end
end
