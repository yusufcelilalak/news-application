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
} from "@/components/ui/pagination";
import { getAvailableNewsYears } from "@/lib/news";
import { getMonthName, getMonthNumber } from "@/utils/formats";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type ParamsType = { params: { filter: string[] } };

export default async function FilteredNewsPage({ params }: ParamsType) {
  const filter = params.filter;

  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  let news;
  let links: number[] | string[] = await getAvailableNewsYears();

  const padZero = (num: string) => num.toString().padStart(2, "0");

  if (selectedYear && !selectedMonth) {
    news = await getNewsForYear(selectedYear);

    links = getAvailableNewsMonths(selectedYear).map((month) =>
      getMonthName(+month)
    );
  }

  if (selectedYear && selectedMonth) {
    news = await getNewsForYearAndMonth(
      selectedYear,
      padZero(getMonthNumber(selectedMonth))
    );
    links = [];
  }

  let newsContent = <p>No news found for the selected period.</p>;

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  const availableYears = await getAvailableNewsYears();

  if (
    (selectedYear && !availableYears.includes(String(selectedYear))) ||
    (selectedMonth &&
      !getAvailableNewsMonths(String(selectedYear)).includes(
        padZero(getMonthNumber(selectedMonth))
      ))
  ) {
    throw new Error("Invalid filter.");
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
                <Button
                  className="w-fit px-1"
                  variant={+selectedYear === link ? "outline" : "ghost"}
                >
                  <Link className="w-fit px-1" href={href}>
                    {link}
                  </Link>
                </Button>
              </PaginationItem>
            );
          })}
        </PaginationContent>
      </Pagination>
      {newsContent}
    </>
  );
}
