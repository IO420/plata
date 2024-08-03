import { IsNumber } from "class-validator";

export class KindProductDto {
    @IsNumber()
    id_kind: number;

    @IsNumber()
    id_product: number;
}