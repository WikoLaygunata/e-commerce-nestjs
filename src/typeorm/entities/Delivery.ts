import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Order } from "./Order";

@Entity("deliveries", { schema: "ecommerce_nest" })
export class Delivery {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "delivery_code", length: 255 })
  delivery_code: string;

  @Column("text", { name: "description" })
  description: string;

  @Column("text", { name: "address" })
  address: string;

  @Column("enum", { name: "status", enum: ["pending", "ongoing", "complete"] })
  status: 'pending' | 'ongoing' | 'complete';

  @Column("timestamp", { name: "created_at", nullable: true , default: () => "CURRENT_TIMESTAMP"})
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @OneToOne(() => Order, order => order.delivery)
  order: Order;
}
