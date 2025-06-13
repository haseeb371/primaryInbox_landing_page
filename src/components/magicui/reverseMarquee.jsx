import { cn } from "@/lib/utils";

export function ReverseMarquee({
  className,
  reverse = true,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 2,
  ...props
}) {
  return (
    (<div
      {...props}
      className={cn(
        "group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className
      )}>
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn("!flex shrink-0 justify-around [gap:var(--gap)] ![animation-direction:reverse]", {
              "animate-marquee flex-row": !vertical,
              "animate-marquee-vertical flex-col": vertical,
              "group-hover:[animation-play-state:paused]": pauseOnHover,
            })}>
            {children}
          </div>
        ))}
    </div>)
  );
}
