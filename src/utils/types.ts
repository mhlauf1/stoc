import type { LucideIcon } from "lucide-react";

export type ServiceProps = {
    id: number;
    title: string;
    Icon: LucideIcon;
    description?: string;
    longDesc?: string
    image?: string;
    href?: string;
};


export type IndustryProps = {
    id: number;
    title: string;
    src?: string;
    tags?: string[];
    Icon: LucideIcon;
    badge?: string;
    desc1?: string;
    desc2?: string;
    supportText?: string;
    reverse?: boolean;
    href?: string;
}

export type TeamMemberProps = {
    id: number;
    name: string;
    image: string;
    location: string;
}