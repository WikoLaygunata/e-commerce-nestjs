import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Categories } from "./Categories";
import { CartDetail } from "./CartDetail";
import { UnitCategory } from "./UnitCategory";
import { OrderDetail } from "./OrderDetail";

@Entity("products", { schema: "ecommerce_nest" })
export class Product {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "name", length: 255 })
  name: string;

  @Column("int", { name: "qty" })
  qty: number;

  @Column("double", { name: "price"})
  price: number;

  @Column({ name: "unit_id", type:"int", unsigned: true })
  unit_id: number;

  @Column("varchar", { name: "slug", length: 255 })
  slug: string;

  @Column("text", { name: "image" })
  image: string;
  
  @Column("text", { name: "description" })
  description: string;
  
  @Column("timestamp", { name: "created_at", nullable: true , default: () => "CURRENT_TIMESTAMP"})
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @ManyToMany(type => Categories, category => category.products, {cascade:true})
  @JoinTable()
  categories: Categories[]

  @OneToMany(() => CartDetail, cartdetail => cartdetail.product)
  cartdetails: CartDetail[];

  @ManyToOne(() => UnitCategory, unitcategory => unitcategory.products)
  @JoinColumn({name: "unit_id"})
  unitcategory: UnitCategory;

  @OneToMany(()=> OrderDetail, orderdetail => orderdetail.product)
  orderdetails: OrderDetail[]
}
