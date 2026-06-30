import FeatureCard from "./FeatureCard";
import { featureCards } from "@/constants/feature-card";

const Hero = () => {
  return (
    <section className="py-12">
      <div className="mx-auto grid max-w-6xl gap-6 px-6 lg:grid-cols-3">
        {featureCards.map((card) => (
          <FeatureCard key={card.href} card={card} />
        ))}
      </div>
    </section>
  );
};

export default Hero;
