"use client";

interface FilterErrorProps {
  error: Error;
}

export default function FilterError({ error }: FilterErrorProps) {
  return (
    <main className="">
      <h1 className="text-2xl font-semibold my-2">An error occurred!</h1>
      <p className="text-lg ">{error.message}</p>
    </main>
  );
}
