import {
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  ConnectedSocket,
} from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';

@WebSocketGateway({cors:{origin:'*'}})
export class WebsocketGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  server: Server;

  handleConnection(client: Socket) {
    console.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    console.log(`Client disconnected: ${client.id}`);
  }

  @SubscribeMessage('message')
  handleMessage(@MessageBody() data: any) {
    console.log('Received message:', data);
    this.server.emit('voto', data);
  }

  @SubscribeMessage('setVote')
  handleMessagev1(@MessageBody() data: any) {
    console.log('Received vote:', data);
    this.server.emit('votos1', data);
  }

  @SubscribeMessage('setVote2')
  handleMessagev2(@MessageBody() data: any) {
    console.log('Received vote 2:', data);
    this.server.emit('votos2', data);
  }

  @SubscribeMessage('broadcast')
  handleBroadcast(@ConnectedSocket() client: Socket, @MessageBody() data: any) {
    console.log('Broadcast message:', data);
    client.broadcast.emit('voto', data);
  }
}
