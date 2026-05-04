export default function Loading() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] px-4 py-24 md:px-8">
      <div className="mx-auto w-full max-w-6xl space-y-8">
        <div className="shimmer-surface h-10 w-48 rounded-xl" />

        <section className="rounded-3xl border border-zinc-800/80 bg-zinc-900/70 p-5 md:p-8">
          <div className="grid gap-6 md:grid-cols-[1.1fr_1fr] md:items-center">
            <div className="flex gap-2">
              <div className="shimmer-surface h-44 w-[5.6rem] rounded-2xl md:h-52 md:w-28" />
              <div className="shimmer-surface h-44 w-[5.6rem] -translate-y-3 rounded-2xl md:h-52 md:w-28" />
              <div className="shimmer-surface h-44 w-[5.6rem] rounded-2xl md:h-52 md:w-28" />
            </div>
            <div className="space-y-3">
              <div className="shimmer-surface h-8 w-2/3 rounded-lg" />
              <div className="shimmer-surface h-4 w-full rounded-md" />
              <div className="shimmer-surface h-4 w-5/6 rounded-md" />
              <div className="mt-3 flex flex-wrap gap-2">
                <div className="shimmer-surface h-7 w-20 rounded-full" />
                <div className="shimmer-surface h-7 w-24 rounded-full" />
                <div className="shimmer-surface h-7 w-16 rounded-full" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
