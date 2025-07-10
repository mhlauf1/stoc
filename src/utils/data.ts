import { ServiceProps, IndustryProps, TeamMemberProps, ValueProps, ServicesPageProps } from "@/utils/types";
import {
    TrendingUp,
    Handshake,
    Rocket,
    PieChart,
    Briefcase,
    BriefcaseMedical,
    Leaf,
    Music,
    Package as Box,
    ShoppingCart,
    Tv2,
    Shield,
    Users,
    Star,
    Zap,
} from "lucide-react";
import TASNode from "@/components/services/nodes/TASNode";
import CDSNode from "@/components/services/nodes/CDSNode";

export const servicesData: ServiceProps[] = [
    {
        id: 0,
        title: "Transaction Advisory Services",
        Icon: TrendingUp,
        description:
            "Conduct comprehensive financial and operational due diligence to maximize deal value and mitigate risks.",
        longDesc: "Whether buying, building, or exiting an investment, every transaction possesses a certain degree of risk. STOC Advisory’s integrated due diligence approach helps clients mitigate risk and maximize the value of a transaction. We apply deep industry expertise to an integrated financial and operational due diligence approach, effectively advising clients of key deal considerations to achieve each opportunity’s full potential. Through a robust process, we provide proven results unanimous to each transaction to maximize value.",
        image: "/tas-1.jpeg",
        href: "/services/transaction-advisory-services",
    },
    {
        id: 1,
        title: "Corporate Development Support",
        Icon: Handshake,
        description:
            "Identify and execute strategic acquisitions, divestitures, and integrations for sustained growth.",
        longDesc: "With extensive industry experience and expertise, the Corporate Advisory team assists clients in the identification of opportunities resulting in maximum shareholder value through comprehensive research and financial analysis. STOC’s Corporate Advisors offer timely and accurate advice through robust analysis to enable its clients to make critical business decision that position the company for future success.",
        image: "/cds-1.jpeg",
        href: "/services/corporate-development-support",
    },
    {
        id: 2,
        title: "Growth Enablement Services",
        Icon: Rocket,
        description:
            "Design and implement targeted initiatives that optimize operations and accelerate market expansion.",
        longDesc:
            "Design and implement targeted initiatives that optimize operations and accelerate market expansion.",
        image: "/ges-1.jpeg",
        href: "/services/growth-enablement-services",
    },
    {
        id: 3,
        title: "CFO Advisory",
        Icon: PieChart,
        description:
            "Enhance reporting, forecasting, and capital strategies to reinforce financial leadership and performance.",
        longDesc: "Leveraged with our depth in accounting and finance, our team of experts provides interim solutions to better serve early-stage and middle-market corporations. We advise our clients through an array of services to elevate financial strategy, accelerate sustainable growth, optimize financial performance, and maximize value. Our services include financial reporting, financial planning and analysis, budgeting/forecasting, and board/investor management with the distinction of excellence.",
        image: "/cfo-1.jpeg",
        href: "/services/cfo-advisory"
    },
];

export const valuesData: ValueProps[] = [
    {
        id: 0,
        title: "Integrity",
        Icon: Shield,
        description:
            "Upholding the highest ethical standards.",
    },
    {
        id: 1,
        title: "Collaboration",
        Icon: Users,
        description:
            "Partnering closely with management teams.",
    },
    {
        id: 2,
        title: "Excellence",
        Icon: Star,
        description:
            "Delivering rigorous, data-driven analysis.",
    },
    {
        id: 3,
        title: "Innovation",
        Icon: Zap,
        description:
            "Adapting to evolving market dynamics.",
    },
]

export const coreServicesData: ValueProps[] = [
    {
        id: 0,
        title: "Financial Reporting",
        Icon: TrendingUp,
        description:
            "Accurate, timely financial statements you can trust.",
    },
    {
        id: 1,
        title: "Budgeting & Forecasting",
        Icon: TrendingUp,
        description:
            "Structured budgets and dynamic forecasts for clarity.",
    },
    {
        id: 2,
        title: "FP&A & Analytics",
        Icon: TrendingUp,
        description:
            "Data-driven planning and forecasting to guide decisions.",
    },
]

export const tasData: ValueProps[] = [
    {
        id: 0,
        title: "Target Screening & Valuation",
        Icon: TrendingUp,
        description:
            "Identify and manage deal risks before they materialize.",
    },
    {
        id: 1,
        title: "Financial & Operational",
        Icon: TrendingUp,
        description:
            "Deep-dive analyses of financial statements, contracts, and processes.",
    },
    {
        id: 2,
        title: "Value Maximization",
        Icon: TrendingUp,
        description:
            "Actionable insights to enhance deal structure and post-close performance.",
    },
]



