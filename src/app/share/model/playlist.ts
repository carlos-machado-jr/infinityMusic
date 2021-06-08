import { User } from "./user";

export class Playlist{
    id: any;
    title: string;
    public: boolean;
    nb_tracks: any;
    picture: string;
    picture_small: string;
    picture_medium: string;
    picture_big: string;
    picture_xl: string;
    creation_date: string;
    user: User
}