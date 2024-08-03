import { IsInt, IsPositive } from 'class-validator';

export class CreateStorageDetailsDto {
  @IsInt()
  @IsPositive()
  id_product: number;

  @IsInt()
  @IsPositive()
  quantity: number;
}
