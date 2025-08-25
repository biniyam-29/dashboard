import { IsString, IsOptional } from 'class-validator';

export class UpdateDashboardDto {
  @IsString()
  @IsOptional()
  header?: string;

  @IsString()
  @IsOptional()
  type?: string;

  @IsString()
  @IsOptional()
  status?: string;

  @IsString()
  @IsOptional()
  target?: string;

  @IsString()
  @IsOptional()
  limit?: string;

  @IsString()
  @IsOptional()
  reviewer?: string;
}
