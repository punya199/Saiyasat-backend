// src/survey/survey.service.ts
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateSurveyDto } from './dto/create-survey.dto'
import { Survey } from './survey.entity'

@Injectable()
export class SurveyService {
  constructor(
    @InjectRepository(Survey)
    private surveyRepo: Repository<Survey>
  ) {}

  create(data: CreateSurveyDto) {
    const survey = this.surveyRepo.create(data)
    return this.surveyRepo.save(survey)
  }
  findAll() {
    return this.surveyRepo.find()
  }
}
