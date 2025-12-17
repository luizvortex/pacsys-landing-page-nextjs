import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { FooterSolution } from "./components/footer-solutions";
import { SectionServices } from "./components/section-services"; 
// import { Footer } from "./components/footer";

export default async function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
    
      
      {/* Nova Secção de Serviços (Grid) */}
      <SectionServices />
      
      {/* <Footer /> */}
      <FooterSolution />
    </main>
  );
}