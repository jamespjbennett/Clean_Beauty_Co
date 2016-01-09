class AddBookingLinkToEvents < ActiveRecord::Migration
  def change
    add_column :events, :booking_link, :string
  end
end
