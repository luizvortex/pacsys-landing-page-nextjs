import { Header } from "./components/header";
import {Hero} from "./components/hero";
import { SectionSolution } from "./components/section-solutions";
// import { Footer } from "./components/footer";

export default async function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <SectionSolution />
      {/* <Footer /> */}
    </main>
  );
}