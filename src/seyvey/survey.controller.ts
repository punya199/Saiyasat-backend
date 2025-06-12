import { Controller, Post, Body } from '@nestjs/common';
import { CreateSurveyDto } from './dto/create-survey.dto';

@Controller()
export class SurveyController {
  @Post('submit-survey')
  submitSurvey(@Body() createSurveyDto: CreateSurveyDto) {
    console.log('Received survey data:', createSurveyDto);

    // ที่นี้คุณจะบันทึกลง DB หรือประมวลผลอื่น ๆ

    return {
      message: 'Survey submitted successfully',
      data: createSurveyDto,
    };
  }
}
