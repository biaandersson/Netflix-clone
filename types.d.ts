export interface Genre {
    id: number
    name: string
}

export interface Movie {
    original_language: string[];
    origin_country: string[];
    first_air_date: string;
    backdrop_path: string;
    release_date?: string;
    original_name: string;
    vote_average: number;
    media_type?: string;
    genre_ids: number[];
    poster_path: string;
    popularity: number;
    vote_count: number;
    overview: string;
    title: string;
    name: string;
    id: number;
}

export interface Element {
    type:
        | 'Behind the Scenes'
        | 'Featurette'
        | 'Bloopers'
        | 'Trailer'
        | 'Teaser'
        | 'Clip';
}
