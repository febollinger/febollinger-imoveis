import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import RealEstate from "./realState.entity";


@Entity('category')
class Category {

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({type: 'varchar', length:45, unique: true})
    name: string

    @OneToMany(() => RealEstate, (infos) => infos.category)
    category: RealEstate[]
}

export default Category