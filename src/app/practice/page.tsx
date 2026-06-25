"use client";
import { useState } from "react";
import ScenarioCard from "@/components/shared/ScenarioCard";
import type { LLMResponse } from "@/types/llm";

export default function Practice() {
  const [searchTopic, setSearchTopic] = useState("");
  const scenarios : LLMResponse[] = [
  {
    topic: "Team Conflict",
    scenario: "You are working under a strict team leader in a high-pressure project.",
    difficulty: "Easy",
    person: "Team Leader",
    tone: "Formal"
  },
  {
    topic: "Client Meeting",
    scenario: "You are handling a dissatisfied client who wants immediate resolution.",
    difficulty: "Hard",
    person: "Client",
    tone: "Professional"
  },
];
  async function handleFormSubmit(e: React.SubmitEvent) {
    e.preventDefault();
    console.log(`form submitted with topic = ${searchTopic}`);
    // send to llm and fetch data - data type -
  }
  return (
    <>
      <div className="relative">
        <form onSubmit={handleFormSubmit}>
          <input
            placeholder="Enter a scenario topic..."
            type="text"
            name="scenario-topic"
            id="scenario-topic"
            value={searchTopic}
            onChange={(e) => setSearchTopic(e.target.value)}
          />
        </form>
        <div className="mt-6 flex flex-col gap-4 items-center">
          {scenarios.map((sc, idx)=>(
            <ScenarioCard key={idx} topic={sc.topic} scenario={sc.scenario} difficulty={sc.difficulty} person={sc.person} tone={sc.tone}/>
          ))}
        </div>
      </div>
    </>
  );
}

// search bar to send
