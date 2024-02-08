import {
  IsArray,
  IsBoolean,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  @MinLength(1)
  name: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  price?: number;

  @IsString()
  @IsOptional()
  main_image?: string;

  @IsString({ each: true })
  @IsOptional()
  @IsArray()
  ar_3d?: string[];

  @IsBoolean()
  @IsOptional()
  activate?: boolean;

  @IsString()
  @IsOptional()
  categoryId?: string;
}
