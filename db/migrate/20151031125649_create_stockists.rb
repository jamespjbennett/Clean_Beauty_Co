class CreateStockists < ActiveRecord::Migration
  def change
    create_table :stockists do |t|

      t.timestamps null: false
    end
  end
end
