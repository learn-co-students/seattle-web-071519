Book.destroy_all

Adapter::GoogleBooks.new("Jim Butcher").fetch_books
Adapter::GoogleBooks.new("Douglas Adams").fetch_books
Adapter::GoogleBooks.new("Jane Austen").fetch_books
