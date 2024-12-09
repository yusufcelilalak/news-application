export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-start">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 dark:border-blue-300"></div>
    </div>
  );
}
