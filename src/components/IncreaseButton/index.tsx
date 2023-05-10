import { Minus, Plus } from "@phosphor-icons/react";

import colors from "@/global/colors";

interface IncreaseButtonProps {
  add: () => void;
  remove: () => void;
  count: number;
  isDisabledAdd?: boolean;
  isDisabledRemove?: boolean;
}

export function IncreaseButton({
  add,
  remove,
  count,
  isDisabledAdd = false,
  isDisabledRemove = false,
}: IncreaseButtonProps) {
  return (
    <div className="p-1 flex items-center gap-2 rounded-md bg-base-button">
      <button type="button" onClick={remove} disabled={isDisabledRemove}>
        <Minus
          size={12}
          color={isDisabledRemove ? colors["base-text"] : colors["purple-dark"]}
        />
      </button>
      <span className="text-base text-base-title">{count}</span>
      <button type="button" onClick={add} disabled={isDisabledAdd}>
        <Plus
          size={12}
          color={isDisabledAdd ? colors["base-text"] : colors["purple-dark"]}
        />
      </button>
    </div>
  );
}
