import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateInvestmentDto } from './dto/create-investment.dto';
import { Investment } from './investment.entity';
import { InvestmentsService } from './investments.service';

@ApiTags('investments')
@Controller('investments')
export class InvestmentsController {
  constructor(private readonly investmentsService: InvestmentsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new investment' })
  @ApiResponse({ status: 201, description: 'Investment created successfully' })
  create(@Body() createInvestmentDto: CreateInvestmentDto): Promise<Investment> {
    return this.investmentsService.create(createInvestmentDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all investments' })
  @ApiResponse({ status: 200, description: 'List of all investments' })
  findAll(): Promise<Investment[]> {
    return this.investmentsService.findAll();
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete an investment' })
  @ApiResponse({ status: 200, description: 'Investment deleted successfully' })
  remove(@Param('id') id: string): Promise<void> {
    return this.investmentsService.remove(id);
  }
}
