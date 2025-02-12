// import { cn } from "@/lib/utils";

import { cn } from "@/lib";

interface AnimatedTrailProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The duration of the animation.
   * @default "10s"
   */
  duration?: string;

  contentClassName?: string;

  trailColor?: string;
  trailSize?: "sm" | "md" | "lg";
}

const sizes = {
  sm: 5,
  md: 10,
  lg: 20,
};

export default function AnimatedBorderTrail({
  children,
  className,
  duration = "10s",
  trailColor = "orange",
  trailSize = "md",
  contentClassName,
  ...props
}: AnimatedTrailProps) {
  return (
    <div
      {...props}
      className={cn("relative  transition-all duration-300 ease-in-out transform hover:scale-100 hover:shadow-lg hover:shadow-[#2865FF]/50  h-fit w-fit overflow-hidden rounded-[40px] bg-transparent p-[1px]", className)}
    >
      <div
        className="absolute inset-0 h-full w-full animate-trail"
        style={{
            ["--duration" as any]: duration,
            ["--angle" as any]: "0deg",
            background: `conic-gradient(from var(--angle) at 50% 50%, transparent ${100 - sizes[trailSize]}%, ${trailColor})`,
          }}
      />
      <div
        className={cn(
          "relative h-full w-full hover:shadow-lg hover:shadow-[#2865FF]/50  overflow-hidden rounded-[40px] bg-transparent",
          contentClassName,
        )}
      >
        {children}
      </div>
    </div>
  );
}
