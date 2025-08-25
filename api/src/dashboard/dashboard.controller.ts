import { Body, Controller, Get, Param, ParseIntPipe, Patch} from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { UpdateDashboardDto } from './dto/update-dashboard.dto';

@Controller()
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}
  @Get()
  async findAll() {
    return await this.dashboardService.findAll();
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateDashboardDto,
  ) {
    return this.dashboardService.update(id, data);
  }
}
