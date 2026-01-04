import { useEffect, useState, useRef } from "react";
import { siteContent } from "@/config/siteContent";

interface CounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  index: number;
}

function Counter({ value, prefix = "", suffix = "", label, index }: CounterProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <div
      ref={ref}
      className={`text-center opacity-0 ${
        isVisible ? "animate-count-up" : ""
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
      data-testid={`stat-${index}`}
    >
      <div className="text-4xl lg:text-5xl font-bold text-primary mb-2 tabular-nums">
        {prefix}
        {count.toLocaleString()}
        {suffix}
      </div>
      <p className="text-muted-foreground text-caption max-w-xs mx-auto">
        {label}
      </p>
    </div>
  );
}

export function StatsCounter() {
  const { stats } = siteContent;

  return (
    <section className="py-16 lg:py-24 bg-background" data-testid="section-stats">
      <div className="container-content">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {stats.items.map((stat, index) => (
            <Counter
              key={stat.label}
              value={stat.value}
              prefix={stat.prefix}
              suffix={stat.suffix}
              label={stat.label}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
