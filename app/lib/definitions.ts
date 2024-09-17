
export type Track = {
    name: string,
    album: string,
    artists: string[],
    uri: string, 
    context?: Context, 
    link: string, 
    progress?: number, 
    image_url: string, 
    height: number,
    width: number,
}

export type Playlist = {
    name: string, 
    uri: string,
    image_url: string, 
    height: number,
    width: number,
    tracks ?: Track[],
    num_tracks : number
}

export type Artist = {}

export type Album = {
    name: string, 
    artists: string[],
    uri: string, 
    image_url: string, 
    image_h: number, 
    image_w: number, 
}

export type Context = {
    type : string,
    uri: string,
}