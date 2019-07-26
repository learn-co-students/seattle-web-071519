class CreateAwards < ActiveRecord::Migration[5.2]
  def change
    create_table :awards do |t|
      t.integer :cohort_id
      t.integer :comp_id
      t.string :medal

      t.timestamps
    end
  end
end
