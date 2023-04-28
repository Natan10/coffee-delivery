import { Minus, Plus } from "@phosphor-icons/react";

import colors from "@/global/colors";

export function IncreaseButton() {
  return (
    <div className="p-1 flex items-center gap-2 rounded-md bg-base-button">
      <button>
        <Minus size={12} color={colors["purple-dark"]} />
      </button>
      <span className="text-base text-base-title">2</span>
      <button>
        <Plus size={12} color={colors["purple-dark"]} />
      </button>
    </div>
  );
}
