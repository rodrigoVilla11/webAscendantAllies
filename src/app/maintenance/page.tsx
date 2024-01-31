import Spinner from "@/components/Spinner/Spinner";
import StarRain from "@/components/StarRain/StarRain";
import SocialMedia from "@/components/SocialMedia/SocialMedia";

export default function Maintenance() {
  return (
    <main className="flex h-screen items-center justify-center p-24">
      <StarRain />
      <Spinner/> {/*CAMBIAR EL CONTENT DEL SPINNER*/ }
      <SocialMedia />
    </main>
  );
}
