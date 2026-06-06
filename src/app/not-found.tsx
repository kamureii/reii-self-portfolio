import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[100dvh] items-center justify-center bg-ink px-4 text-cream">
      <section className="max-w-xl rounded-[18px] border border-white/10 bg-panel p-8 text-center shadow-[0_28px_90px_rgba(0,0,0,0.42)]">
        <p className="font-mono text-sm font-semibold text-crimson">404 / SIGNAL LOST</p>
        <h1 className="mt-5 text-4xl font-semibold">Không tìm thấy tín hiệu.</h1>
        <p className="mt-5 leading-8 text-stone-300/80">
          Trang bạn đang tìm không tồn tại. Quay lại tín hiệu chính của KAMUREI để tiếp tục.
        </p>
        <Link
          href="/vi"
          className="mt-8 inline-flex rounded-full bg-crimson px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#c71931]"
        >
          Về trang chính
        </Link>
      </section>
    </main>
  );
}
