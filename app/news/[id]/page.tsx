import { useRouter } from "next/router";

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

type ParamsType = { params: { id: string } };

const NewsDetailPage = ({ params }: ParamsType) => {
  const news = newsData.find((newsItem) => newsItem.id === params.id);

  if (!news) {
    return <p>News not found.</p>;
  }

  return (
    <div className="w-10/12 mx-auto mt-16">
      <div className="ml-3">
        <h1 className="text-2xl font-bold mb-4">{news.title}</h1>
        <p>{news.summary}</p>
      </div>
    </div>
  );
};

export default NewsDetailPage;
