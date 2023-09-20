import ResultSection from "@/components/result-section/result-section";
import SearchSection from "@/components/search-section/search-section";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full px-4 lg:px-0">
      <SearchSection />
      <div className="bg-[#dadce0] w-full h-[1px]" />
      <ResultSection />
    </main>
  );
}
