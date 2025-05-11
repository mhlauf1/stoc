import React, { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const PrimaryButton: React.FC<ButtonProps> = ({
  children,
  ...props
}) => (
  <button
    {...props}
    className="
      flex flex-row gap-4 items-center
      border border-white/20
      bg-[#07171E] text-white
      font-medium
      px-8 py-4 rounded-full text-lg
      hover:bg-neutral-700
      cursor-pointer transition
    "
  >
    <span>{children}</span>
  </button>
);

export const WhiteButton: React.FC<ButtonProps> = ({ children, ...props }) => (
  <button
    {...props}
    className="
      flex flex-row gap-4 items-center
      bg-white text-[#07171E]
      font-medium
      px-8 py-4 rounded-full text-lg
      hover:bg-neutral-100
      cursor-pointer transition
    "
  >
    <span>{children}</span>
  </button>
);

export const GhostButton: React.FC<ButtonProps> = ({ children, ...props }) => (
  <button
    {...props}
    className="
        flex flex-row gap-4 items-center
        border border-white/50
         text-white
        font-medium
        px-8 py-4 rounded-full text-lg
        hover:bg-white/10
        cursor-pointer transition
      "
  >
    <span>{children}</span>
  </button>
);

export const PrimaryButtonBlue: React.FC<ButtonProps> = ({
  children,
  ...props
}) => (
  <button
    {...props}
    className="
        flex flex-row gap-4 items-center
        border border-white/20
        bg-[#16203a] text-white
        font-medium
        px-8 py-4 rounded-full text-lg
        hover:bg-[#36415d]
        cursor-pointer transition
      "
  >
    <span>{children}</span>
  </button>
);
