// src/survey/survey.entity.ts
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

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
}
