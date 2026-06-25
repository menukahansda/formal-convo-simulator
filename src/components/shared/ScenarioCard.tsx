// after search , this card is to be used for different scenario based on topics
"use client"
import Chip from "../ui/Chip";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

type ScenarioProps = {
  topic: string;
  scenario: string;
};
export default function ScenarioCard({ topic, scenario }: ScenarioProps) {

    const router = useRouter();
    function handleClick(){
        console.log("Open Scenario : ", topic);
        const id = topic.toLowerCase().trim().replace(/\s+/g, "-");
        router.push(`/practice/scenario/${id}`);
    }
  return (
    <>
      <div 
      onClick={handleClick}
      className="group cursor-pointer rounded-2xl border border-neutral-800 bg-neutral-900 p-5 shadow-lg transition-all hover:border-stone-600/40 hover:bg-neutral-800">
        <div className="mb-2 flex items-start justify-between gap-3">
          <h3 className="text-xl font-semibold text-neutral-100">
            {topic}
          </h3>
          <ArrowRight
            size={25}
            className="text-neutral-500 transition-all duration-200 group-hover:translate-x-1 group-hover:text-stone-300"
          />
        </div>
        <div className="mb-3 flex flex-wrap gap-2">
          <Chip label="Easy" color="emerald" />
          <Chip label="Manager" color="blue" />
          <Chip label="Formal" color="slate" />
        </div>

        <p className="text-sm leading-relaxed text-neutral-400">{scenario}</p>
      </div>
    </>
  );
}
