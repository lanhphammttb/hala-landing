import FleurNavbar from "./Navbar";
import FleurHero from "./Hero";
import FleurServices from "./Services";
import FleurProductGrid from "./ProductGrid";
import FleurGiftIdeas from "./GiftIdeas";
import FleurCTA from "./CTA";
import FleurFooter from "./Footer";
import { getSeasonalTheme } from "./seasonal";

export default function FleurTemplate() {
  const seasonal = getSeasonalTheme();

  return (
    <div className={`flex min-h-screen flex-col ${seasonal.surfaceClass} selection:bg-[#C59D5F] selection:text-[#2C2420]`}>
      <FleurNavbar />
      <main className="flex-grow">
        <FleurHero seasonal={seasonal} />
        <FleurServices />
        <FleurProductGrid />
        <FleurGiftIdeas />
        <FleurCTA />
      </main>
      <FleurFooter />
    </div>
  );
}
