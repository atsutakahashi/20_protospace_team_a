class Like < ActiveRecord::Migration
  def change
    add_column :prototypes, :like_counts, :integer
    remove_column :likes, :like_counts
  end
end
