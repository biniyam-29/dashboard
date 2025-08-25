import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { DashboardModule } from './dashboard/dashboard.module';

@Module({
  imports: [PrismaModule, DashboardModule]
})
export class AppModule {}
