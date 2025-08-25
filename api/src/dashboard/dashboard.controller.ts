import { Controller, Get, Post } from '@nestjs/common';
import { DashboardService } from './dashboard.service';

@Controller('dashboard')
export class DashboardController {
  constructor(
      private readonly dashboardService: DashboardService
  ) { }
  @Get()
  async findAll() {
    return await this.dashboardService.findAll();
  }
}
