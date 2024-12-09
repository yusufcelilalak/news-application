import { Button } from "@/components/ui/button";
import { Newspaper } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-background text-center">
      {/* Newspaper Icon */}
      <Newspaper className="w-24 h-24 text-primary mb-6" />

      {/* Title and Message */}
      <h1 className="text-4xl font-bold mb-4 text-primary">
        Welcome to Daily News
      </h1>
      <p className="text-lg mb-6">
        Stay updated with the latest news from around the world. Your daily dose
        of information, curated for you.
      </p>

      {/* Button */}
      <Link href="/news">
        <Button>Explore News</Button>
      </Link>
    </main>
  );
}