export const industryData: IndustryProps[] = [
    {
        id: 0,
        title: "Business Services",
        Icon: Briefcase,
        src: "/about-close.jpg",
        tags: ["Performance improvement", "Value creation", "Financial analysis", "Revenue optimization"],
        badge: "Business & Professional Services",
        desc1: "The business services industry is experiencing rapid growth and disruption, and the fight for talent and differentiation is highly competitive. To truly stand out, businesses must embrace change and embark on frequent initiatives to best serve their clients’ evolving needs.",
        desc2: "STOC has the understanding and expertise to analyze the revenue streams, costs, and the critical key performance indicators of what makes a services business profitable. We use this familiarity to assist transportation and logistics companies, advertising and marketing specialists, professional services firms, and other business service organizations with a broad range of financial and operational projects to optimize performance and value creation.",
        supportText: "Driving profitability and performance across diverse service-based businesses",
        href: "/industries/business-services"
    },

    {
        id: 1,
        title: "Cannabis",
        src: "/cannabis-hero.png",
        Icon: Leaf,
        tags: ["Valuation and banking support", "Acquisition disputes", "Regulatory compliance"],
        badge: "Cannabis Industry Expertise",
        supportText: "Strategic support across the legal cannabis sector from compliance to valuation",
        desc1: "As the number of states legalizing cannabis for medical and recreational use increases, businesses involved in the legal cultivation, processing, and distribution of cannabis, as well as those providing ancillary services, face an array of business issues, including: accounting, acquisition disputes, anti-money laundering, banking, branding, IP, cybersecurity, taxation advisory, regulatory compliance, and valuation.",
        desc2: "Our firm understands these complex business issues. STOC has been active in all sectors multi-faceted legal cannabis industry. We are uniquely qualified to help clients achieve their business goals in this rapidly growing industry.",
        href: "/industries/cannabis"
    },
    {
        id: 2,
        title: "Healthcare",
        src: "/building-bg.jpg",
        Icon: BriefcaseMedical,
        tags: ["Operational optimization", "Regulatory compliance", "Revenue management"],
        badge: "Healthcare Industry Expertise",
        supportText: "600+ completed healthcare engagements with proven transaction outcomes",
        desc1: "The healthcare industry is changing fast, as complex and uncertain regulatory requirements, an aging population requiring increasingly expensive clinical and drug therapies, looming cybersecurity threats, ever-evolving payor models, and the rise of telemedicine and other technologies continue to disrupt the US healthcare system. As medical providers, insurers, and patients each adjust to the shifting marketplace; the industry must adapt to the current pace of change or risk getting left behind. Many stakeholders are staying relevant by facing these forces head-on through new clinical and operating models, aggressive revenue management and cost control, mergers and acquisitions, horizontal and vertical integration, and partnership strategies.",
        desc2: "We partner with companies across the healthcare industry—hospitals and healthcare systems, delivery providers, senior care facilities, medical suppliers, payors and health plans, and more—to identify opportunities and implement solutions to optimize both clinical and non-clinical operations. We understand healthcare organizations’ evolving challenges and drive positive transformation to enable businesses to continue delivering the best care possible while growing the bottom line. Our focus on healthcare’s operational complexities, regulatory requirements, reimbursement methodologies, and transaction services allows us to bring proven and practical capabilities to each engagement.",
        href: "/industries/healthcare"
    },
    {
        id: 3,
        title: "Hospitality & Entertainment",
        src: "/hospitality.png",
        Icon: Music,
        tags: ["Mergers & acquisitions", "Debt restructuring", "Customer acquisition & retention"],
        supportText: "Guiding hospitality and entertainment brands through growth, financing, and digital evolution",
        badge: "Hospitality & Entertainment Industry Expertise",
        desc1: "Shifting global dynamics and a post-COVID environment define a shifting landscape for tourism and business travel. As a result, the hospitality and entertainment industry is forced to adapt and evolve for future growth. Marked by increased mergers and acquisitions activity and a high rate of new property development, industry players must meet these growing headwinds with innovative financing, debt restructuring, and partnership agreements. Meanwhile, competition among properties, brands, and service offerings and today’s economic volatility present a constant challenge for hospitality organizations, resulting in the rapid evolution of marketing efforts, digital strategies, and operational initiatives aimed at increasing customer acquisition and retention.",
        href: "/industries/hospitality-entertainment",
    },
    {
        id: 4,
        title: "Manufacturing & Distribution",
        src: "/stoc-notebook.png",
        Icon: Box,
        supportText: "Driving operational success across global manufacturing and distribution networks",
        tags: ["Supply chain optimization", "Operational strategy", "Global market insights"],
        badge: "Manufacturing & Distribution Industry Expertise",
        desc1: "The manufacturing and distribution sectors face rising production costs, supply chain transformations, and global market pressures. To remain competitive and build long-term success, companies must continuously adapt their strategies and operations.",
        desc2: "STOC partners with manufacturing and distribution firms worldwide, bringing financial and operational insights to support decision-making today and prepare for tomorrow. With a focus on collaboration and value creation, we help businesses navigate complexity and drive innovation.",
        href: "/industries/manufacturing-distribution",
    },
    {
        id: 5,
        title: "Retail & Consumer Products",
        src: "/cds-1.jpeg",
        Icon: ShoppingCart,
        tags: ["Consumer behavior insights", "Operational efficiency", "E-commerce strategy"],
        supportText: "Empowering retailers to thrive through digital transformation and operational excellence",
        badge: "Retail Industry Expertise",
        desc1: "Retail is evolving at an unprecedented pace, driven by technology adoption, shifts in consumer behavior, and the acceleration of e-commerce. Success today requires embracing innovation while prioritizing sustainability and customer experience.",
        desc2: "STOC helps retailers — from department stores to e-commerce platforms — adapt to these changes, optimize operations, and unlock growth opportunities. With experience across all segments, we bring insights that drive performance and future-proof strategies.",
        href: "/industries/retail-consumer-products",
    },
    {
        id: 6,
        title: "Technology, Media, & Telecommunications",
        src: "/tas-1.jpeg",
        Icon: Tv2,
        tags: ["Consumer behavior insights", "Operational efficiency", "E-commerce strategy"],
        supportText: "Empowering retailers to thrive through digital transformation and operational excellence",
        badge: "Retail Industry Expertise",
        desc1: "Retail is evolving at an unprecedented pace, driven by technology adoption, shifts in consumer behavior, and the acceleration of e-commerce. Success today requires embracing innovation while prioritizing sustainability and customer experience.",
        desc2: "STOC helps retailers — from department stores to e-commerce platforms — adapt to these changes, optimize operations, and unlock growth opportunities. With experience across all segments, we bring insights that drive performance and future-proof strategies.",
        href: "/industries/technology-media-telecommunications",
    },
]


