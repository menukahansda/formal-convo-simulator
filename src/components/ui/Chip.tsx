import type {ChipColor, ChipProps} from "@/types/ui"

const colorStyles: Record<ChipColor, string>= {
  slate: "border-slate-500/50 bg-slate-300/10 text-slate-400",
  emerald: "border-emerald-500/50 bg-emerald-300/10 text-emerald-400",
  yellow: "border-yellow-500/50 bg-yellow-300/10 text-yellow-400",
  red: "border-red-500/50 bg-red-300/10 text-red-400",
  blue: "border-blue-500/50 bg-blue-300/10 text-blue-400",
};

export default function Chip({label, color} : ChipProps){

    return (
        
        <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${colorStyles[color]}`}>
            {label}
        </span>
        
    )
}