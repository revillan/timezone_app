class TimezonesController < ApplicationController

  def create
    @timezone = Timezone.new(timezone_params)
    @timezone.save
  end

  private

  def timezone_params
    params.require(:timezone).permit(:name, :diff)
  end
end
