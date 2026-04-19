import Image from "next/image";
import logo from "../images/logo.png"


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-svh select-none">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-row items-center justify-center">
          <Image alt="logo" 
                  src={logo}
                  width={120}
                  className="-mr-2"></Image>
          <h1 className="text-7xl">
            Tempo
          </h1>
        </div>
        <p className="font-normal text-xs -mt-2.5">Be consistent!</p>
      </div>
    </div>
  );
}
