class CreateEmailContacts < ActiveRecord::Migration
  def change
    create_table :email_contacts do |t|
      t.string :name
      t.string :email

      t.timestamps null: false
    end
  end
end
