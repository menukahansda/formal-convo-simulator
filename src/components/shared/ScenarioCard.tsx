// after search , this card is to be used for different scenario based on topics
import Chip from "../ui/Chip";
import { ArrowRight } from "lucide-react";

type ScenarioProps = {
  topic: string;
  scenario: string;
};
export default function ScenarioCard({ topic, scenario }: ScenarioProps) {
  return (
    <>
      <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5 shadow-lg transition-all hover:border-stone-600/40 hover:bg-neutral-800">
        <div className="mb-2 flex items-start justify-between gap-3">
          <h3 className="mb-2 text-xl font-semibold text-neutral-100">
            {topic}
          </h3>
          <ArrowRight
            size={25}
            className="text-neutral-500 transition-all hover:translate-x-1 hover:text-stone-300"
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
