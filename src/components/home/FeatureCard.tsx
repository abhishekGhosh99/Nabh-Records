import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { FeatureCard as FeatureCardType } from "@/types/feature-card";

interface FeatureCardProps {
  card: FeatureCardType;
}

const FeatureCard = ({ card }: FeatureCardProps) => {
  return (
    <Link
      href={card.href}
      className="group relative h-96 overflow-hidden rounded-2xl border border-zinc-800 "
    >
      <Image
        src={card.image}
        alt={card.title}
        fill
        className="object-cover transition duration-500 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-black/55" />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
        <h2 className="text-4xl font-extrabold uppercase leading-tight">
          {card.title}
        </h2>

        <p className="mt-3 text-zinc-300">{card.subtitle}</p>

        <Button className="mt-8 border border-amber-400 bg-black/40 text-amber-300 hover:bg-amber-400 hover:text-black">
          {card.buttonText}
        </Button>
      </div>
    </Link>
  );
};

export default FeatureCard;
