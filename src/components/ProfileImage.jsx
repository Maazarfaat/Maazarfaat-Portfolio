import { useState } from "react";
import { profile } from "../data/profile.js";

/**
 * ProfileImage — renders /profile.jpg when present; otherwise falls back
 * to a styled monogram. Uses a 4:5 portrait aspect ratio.
 */
export default function ProfileImage({
  alt,
  className = "",
  eager = false,
  aspect = "aspect-[4/5]",
  radius = "rounded-[1.5rem]",
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={`relative overflow-hidden ${radius} border border-line ${aspect} ${className}`}
    >
      {(failed || !profile.photo) ? (
        <div
          aria-label="Monogram placeholder"
          className="flex h-full w-full items-center justify-center bg-bg-alt"
        >
          <span className="font-display text-6xl font-normal text-ink/10 sm:text-7xl">
            {profile.monogram}
          </span>
        </div>
      ) : (
        <img
          src={profile.photo}
          alt={alt}
          loading={eager ? "eager" : "lazy"}
          onError={() => setFailed(true)}
          className="h-full w-full object-cover object-center"
        />
      )}
    </div>
  );
}
