import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { Parallax } from "@/components/ui/Parallax";
import { BLUR_DATA_URL } from "@/lib/images";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  image: string;
  imageAlt: string;
};

/** Image-backed header with subtle parallax used at the top of inner pages. */
export function PageHeader({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
}: PageHeaderProps) {
  return (
    <section className="relative flex min-h-[64vh] items-end overflow-hidden">
      <Parallax amount={50} className="absolute inset-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL}
          className="object-cover"
        />
      </Parallax>
      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/35 to-ink/45" />

      <div className="container-luxe relative z-10 pb-16 pt-32 text-cream">
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-gold" />
            <p className="eyebrow text-gold-soft">{eyebrow}</p>
          </div>
          <h1 className="mt-4 max-w-3xl text-balance text-4xl font-light leading-[1.05] sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description ? (
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-cream/80">
              {description}
            </p>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
