import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[100dvh] items-center justify-center bg-ink px-4 text-cream">
      <section className="max-w-xl rounded-[16px] border border-white/10 bg-panel p-8 text-center shadow-[0_28px_90px_rgba(0,0,0,0.42)]">
        <p className="text-sm font-semibold text-crimson">404</p>
        <h1 className="mt-4 text-3xl font-semibold">
          Portfolio Nhập môn Công nghệ số và AI
        </h1>
        <p className="mt-4 leading-8 text-stone-300/80">
          Trang bạn đang tìm không tồn tại. Quay lại phiên bản tiếng Việt của
          portfolio để tiếp tục xem bài tập và minh chứng.
        </p>
        <Link
          href="/vi"
          className="mt-7 inline-flex rounded-full bg-crimson px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#c71931]"
        >
          Về trang chính
        </Link>
      </section>
    </main>
  );
}
