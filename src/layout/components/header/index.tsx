import { MainPageLogo, ServicesPageLogo } from "@/layout/images";
import { Container } from "@/ui";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  main?: boolean;
}

const Index: React.FC<Props> = ({ main }) => {
  return (
    <div className={clsx(main ? "bg-primary-blue" : "bg-secondary-gray")}>
      <Container>
        <div className="w-full relative py-[35px]">
          <nav className="flex justify-center">
            <Link href={"/"}>
              <Image
                src={main ? MainPageLogo : ServicesPageLogo}
                alt="Logo Image"
              />{" "}
            </Link>
          </nav>
          <div className="h-full items-center flex absolute right-0 bottom-0">
            <button className=" bg-white bg-opacity-25 px-5 py-[11px]">
              450 000 UZS
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Index;
