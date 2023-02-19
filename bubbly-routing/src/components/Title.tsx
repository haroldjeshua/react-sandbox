import { FC, PropsWithChildren } from "react";

const Title: FC<PropsWithChildren> = () => {
  return (
    <h2 className="animate-in" style={{ animationDelay: "600ms" }}>
      Harv
    </h2>
  );
};

export default Title;
