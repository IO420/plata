import { IsNumber, IsOptional, IsString } from "class-validator"

export class KindDto{

    @IsNumber()
    @IsOptional()
    id_kind:number

    @IsString()
    @IsOptional()
    name:string

    @IsString()
    @IsOptional()
    url:string

}