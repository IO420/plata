import { Module } from "@nestjs/common";
import { WebsocketGateway } from "./webSocket.gateway";

@Module({
    imports:[],
    controllers:[],
    providers:[WebsocketGateway],
})

export class socketModule{}