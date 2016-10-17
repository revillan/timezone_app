class User < ActiveRecord::Base
  belongs_to :timezone,
    primary_key: :id,
    foreign_key: :timezone_id,
    class_name: "Timezone"


end
