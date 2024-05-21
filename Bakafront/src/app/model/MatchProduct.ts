export interface MatchProduct {
    Id: string,
    SportKey: string,
    CommenceTime: string,
    HomeTeam: string,
    AwayTeam: string,
    Outcomes: Outcome[];
}

export interface Outcome {
    Name: string;
    Price: number;
}