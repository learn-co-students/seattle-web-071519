Book.destroy_all

GoogleBooks::Adapter.new("Stephen King").fetch_books
GoogleBooks::Adapter.new("Dr. Seuss").fetch_books
GoogleBooks::Adapter.new("J.R.R. Tolkien").fetch_books
