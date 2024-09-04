import baseGeneration from "./baseGeneration";
import type { Match, ReturnType } from "./types";

export default function singleElim (teamCount: number): ReturnType {
    let { teams, rounds } = baseGeneration(teamCount);

    let ID = 2;
    
    // Work backwards to assign matchups for each round
    for (let round = rounds[0].round - 1; round > 0; round--) {
        const matches = [];
        const prevRoundMatches = rounds[0].matches;
        const roundTeamCount = 2 ** (rounds[rounds.length - 1].round - round + 1);
        for (const match of prevRoundMatches) {
            const { team1, team2 } = match;
            if (team1)
                matches.push({ ID: ID++, stageID: round, order: matches.length + 1, team1, team2: roundTeamCount + 1 - team1 });
            if (team2)
                matches.push({ ID: ID++, stageID: round, order: matches.length + 1, team1: team2, team2: roundTeamCount + 1 - team2 });
        }
        rounds.unshift({ round, matches });
    }

    // Add byes
    if (Math.ceil(Math.log2(teamCount)) !== Math.log2(teamCount)) {
    }


    return { teams, rounds };
}