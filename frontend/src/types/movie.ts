export type Movie = {
    id: number;
    title: string;
    score: number;
    count: number;
    image: string;
    titleBrazil: string;
    titleSpanish: string;
}

export type MoviePage = {
    content: Movie[];
    last: boolean;
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
    first: boolean;
    numberOfElements: number;
    empty: boolean;
}

export type MoviePageL = {
    content: MovieLanguage[];
    last: boolean;
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
    first: boolean;
    numberOfElements: number;
    empty: boolean;
}

export type MovieLanguage = {
    id: number;
    titleBrazil: string;
    titleSpanish: string;
    movieId: number;
}