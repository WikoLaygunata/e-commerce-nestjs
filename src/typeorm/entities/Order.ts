import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { OrderDetail } from "./OrderDetail";
import { User } from "./User";
import { Payment } from "./Payment";
import { Delivery } from "./Delivery";

@Entity("orders", { schema: "ecommerce_nest" })
export class Order {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column({ name: "user_id", type: "int" , unsigned: true})
  user_id: number;

  @Column("text", { name: "code" })
  code: string;

  @Column("double", { name: "subtotal"})
  subtotal: number;

  @Column("double", { name: "discount"})
  discount: number;

  @Column("double", { name: "grandtotal" })
  grandtotal: number;

  @Column({ name: "payment_id", type: "int", unsigned: true })
  payment_id: number;

  @Column("double", { name: "tax"})
  tax: number;

  @Column({ name: "delivery_id", nullable: true , type:"int", unsigned: true})
  delivery_id: number | null;

  @Column("text", { name: "note", nullable: true })
  note: string | null;

  @Column("enum", { name: "status", enum: ["pending", "complete"] })
  status: "pending"| "complete";

  @Column("timestamp", { name: "created_at", nullable: true , default: () => "CURRENT_TIMESTAMP"})
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @OneToMany(() => OrderDetail, orderdetail => orderdetail.order, {cascade:true})
  orderdetails: OrderDetail[];

  @ManyToOne(() => User, user=> user.orders)
  @JoinColumn({name: "user_id"})
  user: User;
  
  @ManyToOne(() => Payment, payment => payment.orders)
  @JoinColumn({name: "payment_id"})
  payment: Payment;

  @OneToOne(() => Delivery, delivery => delivery.order)
  @JoinColumn({name: "delivery_id"})
  delivery : Delivery;

}
