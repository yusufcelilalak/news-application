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
import { Suspense } from "react";
import LoadingSpinner from "@/components/loading-spinner";

type ParamsType = { params: { filter: string[] } };
type FilteredNewsType = { year: string; month: string };

const padZero = (num: string) => num.toString().padStart(2, "0");

async function FilterHeader({ year, month }: FilteredNewsType) {
  const availableYears = await getAvailableNewsYears();
  let links: number[] | string[] = availableYears;

  if (
    (year && !availableYears.includes(String(year))) ||
    (month &&
      !getAvailableNewsMonths(String(year)).includes(
        padZero(getMonthNumber(month))
      ))
  ) {
    throw new Error("Invalid filter.");
  }

  if (year && !month) {
    links = getAvailableNewsMonths(year).map((month) => getMonthName(+month));
  }

  if (year && month) {
    links = [];
  }

  return (
    <Pagination className="justify-start mb-4">
      <PaginationContent>
        {links.map((link) => {
          const href = year
            ? `/archive/${year}/${String(link).toLowerCase()}`
            : `/archive/${link}`;

          return (
            <PaginationItem key={link}>
              <Button
                className="w-fit px-1"
                variant={+year === link ? "outline" : "ghost"}
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
  );
}

async function FilteredNews({ year, month }: FilteredNewsType) {
  let news;

  if (year && !month) {
    news = await getNewsForYear(year);
  } else if (year && month) {
    news = await getNewsForYearAndMonth(year, padZero(getMonthNumber(month)));
  }

  let newsContent = <p>No news found for the selected period.</p>;

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  return newsContent;
}

export default async function FilteredNewsPage({ params }: ParamsType) {
  const filter = params.filter;

  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  return (
    <>
      <Suspense fallback={<LoadingSpinner />}>
        <FilterHeader year={selectedYear} month={selectedMonth} />
        <FilteredNews year={selectedYear} month={selectedMonth} />
      </Suspense>
    </>
  );
}
