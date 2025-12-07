import {
  integer,
  numeric,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";
export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  age: integer().notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
});

export const productsTable = pgTable("products", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  title: varchar("product_title").notNull(),
  newPrice: numeric("product_newPrice", { precision: 10, scale: 2 }).notNull(),
  oldPrice: numeric("product_oldPrice", { precision: 10, scale: 2 }),
  quantity: integer("product_quantity").default(1).notNull(),
  lowStock: integer().default(5).notNull(),
  description: text("product_description").notNull(),
  image: text("product_image").notNull(),
  weigth: text("product_weight").array(),
  ingredient: text("product_ingredient").array(),
  skinType: text("product_skin_type").array(),
});
export const cartTable = pgTable("cart", {
  id: serial("id").primaryKey(),
  userEmail: text("user_email"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const cartItemsTable = pgTable("cart_items", {
  id: serial("id").primaryKey(),
  cartId: integer("cart_id")
    .references(() => cartTable.id)
    .notNull(),
  productId: integer("product_id")
    .references(() => productsTable.id)
    .notNull(),
  title: text("name").notNull(),
  price: numeric("price").notNull(),
  image: text("image").notNull(),
  quantity: integer("quantity").default(1).notNull(),
  weigth: text("weigth").notNull(),
  ingredient: text("ingredient").notNull(),
  skinType: text("skinType").notNull(),
});
