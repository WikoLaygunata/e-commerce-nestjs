import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Cart } from "./Cart";
import { Order } from "./Order";

@Index("user_username_unique", ["username"], { unique: true })
@Entity("users", { schema: "ecommerce_nest" })
export class User {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "username", unique: true, length: 255 })
  username: string;

  @Column("varchar", { name: "name", length: 255 })
  name: string;

  @Column("varchar", { name: "password", length: 255 })
  password: string;

  @Column("varchar", { name: "email", length: 255 })
  email: string;

  @Column("varchar", { name: "phone", length: 255 })
  phone: string;

  @Column("text", { name: "address", nullable: true })
  address: string | null;

  @Column("varchar", { name: "role", length: 255 })
  role: string;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @Column("timestamp", { name: "created_at", nullable: true, default: () => "CURRENT_TIMESTAMP"})
  createdAt: Date | null;

  @OneToMany( () => Cart, cart => cart.user, {cascade: true})
  carts: Cart[];

  @OneToMany( type => Order, order => order.user)
  orders: Order[];

}
