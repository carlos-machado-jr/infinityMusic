import { Artist } from "./artist";
import { Track } from "./track";

export class Album{
    id: any;
    title: string;
    cover: string;
    cover_small: string;
    cover_medium: string;
    cover_xl: string;
    artist: Artist;
    track: Track    
}