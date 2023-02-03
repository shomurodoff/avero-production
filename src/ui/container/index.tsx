import clsx from "clsx";
import React from "react";

interface Props {
  children: JSX.Element | React.ReactNode;
  className?: string;
}

const Index: React.FC<Props> = ({ children, className }) => {
  return (
    <div
      className={clsx(
        className,
        "container px-[15px] md:px-8 lg:px-10 xl:px-12 2xl:px-15"
      )}
    >
      {children}
    </div>
  );
};

export default Index;
