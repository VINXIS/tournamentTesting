export interface Match {
    ID: number;
    stageID: number;
    winnerNextID?: number;
    loserNextID?: number;
    order?: number;
    team1?: number;
    team2?: number;
}

export interface ReturnType {
    teams: number[];
    rounds: {
        round: number;
        matches: Match[];
    }[];
}