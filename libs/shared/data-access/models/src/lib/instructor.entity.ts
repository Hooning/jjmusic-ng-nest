import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Instructor {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  specialty: string;

  @Column()
  description: string;

  @Column()
  fullName: string;

  @Column()
  imageName: string;

  @Column({ type: 'bytea', nullable: true })
  imageFile: Buffer;
}
