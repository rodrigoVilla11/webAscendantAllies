import ContactStripe from "@/components/ContactStripe/ContactStripe";
import AboutUs from "@/components/HeadBanner/AboutUs/AboutUs";
import Header from "@/components/HeadBanner/Header/Header";
import HeadBanner from "@/components/HeadBanner/HeadBanner";
import ServicesBanner from "@/components/ServicesBanner/ServicesBanner";
import Contact from "@/components/HeadBanner/Contact/Contact";


export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-between ">
       <HeadBanner header={true}>
          <Header />
       </HeadBanner>
       <ContactStripe socialMedia={false}/>
       <ServicesBanner/>
       <HeadBanner aboutUs>
          <AboutUs />
       </HeadBanner>
       <ContactStripe socialMedia={true}/>
       <HeadBanner >
        <Contact />
       </HeadBanner>
    </main>
  );
}
