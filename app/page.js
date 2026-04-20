import Image from "next/image";
import logo from "../images/logo.png";
import Card from "@/components/Card";
import Paragraph from "@/components/Paragraph";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="flex flex-col items-center h-svh bg-transparent">
      <div className="flex flex-col items-center justify-center bg-transparent">
        <div className="flex flex-row items-center justify-center">
          <Image
            alt="logo"
            src={logo}
            width={160}
            loading="eager"
            className="-mr-2"
          ></Image>
          <Header className="text-8xl font-[WorkSansBold] text-dark">
            Tempo
          </Header>
        </div>
        <Card>
          <Paragraph>Be consistent!</Paragraph>
        </Card>
      </div>
    </div>
  );
}
