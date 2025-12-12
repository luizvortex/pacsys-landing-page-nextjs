import { Header } from "./components/header";
import { SectionSolution } from "./components/section-solutions";
// import { Footer } from "./components/footer";

export default async function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <SectionSolution />
      {/* <Footer /> */}
    </main>
  );
}