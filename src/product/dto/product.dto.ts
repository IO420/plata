import { IsNumber, IsString, Length, ValidateNested, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';
import { KindDto } from 'src/kind/dto/kind.dto';

export class ProductDto {
  @IsOptional()
  @IsNumber()
  id_product: number;

  @IsString()
  @Length(2, 20)
  name: string;

  @IsString()
  @Length(0, 100)
  description: string;

  @IsNumber()
  price: number;

  @ValidateNested({ each: true })
  @Type(() => KindDto)
  kinds: KindDto[];
}
