import { Injectable } from '@nestjs/common';

export interface iTrack {
  id:number,
  title:string,
  duration:number,
  artist:string,
}


@Injectable()
export class AppService {
  getTracks(): string {
    return "hola";
  }
}
