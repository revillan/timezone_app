class CreateTimezones < ActiveRecord::Migration
  def change
    create_table :timezones do |t|
      t.string :name, null: false
      t.integer :diff, null: false, unique: true
      t.timestamps null: false
    end
  end
end
