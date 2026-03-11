export default function NotFound() {//NotFound というページコンポーネントを作る
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4">
      <h1 className="text-3xl font-bold">404 Not Found</h1>
      <p className="mt-4 text-gray-600">
        お探しのページは見つかりませんでした。
      </p>
    </main>
  );
}