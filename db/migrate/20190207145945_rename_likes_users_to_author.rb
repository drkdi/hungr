class RenameLikesUsersToAuthor < ActiveRecord::Migration[5.2]
  def change
    rename_column :likes, :user_id, :author_id 
  end
end
