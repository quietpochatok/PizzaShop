class CreateOrders < ActiveRecord::Migration[6.0]
  def change
  	create_table :orders do |t|
      #будут созданы следующие столбы с типом text
  		t.text :order_input
  		t.text :name
  		t.text :phone
  		t.text :address
  		
      # дата создания сущностей и обновления
		  t.timestamps 
		  end 		
  end
end
