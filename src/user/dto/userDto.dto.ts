import { IsInt, IsString, Length } from 'class-validator';

export class UserDto {

  @IsString()
  @Length(1, 50)
  name: string;

  @IsString()
  @Length(1, 50)
  username: string;

  @IsString()
  @Length(1, 50)
  password: string;
}