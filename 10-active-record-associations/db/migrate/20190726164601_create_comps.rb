class CreateComps < ActiveRecord::Migration[5.2]
  def change
    create_table :comps do |t|
      t.string :location
      t.datetime :date
      t.integer :teams

      t.timestamps
    end
  end
end
