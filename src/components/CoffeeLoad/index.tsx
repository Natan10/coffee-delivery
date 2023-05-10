import Lottie from "lottie-react";
import coffeeLoad from "@/assets/coffee-load.json";

export function CoffeeLoad() {
  return (
    <div className="fixed z-10 inset-0 flex justify-center items-center bg-base-hover/20">
      <Lottie
        animationData={coffeeLoad}
        style={{
          width: "250px",
          height: "250px",
        }}
      />
    </div>
  );
}
