import { Controller, Get, Param } from '@nestjs/common';
import { TrackService } from './track.service';
import { Track } from './track.interface';

@Controller()
export class TrackController {
    constructor(private readonly trackService: TrackService) {}
        @Get('/tracks')
        getTracks(): Promise<Track[]> {
            return this.trackService.getTracks();
        }

        @Get('/tracks/:id')
        getTracksById(@Param('id') id:number): Promise<Track> {
            return this.trackService.getTrackById(id);
        }
    }


