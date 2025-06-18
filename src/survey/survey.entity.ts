// src/survey/survey.entity.ts
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity()
export class Survey {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  country: string

  @Column()
  age: string

  @Column()
  job: string

  @Column()
  belief: string

  @Column()
  action: string

  @Column({ type: 'boolean', default: true })
  isAgreed: boolean

  @CreateDateColumn({ type: 'timestamp with time zone' })
  createdAt: Date

  @UpdateDateColumn({ type: 'timestamp with time zone' })
  updatedAt: Date

  @DeleteDateColumn({ type: 'timestamp with time zone' })
  deletedAt: Date

  @Column({ type: 'varchar', nullable: true })
  uid: string
}
