class CreateBase < ActiveRecord::Migration
  def up
    create_table :maps do |t|
      t.string :name
      t.timestamps
    end

    create_table :nodes do |t|
      t.integer :map_id
      t.integer :node_id
      t.string :text
      t.timestamps
    end

    create_table :clients do |t|
      t.integer :map_id
      t.string :session_id
      t.timestamps
    end
  end

  def down
    drop_table :maps
    drop_table :nodes
    drop_table :clients
  end
end
