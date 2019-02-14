class RemoveLikesFromPosts < ActiveRecord::Migration[5.2]
  def change
    remove_column :posts, :likes
  end
end
