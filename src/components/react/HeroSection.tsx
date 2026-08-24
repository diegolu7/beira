import { useRef } from "react";
import type { MouseEvent } from "react";
import {
  motion,
  MotionConfig,
  useScroll,
  useTransform,
  useMotionValue,
} from "framer-motion";
import { getWhatsAppUrl } from "../../utils/whatsapp";
import { site } from "../../data/site";
import "../../styles/hero.css";

interface Props {
  imageSrc: string;
  imageSrcSet: string;
  imageWidth: number;
  imageHeight: number;
}

export default function HeroSection({
  imageSrc,
  imageSrcSet,
  imageWidth,
  imageHeight,
}: Props) {
  const visualRef = useRef<HTMLDivElement>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 700], [0, 70]);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>): void => {
    const el = visualRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    rotateY.set((x - 0.5) * 8);
    rotateX.set((0.5 - y) * 8);
    el.style.setProperty("--spot-x", `${x * 100}%`);
    el.style.setProperty("--spot-y", `${y * 100}%`);
  };

  const handleMouseLeave = (): void => {
    rotateX.set(0);
    rotateY.set(0);
  };

  const whatsappHref = getWhatsAppUrl(site.whatsappMessage);

  return (
    <MotionConfig reducedMotion="user">
      <section className="hero">
        <motion.div className="hero__bg" aria-hidden="true" style={{ y: bgY }}>
          <div className="hero__grid"></div>
        </motion.div>

        <div className="container hero__inner">
          <div className="hero__content">
            <h1>Productos digitales que hacen crecer tu negocio</h1>
            <p className="hero__lead">
              Beira acompaña a empresas a diseñar, desarrollar e integrar
              soluciones digitales, desde el MVP hasta la escala, con
              metodología ágil y foco en resultados.
            </p>
            <div className="hero__actions">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary btn--lg"
                data-analytics="whatsapp"
                data-location="hero"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  fill="currentColor"
                  aria-hidden="true"
                  className="btn__icon"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
                <span>Conversar por WhatsApp</span>
              </a>
              <a href="#servicios" className="hero__link">
                Conocer servicios
              </a>
            </div>
          </div>

          <motion.div
            className="hero__visual"
            data-hero-visual
            aria-hidden="true"
            ref={visualRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <motion.div
              className="hero__visual-bg"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
            >
              <div className="hero__visual-gradient"></div>
              <svg
                className="hero__visual-pattern"
                width="140"
                height="140"
                viewBox="0 0 140 140"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="currentColor">
                  <circle cx="12" cy="12" r="2.5" />
                  <circle cx="40" cy="12" r="2.5" />
                  <circle cx="68" cy="12" r="2.5" />
                  <circle cx="96" cy="12" r="2.5" />
                  <circle cx="124" cy="12" r="2.5" />
                  <circle cx="12" cy="40" r="2.5" />
                  <circle cx="40" cy="40" r="2.5" />
                  <circle cx="68" cy="40" r="2.5" />
                  <circle cx="96" cy="40" r="2.5" />
                  <circle cx="12" cy="68" r="2.5" />
                  <circle cx="40" cy="68" r="2.5" />
                  <circle cx="68" cy="68" r="2.5" />
                  <circle cx="12" cy="96" r="2.5" />
                  <circle cx="40" cy="96" r="2.5" />
                  <circle cx="12" cy="124" r="2.5" />
                </g>
              </svg>
            </motion.div>

            <motion.div className="hero__img-wrap" style={{ rotateX, rotateY }}>
              <img
                src={imageSrc}
                srcSet={imageSrcSet}
                alt=""
                className="hero__img"
                width={imageWidth}
                height={imageHeight}
                sizes="(max-width: 1023px) 100vw, 45vw"
                loading="eager"
                decoding="async"
              />
            </motion.div>

            <div className="hero__spotlight" aria-hidden="true"></div>
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
}
