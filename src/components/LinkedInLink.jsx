import { ArrowUpRight } from "lucide-react";
import { LinkedinIcon } from "./BrandIcons.jsx";

/**
 * LinkedInLink — a subtle, premium link to a SPECIFIC LinkedIn destination.
 * - url contains "/posts/"  → treated as an EXACT POST → labeled "View post".
 * - anything else           → treated as the general profile → "View on LinkedIn".
 * - url is null/empty       → renders nothing (no fabricated URLs).
 * Always opens in a new tab with rel="noopener noreferrer", is keyboard
 * accessible, has a meaningful aria-label, and stays visible on mobile.
 */
export default function LinkedInLink({
  url,
  className = "",
  iconClassName = "h-3.5 w-3.5",
}) {
  if (!url) return null;

  const isPost = url.includes("/posts/");
  const label = isPost ? "View post" : "View on LinkedIn";

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={isPost ? "Open LinkedIn post" : "Open LinkedIn profile"}
      className={`group/link inline-flex items-center gap-1.5 text-xs font-semibold transition-colors ${className}`}
    >
      <LinkedinIcon className={`${iconClassName} transition-transform group-hover/link:-translate-y-px`} />
      {label}
      <ArrowUpRight className="h-3 w-3 transition-transform group-hover/link:translate-x-px group-hover/link:-translate-y-px" />
    </a>
  );
}
