import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateDashboardDto } from './dto/update-dashboard.dto';

@Injectable()
export class DashboardService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return await this.prisma.dashboard.findMany();
  }

  async update(id: number, updatedData: UpdateDashboardDto) {
    return await this.prisma.dashboard.update({
      where: {
        id,
      },
      data: updatedData,
    });
  }

  async remove(id: number) { 
    return await this.prisma.dashboard.delete({
      where:{id}
    })
  }
}
