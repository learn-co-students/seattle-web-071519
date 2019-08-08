Book.destroy_all

GoogleBooks::Adapter.new("Jim Butcher").fetch_books
GoogleBooks::Adapter.new("Douglas Adams").fetch_books
GoogleBooks::Adapter.new("Jane Austen").fetch_books
