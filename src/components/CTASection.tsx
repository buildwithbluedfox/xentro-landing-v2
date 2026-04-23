export default function CTASection() {
  return (
    <section className="w-full bg-[#060b14] px-6 py-14 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-[#040814] px-6 py-16 text-center shadow-[0_24px_90px_rgba(0,0,0,0.38)] sm:px-10 sm:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 50% 8%, rgba(255,255,255,0.09), rgba(255,255,255,0) 36%), linear-gradient(180deg, rgba(7,12,26,0.25) 0%, rgba(7,12,26,0.78) 62%, rgba(7,12,26,0.98) 100%)",
            }}
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-28 left-1/2 h-56 w-[140%] -translate-x-1/2 rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(116, 166, 255, 0.95) 0%, rgba(116, 166, 255, 0.55) 34%, rgba(116, 166, 255, 0.18) 58%, rgba(116, 166, 255, 0) 76%)",
            }}
          />

          <div className="relative z-10 mx-auto max-w-3xl">
            <h2 className="text-balance text-[2rem] font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-[2.7rem] lg:text-[3.2rem]">
              Ready to build your startup journey with XENTRO?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-[0.95rem] leading-8 text-white/68 sm:text-[1.05rem]">
              Join students, founders, mentors, and investors in one ecosystem designed to turn ideas into
              real momentum.
            </p>

            <div className="mt-8">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#060b14] transition-colors hover:bg-[#dff4ff]"
              >
                Join XENTRO
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}