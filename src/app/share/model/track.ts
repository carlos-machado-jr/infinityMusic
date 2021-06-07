import { Album } from "./album";
import { Artist } from "./artist";

export class Track{
    duration: any;
    explicit_content_cover: any;
    explicit_content_lyrics: any;
    explicit_lyrics: any;
    id: any;
    link: any;
    md5_image: any;
    preview: string;
    rank: any;
    readable: any;
    title: string;
    title_short: string;
    title_version: string;
    type: string;
    artist: Artist;
    album: Album;
}