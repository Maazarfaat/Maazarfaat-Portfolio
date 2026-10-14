/**
 * BrandIcons — authentic, colorful brand logos for verified tech stack.
 * Uses official brand colors and proportions with standard viewBoxes.
 */

export function GithubIcon({ className = "w-5 h-5", ...props }) {
  return (
    <svg viewBox="0 0 24 24" fill="#24292F" className={className} aria-hidden="true" {...props}>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

export function LinkedinIcon({ className = "w-5 h-5", ...props }) {
  return (
    <svg viewBox="0 0 24 24" fill="#0A66C2" className={className} aria-hidden="true" {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
    </svg>
  );
}

export function ReactIcon({ className = "w-5 h-5", ...props }) {
  return (
    <svg viewBox="-11.5 -10.23174 23 20.46348" className={className} aria-hidden="true" {...props}>
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

export function PythonIcon({ className = "w-5 h-5", ...props }) {
  return (
    <svg viewBox="0 0 110 110" className={className} fill="none" aria-hidden="true" {...props}>
      <path
        d="M54.5 5C27.5 5 28.5 16.7 28.5 16.7L28.6 28.8H55.2V32.4H17.8C17.8 32.4 5 30.9 5 57.7C5 84.5 16.2 83.3 16.2 83.3H22.9V71.8C22.9 71.8 22.5 58 36.6 58H62.9C62.9 58 75.9 58.4 75.9 45.4V16.7C75.9 16.7 78.5 5 54.5 5ZM42.6 13.5C45.3 13.5 47.4 15.6 47.4 18.2C47.4 20.8 45.3 22.9 42.6 22.9C40 22.9 37.8 20.8 37.8 18.2C37.8 15.6 40 13.5 42.6 13.5Z"
        fill="#3776AB"
      />
      <path
        d="M55.5 105C82.5 105 81.5 93.3 81.5 93.3L81.4 81.2H54.8V77.6H92.2C92.2 77.6 105 79.1 105 52.3C105 25.5 93.8 26.7 93.8 26.7H87.1V38.2C87.1 38.2 87.5 52 73.4 52H47.1C47.1 52 34.1 51.6 34.1 64.6V93.3C34.1 93.3 31.5 105 55.5 105ZM67.4 96.5C64.7 96.5 62.6 94.4 62.6 91.8C62.6 89.2 64.7 87.1 67.4 87.1C70 87.1 72.2 89.2 72.2 91.8C72.2 94.4 70 96.5 67.4 96.5Z"
        fill="#FFD438"
      />
    </svg>
  );
}

export function JavaIcon({ className = "w-5 h-5", ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true" {...props}>
      <path
        d="M8.85 17.65c0 .05-.05.1-.1.1-.35.15-1.4.3-1.85.35-1.5.15-2.75-.4-2.85-.45l-.2.15c.05.05 1.15.75 2.95.75.5 0 1.5-.05 2.1-.25.25-.1.45-.25.45-.4 0-.15-.2-.2-.5-.25zm-.3-2.1c0 .05-.05.1-.1.1-.35.15-1.4.3-1.85.35-1.5.15-2.75-.4-2.85-.45l-.2.15c.05.05 1.15.75 2.95.75.5 0 1.5-.05 2.1-.25.25-.1.45-.25.45-.4 0-.15-.2-.2-.5-.25zm9.8-5.3c-.3-.25-1.3-.7-2.6-.7-2.3 0-3.6 1.25-3.6 2.75 0 1.25.9 2.1 2.45 2.65 1.65.6 2.55 1.05 2.55 1.95 0 1.15-1.15 1.8-2.6 1.8-1.55 0-2.7-.55-3.35-1.1l-.25.35c.75.65 2.05 1.25 3.65 1.25 1.85 0 3.1-.9 3.1-2.3 0-1.35-.95-2.1-2.6-2.65-1.6-.55-2.4-.95-2.4-1.85 0-.9.8-1.7 2.3-1.7 1.15 0 2 .35 2.5.65l.3-.45z"
        fill="#5382A1"
      />
      <path
        d="M12.02 0c-3.17 0-6.19 1.12-8.52 3.18l1.45 1.59C6.9 3.09 9.38 2.17 12.02 2.17c5.42 0 9.83 4.41 9.83 9.83 0 2.64-.92 5.12-2.6 7.07l1.59 1.45C22.88 18.21 24 15.19 24 12.02 24 5.38 18.62 0 12.02 0z"
        fill="#E76F00"
      />
    </svg>
  );
}

export function JavascriptIcon({ className = "w-5 h-5", ...props }) {
  return (
    <svg viewBox="0 0 105 105" className={className} aria-hidden="true" {...props}>
      <rect width="105" height="105" fill="#F7DF1E" rx="10" />
      <path
        d="M59.4 76.6c2.7 4.5 6.2 7.7 12.5 7.7 5.2 0 8.6-2.6 8.6-6.2 0-4.3-3.5-5.9-9.3-8.4-8.3-3.6-13.8-8.1-13.8-17.7 0-8.8 6.7-15.5 17.2-15.5 7.4 0 12.8 2.6 16.7 9.5l-8.2 5.3c-2-3.6-4.2-5-8.5-5-3.8 0-6.2 2.4-6.2 5.4 0 3.7 2.4 5.2 7.9 7.5 9.6 4.1 15.3 8.4 15.3 18.7 0 10.7-8.4 16.7-20.9 16.7-11.6 0-19.1-5.6-22.9-13.4l9.6-5.6zM26.2 75.3l8.6-5.2c1.8 3.2 3.6 5.8 7.3 5.8 3.8 0 6.2-1.5 6.2-7.5V37.5h11.2v31.4c0 11.5-6.7 16.7-16.7 16.7-8.8 0-14.4-4.6-16.6-10.3z"
        fill="#000000"
      />
    </svg>
  );
}

export function TailwindIcon({ className = "w-5 h-5", ...props }) {
  return (
    <svg viewBox="0 0 24 24" fill="#38BDF8" className={className} aria-hidden="true" {...props}>
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.335 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 17.818 15.027 19.2 18.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.335 13.382 8.975 12 6.001 12z" />
    </svg>
  );
}

export function NodeIcon({ className = "w-5 h-5", ...props }) {
  return (
    <svg viewBox="0 0 24 24" fill="#539E43" className={className} aria-hidden="true" {...props}>
      <path d="M12 1.625L2.5 7.11v10.97L12 23.57l9.5-5.49V7.11L12 1.625zm0 2.235l7.564 4.37-7.564 4.37-7.564-4.37L12 3.86zM4.436 9.473L11 13.264v7.712l-6.564-3.793V9.473zm15.128 0v7.71l-6.564 3.793v-7.712l6.564-3.79z" />
    </svg>
  );
}

export function FastapiIcon({ className = "w-5 h-5", ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="12" fill="#05998B" />
      <path d="M11.25 4.5L16.5 12H12l.75 7.5L7.5 12h4.5z" fill="#FFFFFF" />
    </svg>
  );
}

export function GitIcon({ className = "w-5 h-5", ...props }) {
  return (
    <svg viewBox="0 0 24 24" fill="#F05032" className={className} aria-hidden="true" {...props}>
      <path d="M23.546 10.93L13.067.452a1.5 1.5 0 0 0-2.124 0L8.831 2.564l3.199 3.199a1.782 1.782 0 0 1 2.251 2.253l3.078 3.079a1.782 1.782 0 1 1-1.077 1.077l-2.88-2.88a1.784 1.784 0 0 1-2.063-.359 1.78 1.78 0 0 1-.359-2.062L7.906 3.896.454 11.348a1.5 1.5 0 0 0 0 2.125l10.48 10.478a1.5 1.5 0 0 0 2.125 0l10.48-10.479a1.5 1.5 0 0 0 .007-2.542z" />
    </svg>
  );
}

export function PostgresIcon({ className = "w-5 h-5", ...props }) {
  return (
    <svg viewBox="0 0 24 24" fill="#336791" className={className} aria-hidden="true" {...props}>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-4c0-.28.22-.5.5-.5s.5.22.5.5v4zm3-2c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-2c0-.28.22-.5.5-.5s.5.22.5.5v2zm-6 0c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-2c0-.28.22-.5.5-.5s.5.22.5.5v2zm4-6.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
    </svg>
  );
}

export function MysqlIcon({ className = "w-5 h-5", ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...props}>
      <path d="M16.5 4.5C14.8 2.9 12.3 2 9.5 2 4.3 2 0 6.3 0 11.5c0 2.8.9 5.3 2.5 7l1.5-1.5C2.6 15.6 2 13.6 2 11.5 2 7.4 5.4 4 9.5 4c2.2 0 4.2.9 5.6 2.4l1.4-1.9z" fill="#00758F" />
      <path d="M21.5 6.5C19.8 4.9 17.3 4 14.5 4l-1.4 1.9c2.2 1.5 3.9 3.8 4.6 6.6H20c.6-1.8 1.1-4 1.5-6z" fill="#F29111" />
      <circle cx="12" cy="12" r="3" fill="#00758F" />
    </svg>
  );
}

export function MongoIcon({ className = "w-5 h-5", ...props }) {
  return (
    <svg viewBox="0 0 24 24" fill="#47A248" className={className} aria-hidden="true" {...props}>
      <path d="M12 0C12 0 4 7.6 4 15.2C4 19.6 7.6 24 12 24C16.4 24 20 19.6 20 15.2C20 7.6 12 0 12 0ZM12 21.6C10.2 21.6 8.8 20.2 8.8 18.4C8.8 15.6 12 11.2 12 11.2C12 11.2 15.2 15.6 15.2 18.4C15.2 20.2 13.8 21.6 12 21.6Z" />
    </svg>
  );
}

export function PytorchIcon({ className = "w-5 h-5", ...props }) {
  return (
    <svg viewBox="0 0 24 24" fill="#EE4C2C" className={className} aria-hidden="true" {...props}>
      <path d="M12.7 0c-.3 0-.6.2-.7.5l-1.5 3.2c-.1.2 0 .5.2.7.2.1.5.1.7-.1l.9-1.9c2.8 1.4 4.7 4.3 4.7 7.6 0 4.7-3.8 8.5-8.5 8.5S0 14.7 0 10s3.8-8.5 8.5-8.5c1.4 0 2.7.3 3.9.9.2.1.5 0 .6-.2.1-.2 0-.5-.2-.6C11.5 1 9.9.6 8.5.6 3.3.6-.9 4.8-.9 10s4.2 9.4 9.4 9.4 9.4-4.2 9.4-9.4c0-3.8-2.3-7.1-5.6-8.6l1.1-2.4c.1-.3-.1-.6-.4-.6h-.3z" />
      <circle cx="16.5" cy="5.5" r="1.5" fill="#EE4C2C" />
    </svg>
  );
}

export function OpencvIcon({ className = "w-5 h-5", ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...props}>
      <circle cx="12" cy="6" r="4.5" fill="#ED1C24" />
      <circle cx="6.5" cy="16.5" r="4.5" fill="#27A9E1" />
      <circle cx="17.5" cy="16.5" r="4.5" fill="#8DC63F" />
    </svg>
  );
}

export function ViteIcon({ className = "w-5 h-5", ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...props}>
      <path d="M23.6 3.7L12.5 23.6c-.2.4-.8.4-1 0L.4 3.7c-.3-.5.1-1.1.7-1l10.9 2.2c.1 0 .2 0 .3 0L23 2.7c.5-.1.9.5.6 1z" fill="#646CFF" />
      <path d="M13.8 1.5L6.6 12.3c-.2.3 0 .7.4.7h4.2l-1.5 5.5c-.1.4.4.7.7.4l7.2-10.8c.2-.3 0-.7-.4-.7H13l1.5-6.9c.1-.4-.4-.7-.7-.5z" fill="#FFD62E" />
    </svg>
  );
}

export function CIcon({ className = "w-5 h-5", ...props }) {
  return (
    <svg viewBox="0 0 24 24" fill="#00599C" className={className} aria-hidden="true" {...props}>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c4.1 0 7.6-2.5 9.1-6.1l-2.6-1.1c-1.1 2.6-3.6 4.3-6.5 4.3-3.9 0-7.1-3.2-7.1-7.1s3.2-7.1 7.1-7.1c2.9 0 5.4 1.8 6.5 4.3l2.6-1.1C19.6 4.5 16.1 2 12 2z" />
    </svg>
  );
}

export function TomcatIcon({ className = "w-5 h-5", ...props }) {
  return (
    <svg viewBox="0 0 24 24" fill="#D1A153" className={className} aria-hidden="true" {...props}>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-4c0-.28.22-.5.5-.5s.5.22.5.5v4zm3-2c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-2c0-.28.22-.5.5-.5s.5.22.5.5v2zm-6 0c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-2c0-.28.22-.5.5-.5s.5.22.5.5v2zm4-6.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
    </svg>
  );
}

export function MavenIcon({ className = "w-5 h-5", ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...props}>
      <path d="M12 2L3 8v8l9 6 9-6V8l-9-6zm0 2.3l6.7 4.5L12 13.3 5.3 8.8 12 4.3zM4.8 9.9l6.2 4.1v7.2l-6.2-4.1V9.9zm8.2 11.3v-7.2l6.2-4.1v7.2l-6.2-4.1z" fill="#C71A36" />
      <path d="M12 13.3l6.7-4.5v7.2L12 20.1v-6.8z" fill="#355088" />
    </svg>
  );
}

export function ExpressIcon({ className = "w-5 h-5", ...props }) {
  return (
    <svg viewBox="0 0 24 24" fill="#15181E" className={className} aria-hidden="true" {...props}>
      <path d="M19.5 7h-3.8l-2.4 4.8L10.9 7H7.1l3.8 6-4.1 6.5h3.8l2.6-5 2.6 5h3.8l-4.3-6.6L19.5 7z" />
    </svg>
  );
}
