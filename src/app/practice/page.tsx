"use client";
import { useState } from "react";

export default function Practice() {
  const [topic, setTopic] = useState("");
  async function handleFormSubmit(e: React.SubmitEvent) {
    e.preventDefault();
    console.log(`form submitted with topic = ${topic}`);
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
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          />
        </form>
        
      </div>
    </>
  );
}

// search bar to send
