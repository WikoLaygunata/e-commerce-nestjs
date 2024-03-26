import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Order } from "./Order";

@Entity("payments", { schema: "ecommerce_nest" })
export class Payment {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "name", unique: true, length: 255 })
  name: string;

  @Column("enum", { name: "type", enum: ["cash", "credit"] })
  type: "cash" | "credit";

  @Column("timestamp", { name: "created_at", nullable: true , default: () => "CURRENT_TIMESTAMP"})
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @OneToMany(() => Order, order => order.payment)
  orders: Order[];
}
