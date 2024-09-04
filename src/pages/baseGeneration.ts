import type { Match, ReturnType } from "./types";

export default function baseGeneration (teamCount: number): ReturnType {
    if (teamCount < 2)
        throw new Error('Team count must be at least 2');
    const teams = Array.from({ length: teamCount }, (_, i) => i + 1);
    const rounds: {
        round: number;
        matches: Match[];
    }[] = [{
        round: Math.ceil(Math.log2(teamCount)),
        matches: [
            { ID: 1, stageID: Math.ceil(Math.log2(teamCount)), order: 1, team1: 1, team2: 2 }
        ]
    }];
    return { teams, rounds };
}