export const teamMeberData: TeamMemberProps[] = [
    {
        id: 0,
        name: "Andrew Swihart",
        image: "/Andrew_Swihart.jpg",
        location: "Dallas, TX",
        title: "Co-Founder | Managing Partner"
    },
    {
        id: 1,
        name: "Michael O’Heir",
        image: "/Michael_OHeir1.jpg",
        location: "Baltimore, MD",
        title: "Co-Founder | Managing Partner"
    },
    {
        id: 3,
        name: "Sam Luetgers",
        image: "/Sam_Luetgers.jpg",
        location: "Tampa, FL",
        title: "Manager | TAS"
    },
    {
        id: 4,
        name: "Anne Gill",
        image: "/Anne_Federico.jpg",
        location: "Baltimore, MD",
        title: "Manager | TAS"
    },
    {
        id: 5,
        name: "Sean Egan",
        image: "/Sean_Egan.jpg",
        location: "Minneapolis, MN",
        title: "Manager | TAS"
    },
    {
        id: 6,
        name: "Matt Hottman",
        image: "/Matt_Hottman.jpg",
        location: "Baltimore, MD",
        title: "Manager | TAS"
    },
    {
        id: 7,
        name: "Saqib Saddiqui",
        image: "/Saqib_Saddiqui.jpg",
        location: "New York, NY",
        title: "Senior Associate | TAS"
    },
    {
        id: 8,
        name: "Ryan Earp",
        image: "/ryan_earp.jpg",
        location: "Minneapolis, MN",
        title: "Senior Associate | TAS"
    },
    {
        id: 9,
        name: "Thomson Thamsir",
        image: "/Thomson_Thamsir.JPG",
        location: "Minneapolis, MN",
        title: "Senior Associate | TAS"
    },
    {
        id: 10,
        name: "John Gliniecki",
        image: "/JohnGliniecki_Headshot.jpg",
        location: "Minneapolis, MN",
        title: "Senior Associate | TAS"
    },
    {
        id: 11,
        name: "Gunnar Waldt",
        image: "/Gunnar_Waldt.jpg",
        location: "Baltimore, MD",
        title: "VP Business Development"

    },
    {
        id: 12,
        name: "Lucius Burch",
        image: "/Lucius_Burch.jpg",
        location: "Nashville, TN",
        title: "VP Business Development"
    },

]



export const servicesPageData: ServicesPageProps[] = [
    {
        id: 0,
        title: "Guiding Your Critical Transactions",
        src: "/tas-services.jpeg",
        badge: "Transaction Advisory Services (TAS)",
        desc: "Comprehensive support throughout underwriting assistance, sell-side advisory, buy- and sell-side M&A financial due diligence, M&A transactions, divestitures, and capital raises.",
        href: "/services/transaction-advisory-services",
        Component: TASNode,
    },

    {
        id: 1,
        title: "Building Your Corporate Growth Engine",
        src: "/cds-services.png",
        badge: "Corporate Development Support (CDS)",
        desc: "Strategic frameworks to evaluate, plan, and execute expansion initiatives.",
        href: "/services/corporate-development-support",
        Component: CDSNode,

    },
    {
        id: 2,
        title: "Scaling for Sustainable Success",
        src: "/saqib_live.png",
        badge: "Growth Enablement Services (GES)",
        desc: "Targeted strategies and tools to drive revenue growth and operational efficiency.",
        href: "/services/growth-enablement-services",
        Component: TASNode,

    },
    {
        id: 3,
        title: "Interim CFO Solutions for Growth & Performance",
        src: "/cfo-services.jpeg",
        badge: "CFO Advisory",
        desc: "Financial leadership to optimize operations and maximize organizational value.",
        href: "/services/cfo-advisory",
        Component: TASNode,

    },
]