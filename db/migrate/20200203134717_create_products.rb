class CreateProducts < ActiveRecord::Migration[6.0]
  def change
  	  	create_table :products do |t|
      #будут созданы следующие столбы с типом text
  		t.string :title
  		t.text :description
  		t.decimal :price
  		t.decimal :size
  		t.boolean :is_spicy
  		t.boolean :is_veg
  		t.boolean :is_best_offer
  		t.string :path_to_image
      # дата создания сущностей и обновления
		  t.timestamps  		
  	end
  end
end

