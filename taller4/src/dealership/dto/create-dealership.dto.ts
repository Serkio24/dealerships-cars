import { IsBoolean, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateDealershipDto {
  @IsString()
  @MaxLength(50)
  name: string;

  @IsString()
  @MaxLength(50)
  city: string;

  @IsOptional()
  @IsBoolean()
  active?: boolean;
}
