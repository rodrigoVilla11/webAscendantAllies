import Spinner from "@/components/Spinner/Spinner";
import StarRain from "@/components/StarRain/StarRain";
import Image from "next/image";

export default function Maintenance() {
  return (
    <div className="bg-white h-screen w-full flex items-start md:items-center justify-center">
        <StarRain />
      <Spinner>
        <div className="flex flex-col items-center pt-28 md:pt-0">
          <Image src="/assets/Logo_AscendantAllies (1).png" alt="logo_AscendantAllies" width="500" height="300" />
          <h1 className="text-violetDawn text-3xl font-primary font-normal mt-10 md:mt-0">ASCENDANT <span className="text-black font-extrabold">ALLIES</span></h1>
          <p className="text-violetDawn font-secondary font-normal">La página web está bajo <span className="text-black font-extrabold">MANTENIMIENTO</span></p>
          <p className="text-violetDawn font-secondary font-normal">En unos pocos días <span className="text-black font-extrabold">ESTAREMOS DE VUELTA</span></p>
        </div>
      </Spinner>
    </div>
  );
}
