class AddCommentsToPosts < ActiveRecord::Migration[5.2]
  def change
    add_column :posts, :comments, :text
  end
end
