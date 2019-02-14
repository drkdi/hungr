class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.text "body", null: false
      t.integer :author_id
      t.integer :post_id
    end
  end
end
