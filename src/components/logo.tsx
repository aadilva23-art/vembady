import Link from "next/link";
import Image from "next/image";

export function Logo({
  size = "default",
}: {
  size?: "default" | "large";
}) {
  const h = size === "large" ? 48 : 36;

  return (
    <Link href="/">
      <Image
        src="/logos/vembady-logo.png"
        alt="Vembady"
        width={h * 3}
        height={h}
        className="h-auto"
        style={{ height: h, width: "auto" }}
        priority
      />
    </Link>
  );
}
