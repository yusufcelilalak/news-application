import Link from "next/link";
import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const newsData = [
  {
    id: "global-markets-rally-amid-economic-optimism",
    title: "Global Markets Rally Amid Economic Optimism",
    summary:
      "Stock markets around the world surged today as investors reacted to positive economic data.",
    category: "Economy",
    image: "/images/market-rally.jpg",
  },
  {
    id: "new-technology-promises-to-revolutionize-healthcare",
    title: "New Technology Promises to Revolutionize Healthcare",
    summary:
      "A breakthrough in medical technology could lead to major advances in patient care.",
    category: "Health",
    image: "/images/healthcare-technology.jpg",
  },
  {
    id: "renewable-energy-projects-gain-momentum",
    title: "Renewable Energy Projects Gain Momentum",
    summary:
      "New investments in renewable energy are set to transform the energy landscape.",
    category: "Environment",
    image: "/images/renewable-energy.jpg",
  },
  {
    id: "education-reform-plans-unveiled",
    title: "Education Reform Plans Unveiled",
    summary:
      "The government has announced a series of reforms aimed at improving educational outcomes.",
    category: "Education",
    image: "/images/education-reform.jpg",
  },
  {
    id: "advancements-in-ai-technology",
    title: "Advancements in AI Technology",
    summary:
      "Recent advancements in artificial intelligence are expected to have far-reaching impacts across various industries.",
    category: "Technology",
    image: "/images/ai-technology.jpg",
  },
  {
    id: "climate-change-mitigation-strategies",
    title: "Climate Change Mitigation Strategies",
    summary:
      "Experts discuss the latest strategies to mitigate the effects of climate change at the global summit.",
    category: "Environment",
    image: "/images/climate-change.jpg",
  },
  {
    id: "breakthrough-in-quantum-computing",
    title: "Breakthrough in Quantum Computing",
    summary:
      "Scientists have achieved a significant breakthrough in the field of quantum computing.",
    category: "Science",
    image: "/images/quantum-computing.jpg",
  },
  {
    id: "sports-team-wins-championship",
    title: "Sports Team Wins Championship",
    summary:
      "The local sports team has won the national championship in a thrilling final match.",
    category: "Sports",
    image: "/images/sports-championship.jpg",
  },
];

const NewsPage = () => {
  return (
    <div className="w-8/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16 my-32">
      {newsData.map((news) => (
        <Card key={news.id}>
          <CardHeader>
            <AspectRatio ratio={4 / 3} className="bg-muted flex items-end">
              <Image
                src="https://images.pexels.com/photos/17846072/pexels-photo-17846072/free-photo-of-close-up-of-a-newspaper-stand.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Photo by Drew Beamer"
                fill
                className="rounded-md object-cover"
              />
              <Link
                key={news.id}
                href={`/news/${news.id}`}
                className=" relative text-white m-2 drop-shadow-md"
              >
                <CardTitle className=" z-10">{news.title}</CardTitle>
              </Link>
            </AspectRatio>
            <CardDescription>{news.category}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{news.summary}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default NewsPage;
