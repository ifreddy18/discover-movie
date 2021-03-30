export interface NowPlayingResponse {
    dates: Dates;
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
}

export interface SearchMovieResponse {
    page: number;
    results: Movie[] | Television[];
    total_pages: number;
    total_results: number;
}

// Movie

export interface Movie {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: OriginalLanguage;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: Date;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export interface MovieDetail {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: null;
    budget: number;
    genres: Genre[];
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: ProductionCompany[];
    production_countries: ProductionCountry[];
    release_date: Date;
    revenue: number;
    runtime: number;
    spoken_languages: SpokenLanguage[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

// TV response

export interface Television {
    vote_average: number;
    overview: string;
    original_name: string;
    origin_country: string[];
    backdrop_path: string;
    vote_count: number;
    name: string;
    id: number;
    original_language: OriginalLanguage;
    first_air_date: Date;
    poster_path: string;
    genre_ids: number[];
    popularity: number;
    media_type: MediaType;
}

export interface TelevisionDetail {
    backdrop_path: string;
    created_by: any[];
    episode_run_time: number[];
    first_air_date: Date;
    genres: Genre[];
    homepage: string;
    id: number;
    in_production: boolean;
    languages: string[];
    last_air_date: Date;
    last_episode_to_air: TEpisodeToAir;
    name: string;
    next_episode_to_air: TEpisodeToAir;
    networks: Network[];
    number_of_episodes: number;
    number_of_seasons: number;
    origin_country: OriginCountry[];
    original_language: string;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: Network[];
    production_countries: ProductionCountry[];
    seasons: Season[];
    spoken_languages: SpokenLanguage[];
    status: string;
    tagline: string;
    type: string;
    vote_average: number;
    vote_count: number;
}

export interface TEpisodeToAir {
    air_date: Date;
    episode_number: number;
    id: number;
    name: string;
    overview: string;
    production_code: string;
    season_number: number;
    still_path: null | string;
    vote_average: number;
    vote_count: number;
}

export interface Season {
    air_date: Date | null;
    episode_count: number;
    id: number;
    name: string;
    overview: string;
    poster_path: string;
    season_number: number;
}

// General

export interface Genre {
    id: number;
    name: string;
}

export interface ProductionCompany {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
}

export interface ProductionCountry {
    iso_3166_1: string;
    name: string;
}

export interface SpokenLanguage {
    english_name: string;
    iso_639_1: string;
    name: string;
}

export enum MediaType {
    Movie = 'movie',
    Tv = 'tv',
}

export enum OriginalLanguage {
    En = 'en',
    Ja = 'ja',
    Zh = 'zh',
    Es = 'es',
}

export interface Dates {
    maximum: Date;
    minimum: Date;
}

export interface Network {
    name: string;
    id: number;
    logo_path: null | string;
    origin_country: OriginCountry;
}

export enum OriginCountry {
    Empty = '',
    Jp = 'JP',
    Us = 'US',
}





