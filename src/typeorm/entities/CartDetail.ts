import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./Product";
import { Cart } from "./Cart";

@Entity("cart_details", { schema: "ecommerce_nest" })
export class CartDetail {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column({ name: "product_id", type:"int", unsigned: true })
  product_id: number;

  @Column({ name: "cart_id", type:"integer", unsigned: true})
  cart_id: number;
  
  @Column("int", { name: "qty" })
  qty: number;

  @Column({ name: "price"})
  price: number;

  @Column("double", { name: "subtotal"})
  subtotal: number;

  @Column("timestamp", { name: "created_at", nullable: true, default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @ManyToOne(() => Cart, cart => cart.cartdetails)
  @JoinColumn({name: "cart_id"})
  cart: Cart;

  @ManyToOne(() => Product, product => product.cartdetails)
  @JoinColumn({name: "product_id"})
  product: Product;

}
