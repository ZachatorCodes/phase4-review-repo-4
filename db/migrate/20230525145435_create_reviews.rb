class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.integer :user_id
      t.integer :encabulator_id
      t.string :body

      t.timestamps
    end
  end
end
