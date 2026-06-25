//未認証時の404表示
export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4">
      <h1 className="text-3xl font-bold">404 Not Found</h1>
      <p className="mt-4 text-gray-600">
        お探しのページは見つかりませんでした。
      </p>
    </main>
  );
}