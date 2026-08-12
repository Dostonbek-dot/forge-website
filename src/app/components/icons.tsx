/** Icons exported from the Figma frames (paths taken verbatim from the imported SVG sheets). */

export function SearchIcon({ className = "size-[20px]" }: { className?: string }) {
  return (
    <svg aria-hidden className={className} fill="none" viewBox="0 0 20 20">
      <path
        d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M17.5 17.5L13.875 13.875" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
    </svg>
  );
}

export function BagIcon({ className = "size-[20px]" }: { className?: string }) {
  return (
    <svg aria-hidden className={className} fill="none" viewBox="0 0 20 20">
      <path
        d="M5 1.66667H15L18.3333 6.66667V16.6667C18.3333 17.5833 17.5833 18.3333 16.6667 18.3333H3.33333C2.41667 18.3333 1.66667 17.5833 1.66667 16.6667V6.66667L5 1.66667Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path d="M2.5 6.66667H17.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function MenuIcon({ className = "size-[22px]" }: { className?: string }) {
  return (
    <svg aria-hidden className={className} fill="none" viewBox="0 0 22 22">
      <path d="M3.66667 6.41667H18.3333M3.66667 11H18.3333M3.66667 15.5833H18.3333" stroke="currentColor" strokeLinecap="round" strokeWidth="1.65" />
    </svg>
  );
}

export function CloseIcon({ className = "size-[22px]" }: { className?: string }) {
  return (
    <svg aria-hidden className={className} fill="none" viewBox="0 0 22 22">
      <path d="M5.5 5.5L16.5 16.5M16.5 5.5L5.5 16.5" stroke="currentColor" strokeLinecap="round" strokeWidth="1.65" />
    </svg>
  );
}

export function CheckIcon({ className = "size-[14px] lg:size-[15px]" }: { className?: string }) {
  return (
    <svg aria-hidden className={`shrink-0 ${className}`} fill="none" viewBox="0 0 15 15">
      <path d="M12.5 3.75L5.625 10.625L2.5 7.5" stroke="#CFFF3D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5625" />
    </svg>
  );
}

export function ArrowRightIcon({ className = "size-[18px] lg:size-[20px]" }: { className?: string }) {
  return (
    <svg aria-hidden className={`shrink-0 ${className}`} fill="none" viewBox="0 0 20 20">
      <path d="M4.16667 10H15.8333M10.8333 15L15.8333 10L10.8333 5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </svg>
  );
}

export function ArrowUpRightIcon({ className = "size-[14px] lg:size-[16px]" }: { className?: string }) {
  return (
    <svg aria-hidden className={`shrink-0 ${className}`} fill="none" viewBox="0 0 20 20">
      <path d="M5.83333 14.1667L14.1667 5.83334M14.1667 5.83334H5.83333M14.1667 5.83334V14.1667" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </svg>
  );
}

export function PlusIcon({ className = "size-[14px]" }: { className?: string }) {
  return (
    <svg aria-hidden className={className} fill="none" viewBox="0 0 14 14">
      <path d="M7 1.16667V12.8333M1.16667 7H12.8333" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
    </svg>
  );
}

export function MinusIcon({ className = "size-[14px]" }: { className?: string }) {
  return (
    <svg aria-hidden className={className} fill="none" viewBox="0 0 14 14">
      <path d="M1.16667 7H12.8333" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
    </svg>
  );
}

export function StarIcon({ className = "size-[11px] lg:size-[13px]" }: { className?: string }) {
  return (
    <svg aria-hidden className={`shrink-0 ${className}`} fill="none" viewBox="0 0 13 13">
      <path
        d="M6.5 1.08333L8.07083 4.65833L11.9167 4.98333L8.99167 7.52917L9.9125 11.3208L6.5 9.2625L3.0875 11.3208L4.00833 7.52917L1.08333 4.98333L4.92917 4.65833L6.5 1.08333Z"
        fill="#2F5239"
      />
    </svg>
  );
}
