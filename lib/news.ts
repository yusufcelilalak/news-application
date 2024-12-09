// import { DUMMY_NEWS } from "@/dummy-news";
// import sql from "better-sqlite3";

// const db = sql("data.db");

// export async function getAllNews() {
//   const news = db.prepare("SELECT * FROM news").all() as NewsItem[];
//   await new Promise((resolve) => setTimeout(resolve, 2000));
//   return news;
// }

// export function getLatestNews() {
//   return DUMMY_NEWS.slice(0, 3);
// }

// export function getAvailableNewsYears() {
//   return DUMMY_NEWS.reduce((years: number[], news) => {
//     const year = new Date(news.date).getFullYear();
//     if (!years.includes(year)) {
//       years.push(year);
//     }
//     return years;
//   }, []).sort((a, b) => b - a);
// }

// export function getAvailableNewsMonths(year: string) {
//   return DUMMY_NEWS.reduce((months: number[], news) => {
//     const newsYear = new Date(news.date).getFullYear();
//     if (newsYear === +year) {
//       const month = new Date(news.date).getMonth();
//       if (!months.includes(month)) {
//         months.push(month + 1);
//       }
//     }
//     return months;
//   }, []).sort((a, b) => b - a);
// }

// export function getNewsForYear(year: string) {
//   return DUMMY_NEWS.filter(
//     (news) => new Date(news.date).getFullYear() === +year
//   );
// }

// export function getNewsForYearAndMonth(year: string, month: string) {
//   return DUMMY_NEWS.filter((news) => {
//     const newsYear = new Date(news.date).getFullYear();
//     const newsMonth = new Date(news.date).getMonth() + 1;
//     return newsYear === +year && newsMonth === +month;
//   });
// }

import sql from "better-sqlite3";

const db = sql("data.db");

export async function getAllNews() {
  const news = db.prepare("SELECT * FROM news").all() as NewsItem[];
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return news;
}

export async function getNewsItem(slug: string) {
  const newsItem = db
    .prepare("SELECT * FROM news WHERE slug = ?")
    .get(slug) as NewsItem;

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return newsItem;
}

export async function getLatestNews() {
  const latestNews = db
    .prepare("SELECT * FROM news ORDER BY date DESC LIMIT 3")
    .all() as NewsItem[];
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return latestNews;
}

export async function getAvailableNewsYears(): Promise<string[]> {
  const years = db
    .prepare("SELECT DISTINCT strftime('%Y', date) as year FROM news")
    .all() as { year: string }[]; // Explicitly type the returned rows

  const yearList = years.map((row) => row.year); // Extract the year property
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return yearList;
}

export function getAvailableNewsMonths(year: string): string[] {
  const months = db
    .prepare(
      "SELECT DISTINCT strftime('%m', date) as month FROM news WHERE strftime('%Y', date) = ?"
    )
    .all(year) as { month: string }[]; // Explicitly type the returned rows

  return months.map((row) => row.month);
}

export async function getNewsForYear(year: string) {
  const news = db
    .prepare(
      "SELECT * FROM news WHERE strftime('%Y', date) = ? ORDER BY date DESC"
    )
    .all(year) as NewsItem[];

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return news;
}

export async function getNewsForYearAndMonth(year: string, month: string) {
  const news = db
    .prepare(
      "SELECT * FROM news WHERE strftime('%Y', date) = ? AND strftime('%m', date) = ? ORDER BY date DESC"
    )
    .all(year, month) as NewsItem[];

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return news;
}
