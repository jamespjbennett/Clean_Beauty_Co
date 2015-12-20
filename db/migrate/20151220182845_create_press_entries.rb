class CreatePressEntries < ActiveRecord::Migration
  def change
    create_table :press_entries do |t|
      t.string :name
      t.string :image
      t.string :link

      t.timestamps null: false
    end
  end
end
