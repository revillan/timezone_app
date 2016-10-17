class Api::UsersController < ApplicationController

  def create
    puts params
    @user = User.find_by_name(params[:user][:name])
    if @user.nil?
      @user = User.new(user_params)
      @user.timezone = Timezone.find_by_name("Pacific")
    end
    if @user.save
      render 'api/users/show'
    end
  end

  def update
    @user = User.find_by_id(params[:id])
    if @user.update(timezone: Timezone.find_by_name(params[:timezone]))
      render 'api/users/show'
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :image_url)
  end
end
