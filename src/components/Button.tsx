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
      bg-[#18598b] text-white
      font-medium
      px-8 md:px-10 py-4 rounded-full text-md
      hover:bg-[#59809f]
      cursor-pointer duration-300
      tracking-tight
      text-center
      w-full
    "
  >
    <span>{children}</span>
  </button>
);

export const WhiteButton: React.FC<ButtonProps> = ({ children, ...props }) => (
  <button
    {...props}
    className="
      
      bg-white text-[#07171E]
    font-medium  
      px-8 md:px-10 py-4 rounded-full text-md
      hover:bg-neutral-100
      cursor-pointer transition tracking-tight
      text-center
      w-full
    "
  >
    <span>{children}</span>
  </button>
);

export const GhostButton: React.FC<ButtonProps> = ({ children, ...props }) => (
  <button
    {...props}
    className="
        
        border border-black/30
         text-neutral-800
    font-medium
      px-8 md:px-10 py-4 rounded-full text-md
        hover:bg-white/10
        cursor-pointer transition  tracking-tight
      text-center
      w-full

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
        
        border border-white/20
        bg-[#16203a] text-white
        font-medium
        px-6 md:px-8 py-4 rounded-full text-md md:text-lg
        hover:bg-[#36415d] tracking-tight
        cursor-pointer transition
      text-center
      w-full

      "
  >
    <span>{children}</span>
  </button>
);
