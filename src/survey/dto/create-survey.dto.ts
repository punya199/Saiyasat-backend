import { IsBoolean, IsString } from 'class-validator'

export class CreateSurveyDto {
  @IsString()
  country: string

  @IsString()
  age: string

  @IsString()
  job: string

  @IsString()
  belief: string

  @IsString()
  action: string

  @IsBoolean()
  isAgreed: boolean

  @IsString()
  uid: string
}
