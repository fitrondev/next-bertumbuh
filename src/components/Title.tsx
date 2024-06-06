import { cn } from "@/lib/utils";

const Title = ({
  section,
  title,
  description,
  className,
  titleClassName,
  descClassName,
}: {
  section?: string;
  title: string;
  description?: string;
  className?: string;
  titleClassName?: string;
  descClassName?: string;
}) => {
  return (
    <div className={cn("space-y-2", className)}>
      <span className="text-lg sm:text-xl lg:text-2xl text-primary font-medium">
        {section}
      </span>
      <h2
        className={cn(
          "text-2xl sm:text-4xl lg:text-5xl font-medium",
          titleClassName
        )}>
        {title}
      </h2>
      <p
        className={cn(
          "text-sm sm:text-base text-muted-foreground",
          descClassName
        )}>
        {description}
      </p>
    </div>
  );
};
export default Title;
