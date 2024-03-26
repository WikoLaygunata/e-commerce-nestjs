import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./Product";

@Entity("unit_categories", { schema: "ecommerce_nest" })
export class UnitCategory {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "name", length: 255 })
  name: string;

  @Column("timestamp", { name: "created_at", nullable: true , default: () => "CURRENT_TIMESTAMP"})
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @OneToMany(() => Product, product => product.unitcategory)
  products : Product[];
}
