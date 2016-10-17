class Api::TimezonesController < ApplicationController

  def index
    @timezones = Timezone.all
    render 'api/timezones/index'
  end

end
