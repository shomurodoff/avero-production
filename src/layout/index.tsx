import { get, isEqual } from "lodash";
import { useRouter } from "next/router";
import React, { ReactNode, ReactElement, Fragment } from "react";
import { Header } from "./components";
import { getLayoutName } from "./utils";

interface Props {
  children?: ReactNode | ReactElement;
}

const Index: React.FC<Props> = ({ children }) => {
  const { asPath } = useRouter();

  if (isEqual(getLayoutName(asPath), "main")) {
    return (
      <Fragment>
        <Header main />
        {children}
      </Fragment>
    );
  } else if (isEqual(getLayoutName(asPath), "services")) {
    return (
      <Fragment>
        <Header />
        {children}services
      </Fragment>
    );
  } else {
    return (
      <div>
        <Fragment>
          <Header main />
          {children}
        </Fragment>
      </div>
    );
  }
};

export default Index;
