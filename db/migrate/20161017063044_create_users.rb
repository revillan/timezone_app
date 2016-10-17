class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name, null: false
      t.integer :timezone_id
      t.timestamps null: false
    end
    add_index :users, :timezone_id
  end
end
