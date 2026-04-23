export default function FounderNoteSection() {
  return (
    <section className="w-full bg-[#060b14] py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(8,12,22,0.96)_0%,rgba(6,11,20,0.98)_100%)] px-6 py-10 shadow-[0_28px_90px_rgba(0,0,0,0.32)] sm:px-8 md:px-10 md:py-12 lg:px-12">
          <div className="mb-10 text-center">
            <h2 className="mt-3 text-[2rem] font-semibold tracking-[-0.04em] text-white sm:text-[2.4rem] lg:text-[2.9rem]">
              Founder Note
            </h2>
          </div>

          <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
            <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[linear-gradient(160deg,rgba(26,34,49,0.98)_0%,rgba(13,18,29,0.98)_48%,rgba(8,12,20,1)_100%)] min-h-[320px] sm:min-h-[380px] lg:min-h-[430px]">
              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(circle at 20% 20%, rgba(110,215,255,0.16), rgba(110,215,255,0) 28%), radial-gradient(circle at 78% 24%, rgba(92,123,252,0.2), rgba(92,123,252,0) 32%), linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0) 44%)",
                }}
              />

              <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.16)_1px,transparent_1px)] [background-size:38px_38px]" />

              <div
                aria-hidden="true"
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80')",
                }}
              />

              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,11,20,0.12)_0%,rgba(6,11,20,0.3)_100%)]" />
            </div>

            <div className="max-w-2xl">
              <h3 className="text-[2rem] font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-[2.5rem] lg:text-[3rem]">
                From idea to momentum.
              </h3>

              <p className="mt-6 text-[1rem] leading-[1.9] text-white/72 sm:text-[1.08rem]">
                XENTRO was built to remove the friction that slows early builders down. Students, founders,
                mentors, investors, and institutions should not have to jump between scattered tools to
                discover opportunities, get feedback, and show progress.
              </p>

              <p className="mt-5 text-[1rem] leading-[1.9] text-white/62 sm:text-[1.08rem]">
                Our goal is simple: create one focused ecosystem where every stage of the journey feels
                supported, intentional, and easier to act on. That means guided learning, cleaner mentor
                access, stronger startup visibility, and a platform that makes momentum visible.
              </p>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}