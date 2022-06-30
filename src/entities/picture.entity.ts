import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from "typeorm";

@Entity()
export class Picture {
  @PrimaryGeneratedColumn("uuid")
  id?: string;

  @Column({ nullable: false, unique: true })
  titulo: string;

  @Column({ nullable: false })
  imagem: string;

  @Column({ nullable: false })
  descricao: string;

  @CreateDateColumn()
  createdAt?: Date;
}
