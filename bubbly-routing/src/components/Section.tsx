import { FC, PropsWithChildren } from "react";

const Section: FC<PropsWithChildren> = ({ children }) => {
  return (
    <section className="animate-in" style={{ animationDelay: "800ms" }}>
      {children}
    </section>
  );
};

export default Section;
