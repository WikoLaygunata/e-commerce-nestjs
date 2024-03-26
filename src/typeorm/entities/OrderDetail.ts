import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./Product";
import { Order } from "./Order";

@Entity("order_details", { schema: "ecommerce_nest" })
export class OrderDetail {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column({ name: "order_id", type: "int" , unsigned: true})
  order_id: number;

  @Column({ name: "product_id",type: "int" , unsigned: true})
  product_id: number;

  @Column("int", { name: "qty" })
  qty: number;

  @Column("double", { name: "price" })
  price: number;

  @Column("double", { name: "subtotal" })
  subtotal: number;

  @Column("timestamp", { name: "created_at", nullable: true, default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @ManyToOne(() => Product, product => product.orderdetails)
  @JoinColumn({name: "product_id"})
  product: Product;

  @ManyToOne(() => Order, order => order.orderdetails)
  @JoinColumn({name: "order_id"})
  order: Order;
}
