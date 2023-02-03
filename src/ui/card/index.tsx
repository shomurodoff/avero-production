import clsx from "clsx";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode | JSX.Element;
  className?: string;
}

const Index: React.FC<Props> = ({ children, className }) => {
  return (
    <div className={clsx(className, "bg-primary-pink  rounded-large p-5")}>
      {children}
    </div>
  );
};

export default Index;
