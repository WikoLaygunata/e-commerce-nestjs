import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./Product";

@Entity("categories", { schema: "ecommerce_nest" })
export class Categories {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "name", length: 255 })
  name: string;

  @Column("varchar", { name: "slug", length: 255 })
  slug: string;

  @Column("timestamp", { name: "created_at", nullable: true, default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @ManyToMany(type => Product, product => product.categories)
  products: Product[]
}
