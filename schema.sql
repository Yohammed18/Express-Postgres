-- Drop existing tables if they exist
DROP TABLE IF EXISTS "book";
DROP TABLE IF EXISTS "author";

-- Create sequences for auto-increment
CREATE SEQUENCE IF NOT EXISTS author_id_seq;

-- Create author table
CREATE TABLE "author" (
    "id" bigint DEFAULT nextval('author_id_seq') NOT NULL,
    "name" text,
    "age" integer,
    CONSTRAINT "author_pkey" PRIMARY KEY ("id")
);

-- Create book table
CREATE TABLE "book" (
    "isbn" text NOT NULL,
    "title" text,
    "author_id" bigint,
    CONSTRAINT "book_pkey" PRIMARY KEY ("isbn"),
    CONSTRAINT "fk_author" FOREIGN KEY ("author_id")
        REFERENCES "author"("id")
);

-- Insert data into author table
INSERT INTO "author" ("id", "name", "age") VALUES
(1, 'George Orwell', 46),
(2, 'Jane Austen', 41),
(3, 'Mark Twain', 74),
(4, 'J.K. Rowling', 58),
(5, 'J.R.R. Tolkien', 81),
(6, 'Agatha Christie', 85),
(7, 'Ernest Hemingway', 61),
(8, 'F. Scott Fitzgerald', 44),
(9, 'Leo Tolstoy', 82),
(10, 'Charles Dickens', 58);

-- Insert data into book table
INSERT INTO "book" ("isbn", "title", "author_id") VALUES
('978-0451524935', '1984', 1),
('978-0141439518', 'Pride and Prejudice', 2),
('978-0486280615', 'The Adventures of Tom Sawyer', 3),
('978-0439139601', 'Harry Potter and the Goblet of Fire', 4),
('978-0261102385', 'The Fellowship of the Ring', 5),
('978-0062073488', 'And Then There Were None', 6),
('978-0684801223', 'The Old Man and the Sea', 7),
('978-0743273565', 'The Great Gatsby', 8),
('978-0140449174', 'War and Peace', 9),
('978-0486282086', 'A Tale of Two Cities', 10);
