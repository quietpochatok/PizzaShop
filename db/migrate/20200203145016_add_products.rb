class AddProducts < ActiveRecord::Migration[6.0]
  def change
  	Product.create :title => 'Hawaiian', :description => 'This is Hawaiian pizza!', :price => 575,:size => 25, :is_spicy => false, :is_veg => false, :is_best_offer => true, :path_to_image => '/images/hawaiian.jpg'

  	Product.create :title => 'Vegan pizza', :description => 'This is snack pizza', :price => 200,:size => 30, :is_spicy => false, :is_veg => true, :is_best_offer => false, :path_to_image => '/images/veg.jpg'

	Product.create :title => 'Peppeeroni', :description => 'This is Peppeeroni pizza, this very tasty!', :price => 625,:size => 35, :is_spicy => true, :is_veg => false, :is_best_offer => true, :path_to_image => '/images/pepperoni.jpg'
	end
end
