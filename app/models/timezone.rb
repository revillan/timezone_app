class Timezone < ActiveRecord::Base
  has_many :users
end
