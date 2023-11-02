import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "users" })
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  username: string;

  @Column("date")
  birth: Date;

  @Column()
  email: string;

  @Column()
  gender: string;

  @Column()
  age: string;

  @Column()
  address: string;

  @Column()
  attachment: string;

  @Column()
  profile_picture: string;

  @Column()
  whatsapp: number;

  @Column({ select: false })
  password: string;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createAt: Date;
}
