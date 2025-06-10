import { Controller, Get, Param, Post, Body, Delete, Put } from '@nestjs/common';
import { TrackService } from './track.service';
import { Track } from './track.interface';

@Controller('track')
export class TrackController {
  constructor(private readonly trackService: TrackService) {}

  @Get()
  getTracks(): Promise<Track[]> {
    return this.trackService.getTracks();
  }

  @Get(':id')
  getTrackById(@Param('id') id: number): Promise<Track> {
    return this.trackService.getTrackById(id);
  }

  @Post()
  createTrack(@Body() body:Track): Promise<Track> {
    return this.trackService.createTrack(body);
    }
   
  @Delete(':id')  
  deleteTrack(@Param('id') id: number): Promise<Track> {
    return this.trackService.deleteTrackById(id);
  }
  
  @Put(':id')  
  updateTrack(@Param('id') id: number, @Body() body:Track): Promise<Track | void> {
    return this.trackService.updateTrackById(id, body);
  }
}

