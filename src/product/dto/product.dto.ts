import { IsNumber, IsString, Length } from "class-validator"

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

}