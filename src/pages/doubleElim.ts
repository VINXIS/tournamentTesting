import baseGeneration from "./baseGeneration";
import type { Match, ReturnType } from "./types";

export default function doubleElim (teamCount: number): ReturnType {
    let { teams, rounds } = baseGeneration(teamCount);

    let ID = 2;

    return { teams, rounds };
} 