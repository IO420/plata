import { IsNumber, IsString } from "class-validator"

export class KindDto{

    @IsNumber()
    id_kind:number

    @IsString()
    name:string

}