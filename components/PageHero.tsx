type PageHeroProps = {
  title: string;
  description: string;
  eyebrow?: string;
};

export default function PageHero({
  title,
  description,
  eyebrow,
}: PageHeroProps) {
  return (
    <section className="bg-gradient-to-br from-primary-500 to-primary-600 py-16 text-white md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {eyebrow && (
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
            {eyebrow}
          </p>
        )}
        <h1 className="mb-6 text-4xl font-bold md:text-5xl">{title}</h1>
        <p className="text-lg text-primary-100 md:max-w-3xl">{description}</p>
      </div>
    </section>
  );
}

