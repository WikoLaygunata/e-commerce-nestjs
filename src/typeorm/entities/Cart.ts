import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";
import { CartDetail } from "./CartDetail";

@Entity("carts", { schema: "ecommerce_nest" })
export class Cart {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;
  
  @Column("enum", { name: "status", enum: ["closed", "open"] })
  status: 'closed' | 'open';

  @Column("timestamp", { name: "created_at", nullable: true, default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @Column({type: "integer", unsigned: true})
  user_id: number;
  
  @ManyToOne(() => User, user => user.carts)
  @JoinColumn({name: "user_id"})
  user: User;

  @OneToMany(type => CartDetail, cartdetail => cartdetail.cart)
  cartdetails: CartDetail[];

}
