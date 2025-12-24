import { cn } from "@/lib/utils";

export default function SectionHeader({ subTitle, title, hasBg }) {
  return (
    <div className="relative mb-20">
      <p
        aria-hidden="true"
        className={cn(
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center  text-6xl md:text-8xl heading capitalize -z-10 tracking-widest",
          {
            "text-white": hasBg,
            "text-primary-foreground": !hasBg,
          }
        )}
      >
        {subTitle}
      </p>
      <h2 className="text text-secondary text-2xl uppercase text-center">
        {title}
      </h2>
    </div>
  );
}
