/*
  Warnings:

  - Added the required column `password` to the `books` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_books" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "crp" TEXT NOT NULL,
    "password" TEXT NOT NULL
);
INSERT INTO "new_books" ("crp", "email", "id", "name", "phone") SELECT "crp", "email", "id", "name", "phone" FROM "books";
DROP TABLE "books";
ALTER TABLE "new_books" RENAME TO "books";
CREATE UNIQUE INDEX "books_email_key" ON "books"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
