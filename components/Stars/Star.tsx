// components/StarIcon.js
import React from "react";

const StarIcon = ({ filled }: { filled: boolean }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={filled ? "gold" : "none"}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 14.09 8.37 20 9.27 15.54 14.16 17.64 20 12 17.77 6.36 20 8.46 14.16 4 9.27 9.91 8.37 12 2" />
    </svg>
  );
};

export default StarIcon;
