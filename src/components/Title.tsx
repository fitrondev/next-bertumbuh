import { cn } from "@/lib/utils";

const Title = ({
  section,
  title,
  description,
  className,
}: {
  section: string;
  title: string;
  description?: string;
  className?: string;
}) => {
  return (
    <div className={cn("space-y-2", className)}>
      <span className="text-lg sm:text-xl lg:text-2xl text-primary font-medium">
        {section}
      </span>
      <h2 className="text-2xl sm:text-4xl lg:text-5xl font-medium">{title}</h2>
      <p>{description}</p>
    </div>
  );
};
export default Title;
