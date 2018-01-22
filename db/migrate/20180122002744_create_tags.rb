class CreateTags < ActiveRecord::Migration
  def change
    create_table :tags do |t|
      t.string :tags_name
      t.timestamps
    end
    add_index :tags, :tags_name
  end
end
