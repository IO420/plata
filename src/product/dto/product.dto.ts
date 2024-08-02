import { IsNumber, IsString, Length, ValidateNested } from "class-validator"
import { Type } from "class-transformer";

export class ProductDto{

    @IsNumber()
    id_product:number

    @IsString()
    @Length(2,20)
    name:string

    @IsString()
    @Length(0,100)
    description:string

    @IsNumber()
    price:number

    @ValidateNested({ each: true })
    @Type(() => KindProduct)
    kindProduct: KindProduct[];

}

export class KindProduct{

    @IsNumber()
    id_kind:number

    @IsNumber()
    id_product:number
}