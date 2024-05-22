export interface MatchProduct {
    id: string,
    sportKey: string,
    commenceTime: string,
    homeTeam: string,
    awayTeam: string,
    outcomes: Outcome[];
}

export interface Outcome {
    name: string;
    price: number;
}