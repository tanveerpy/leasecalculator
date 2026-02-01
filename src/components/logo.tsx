export function Logo({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M3 21h18" />
            <path d="M5 21V7l8-4 8 4v14" />
            <path d="M9 10a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v10" />
            <path d="M12 12v3" />
            <path d="M12 18v.01" />
        </svg>
    );
}
