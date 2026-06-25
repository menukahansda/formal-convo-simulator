// LLM contract types (request/response schema)

export type Difficulty = "Easy" | "Medium" | "Hard";

export type Tone = "Formal" | "Casual" | "Strict" | "Friendly" | "Professional";

export type PersonRole = "Manager" | "HR" | "Friend" | "Client" | "Team Leader" | "Unknown";

export type LLMResponse = {
    topic : string;
    scenario : string;
    difficulty : Difficulty;
    person : PersonRole;
    tone : Tone;
    context? : string;
}