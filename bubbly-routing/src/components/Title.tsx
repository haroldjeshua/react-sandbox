import React, { FC, PropsWithChildren } from "react";

const Title: FC<PropsWithChildren> = ({ children }) => {
  return (
    <h2 className="animate-in" style={{ animationDelay: "600ms" }}>
      {children}
    </h2>
  );
};

export default Title;
