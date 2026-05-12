import Image from "next/image";

export function Logo({
  variant = "mark",
  className,
  priority,
}: {
  variant?: "mark" | "wordmark";
  className?: string;
  priority?: boolean;
}) {
  if (variant === "wordmark") {
    return (
      <Image
        src="/brand/signature-dark.svg"
        alt="Zach Shevlin"
        width={600}
        height={140}
        priority={priority}
        className={className}
      />
    );
  }
  return (
    <Image
      src="/brand/signature-mark.svg"
      alt="Zach Shevlin"
      width={200}
      height={60}
      priority={priority}
      className={className}
    />
  );
}
