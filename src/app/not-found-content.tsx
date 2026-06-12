import Link from "next/link";

export function NotFoundContent() {
  return (
    <main
      id="main-content"
      className="flex min-h-[100dvh] items-center justify-center bg-ink px-4 text-cream"
    >
      <section className="max-w-xl rounded-[18px] border border-white/10 bg-panel p-8 text-center shadow-[0_28px_90px_rgba(0,0,0,0.42)]">
        <p className="font-mono text-sm font-semibold text-crimson-bright">404 / SIGNAL LOST</p>
        <h1 className="mt-5 text-4xl font-semibold">Không tìm thấy tín hiệu.</h1>
        <p className="mt-2 text-2xl font-medium text-stone-300">Signal not found.</p>
        <p className="mt-5 leading-8 text-stone-300/80">
          Trang bạn đang tìm không tồn tại. The page you are looking for does not exist.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/vi"
            className="inline-flex items-center justify-center rounded-full bg-crimson px-6 py-3 text-sm font-semibold text-white transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-0.5 active:scale-[0.98]"
          >
            Về trang chính
          </Link>
          <Link
            href="/en"
            className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/4 px-6 py-3 text-sm font-semibold text-cream transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-0.5 active:scale-[0.98]"
          >
            Back to home
          </Link>
        </div>
      </section>
    </main>
  );
}
