// src/survey/survey.controller.ts
import { Body, Controller, Get, Post } from '@nestjs/common'
import { CreateSurveyDto } from './dto/create-survey.dto'
import { SurveyService } from './survey.service'

@Controller('survey')
export class SurveyController {
  constructor(private readonly surveyService: SurveyService) {}

  @Post('submit')
  create(@Body() dto: CreateSurveyDto) {
    return this.surveyService.create(dto)
  }
  @Get()
  findAll() {
    return this.surveyService.findAll()
  }
}
