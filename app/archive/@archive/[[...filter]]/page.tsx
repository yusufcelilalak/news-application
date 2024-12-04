import NewsList from "@/components/news-list";
import {
  getAvailableNewsMonths,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/lib/news";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import { getAvailableNewsYears } from "@/lib/news";
import { getMonthName, getMonthNumber } from "@/utils/formats";

type ParamsType = { params: { filter: string[] } };

export default function FiltredNewsPage({ params }: ParamsType) {
  const filter = params.filter;

  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  let news;
  let links: number[] | string[] = getAvailableNewsYears();

  if (selectedYear && !selectedMonth) {
    news = getNewsForYear(selectedYear);
    links = getAvailableNewsMonths(selectedYear).map((month) =>
      getMonthName(month)
    );
  }

  if (selectedYear && selectedMonth) {
    news = getNewsForYearAndMonth(selectedYear, getMonthNumber(selectedMonth));
    links = [];
  }

  let newsContent = <p>No news found for the selected period.</p>;

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  return (
    <>
      <Pagination className="justify-start mb-4">
        <PaginationContent>
          {links.map((link) => {
            const href = selectedYear
              ? `/archive/${selectedYear}/${String(link).toLowerCase()}`
              : `/archive/${link}`;

            return (
              <PaginationItem key={link}>
                <PaginationLink
                  className="w-fit px-1"
                  href={href}
                  isActive={+selectedYear === link}
                >
                  {link}
                </PaginationLink>
              </PaginationItem>
            );
          })}
        </PaginationContent>
      </Pagination>
      {newsContent}
    </>
  );
}
