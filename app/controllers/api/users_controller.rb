class Api::UsersController < ApplicationController

  def create
    @user = User.find_by_name(params[:name])
    @user = User.new(user_params) if @user.nil?
    @user.timezone = Timezone.first
    if @user.save
      render 'api/users/show'
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :image_url)
  end
end
