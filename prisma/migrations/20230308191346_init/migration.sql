-- CreateTable
CREATE TABLE "books" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "crp" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "books_email_key" ON "books"("email");
