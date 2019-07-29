class AddColumnToComps < ActiveRecord::Migration[5.2]
  def change
    add_column :comps, :was_good?, :boolean
  end
end
