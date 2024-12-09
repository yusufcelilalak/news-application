export default function NewsNotFound() {
  return (
    <main className="flex flex-col items-center justify-between p-24 bg-background">
      <h1 className=" text-5xl font-semibold mt-24 mb-4">Not Found!</h1>
      <p className="text-lg text-black/60">
        Unfortunately, we could not find the requested article.
      </p>
    </main>
  );
}
