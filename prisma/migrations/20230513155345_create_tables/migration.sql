-- CreateTable
CREATE TABLE "Employee" (
    "register_key" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "role_id" TEXT NOT NULL,
    CONSTRAINT "Employee_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "Role" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Role" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Order" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "date" DATETIME NOT NULL,
    "shift" TEXT NOT NULL,
    "class" TEXT NOT NULL,
    "devolution" DATETIME,
    "delivery_by" TEXT NOT NULL,
    "returned_by" TEXT NOT NULL,
    CONSTRAINT "Order_delivery_by_fkey" FOREIGN KEY ("delivery_by") REFERENCES "Employee" ("register_key") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Order_delivery_by_fkey" FOREIGN KEY ("delivery_by") REFERENCES "Employee" ("register_key") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Product" (
    "patrimony_key" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "descriptions" TEXT,
    "category_id" TEXT NOT NULL,
    CONSTRAINT "Product_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Category" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "OrderDetail" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "order_id" TEXT NOT NULL,
    "product_key" TEXT NOT NULL,
    CONSTRAINT "OrderDetail_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "Order" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "OrderDetail_product_key_fkey" FOREIGN KEY ("product_key") REFERENCES "Product" ("patrimony_key") ON DELETE RESTRICT ON UPDATE CASCADE
);
