
// import { Link } from "@chakra-ui/react";
// export default function Home() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//       <Link href='/about' color='blue.400' _hover={{ color: 'blue.500' }}>
//       About
//     </Link>
//     </main>
//   );
// }
import Spinner from "@/components/Spinner/Spinner";
import StarRain from "@/components/StarRain/StarRain";
import SocialMedia from "@/components/SocialMedia/SocialMedia";

export default function Home() {
  return (
    <main className="flex h-screen items-center justify-center p-24">
      <StarRain />
      <Spinner/> {/*CAMBIAR EL CONTENT DEL SPINNER*/ }
      <SocialMedia />
    </main>
  );
}

