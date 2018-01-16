class Rename < ActiveRecord::Migration
  def change
    rename_column :likes, :counts, :like_counts
  end
end
