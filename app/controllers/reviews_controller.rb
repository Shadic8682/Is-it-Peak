class ReviewsController < ApplicationController
    skip_before_action :authorized_user, only: [:index, :show, :latest]

    def index
        render json: Review.all, status: :found
    end

    def latest
        render json: Review.latest
    end

    def create
        new_review = Review.create!(review_params)
        render json: new_review
    end

    def user_reviews
        render json: current_user.reviews
    end

    private

    def review_params
        params.permit(:review_score, :game_id, :user_id, :critique)
    end
end
