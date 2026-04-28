import { Layout, Palette, TrendingUp, ShoppingCart } from "lucide-react";

// Services Data
export const services = [
  {
    id: "web-design",
    title: "Web Design",
    icon: Layout,
    shortDesc: "Beautiful, functional websites that convert visitors into customers.",
    fullDesc: "We create stunning, user-centered websites that not only look great but perform exceptionally. From landing pages to complex web applications, we design with purpose.",
    features: [
      "Custom UI/UX Design",
      "Responsive Development",
      "Performance Optimization",
      "CMS Integration",
      "Ongoing Support",
    ],
  },
  {
    id: "branding",
    title: "Branding",
    icon: Palette,
    shortDesc: "Strategic brand identities that tell your story and stand out.",
    fullDesc: "Build a memorable brand that resonates with your audience. We craft comprehensive brand identities including logos, color systems, typography, and brand guidelines.",
    features: [
      "Logo Design",
      "Brand Strategy",
      "Visual Identity System",
      "Brand Guidelines",
      "Collateral Design",
    ],
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    icon: TrendingUp,
    shortDesc: "Data-driven marketing strategies that grow your business.",
    fullDesc: "Reach your target audience and drive measurable results with our comprehensive digital marketing services. From SEO to paid advertising, we help you grow.",
    features: [
      "SEO Optimization",
      "Content Strategy",
      "Social Media Marketing",
      "PPC Campaigns",
      "Analytics & Reporting",
    ],
  },
  {
    id: "ecommerce",
    title: "Ecommerce",
    icon: ShoppingCart,
    shortDesc: "Online stores that deliver seamless shopping experiences.",
    fullDesc: "Launch and scale your online business with custom ecommerce solutions. We build stores that are easy to manage and optimized for conversions.",
    features: [
      "Custom Store Development",
      "Payment Integration",
      "Inventory Management",
      "Checkout Optimization",
      "Multi-platform Support",
    ],
  },
];

// Portfolio Data
export const portfolioProjects = [
  {
    id: "1",
    slug: "nova-brand-identity",
    title: "Nova Brand Identity",
    client: "Nova Tech",
    category: "Branding",
    excerpt: "A complete brand refresh for a leading tech startup, establishing their position in the market.",
    description: "Nova Tech needed a modern, memorable brand identity to match their innovative products. We delivered a comprehensive visual system that communicates trust and innovation.",
    challenge: "Nova Tech had outgrown their original brand. They needed a visual identity that could scale with their growth while maintaining authenticity.",
    solution: "We developed a bold, minimalist brand system featuring a dynamic logo mark, sophisticated color palette, and flexible design elements.",
    results: "40% increase in brand recognition, successful Series B funding, and consistent brand application across all touchpoints.",
    featuredImage: "/placeholder.svg?height=600&width=800",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
  {
    id: "2",
    slug: "artisan-ecommerce",
    title: "Artisan Marketplace",
    client: "Artisan Collective",
    category: "Ecommerce",
    excerpt: "A premium ecommerce platform for handcrafted goods, built for scale and conversion.",
    description: "Artisan Collective needed an online marketplace that showcased the quality and uniqueness of their handcrafted products while providing a seamless shopping experience.",
    challenge: "Creating an ecommerce experience that felt premium and personal, not generic, while handling complex inventory from multiple artisan partners.",
    solution: "We built a custom Shopify Plus store with advanced filtering, storytelling product pages, and streamlined checkout.",
    results: "150% increase in online sales, 35% higher average order value, and reduced cart abandonment by 25%.",
    featuredImage: "/placeholder.svg?height=600&width=800",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
  {
    id: "3",
    slug: "fintech-dashboard",
    title: "Fintech Dashboard",
    client: "PayFlow",
    category: "Web Design",
    excerpt: "A intuitive financial dashboard that simplifies complex data for everyday users.",
    description: "PayFlow needed a dashboard that could present complex financial data in an accessible, actionable way for their diverse user base.",
    challenge: "Making financial data approachable without oversimplifying. The dashboard needed to serve both casual users and power users.",
    solution: "We designed a modular dashboard with progressive disclosure, clear data visualization, and customizable views.",
    results: "60% reduction in support tickets, 45% increase in daily active users, and featured in Forbes Fintech 50.",
    featuredImage: "/placeholder.svg?height=600&width=800",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
  {
    id: "4",
    slug: "wellness-brand",
    title: "Zenith Wellness",
    client: "Zenith",
    category: "Branding",
    excerpt: "A calming, trustworthy brand identity for a wellness and meditation app.",
    description: "Zenith needed a brand that conveyed tranquility and trust while standing out in the crowded wellness app market.",
    challenge: "Creating a unique visual identity in a space filled with similar aesthetics, while maintaining the calming qualities essential for a wellness brand.",
    solution: "We developed a distinctive brand using organic shapes, a nature-inspired palette, and thoughtful typography that feels both modern and timeless.",
    results: "1M+ app downloads in first quarter, 4.8 star rating, and featured by Apple as App of the Day.",
    featuredImage: "/placeholder.svg?height=600&width=800",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
  {
    id: "5",
    slug: "restaurant-digital",
    title: "Savor Digital Presence",
    client: "Savor Restaurant Group",
    category: "Digital Marketing",
    excerpt: "A comprehensive digital marketing strategy that filled tables and built loyalty.",
    description: "Savor Restaurant Group needed to establish a strong digital presence across their five locations and drive consistent foot traffic.",
    challenge: "Coordinating marketing efforts across multiple locations while maintaining each restaurant's unique character.",
    solution: "We created a unified digital strategy with location-specific content, targeted ads, and an engaging social media presence.",
    results: "200% increase in online reservations, 50K new social followers, and 35% increase in repeat customers.",
    featuredImage: "/placeholder.svg?height=600&width=800",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
  {
    id: "6",
    slug: "fashion-ecommerce",
    title: "Velvet Fashion",
    client: "Velvet",
    category: "Ecommerce",
    excerpt: "A luxury fashion ecommerce experience that mirrors the in-store boutique feel.",
    description: "Velvet wanted their online store to capture the exclusive, personalized experience of their physical boutiques.",
    challenge: "Translating the tactile, high-touch boutique experience to digital while maintaining conversion optimization.",
    solution: "We designed an immersive ecommerce experience with rich product imagery, virtual styling tools, and personalized recommendations.",
    results: "180% increase in online revenue, 40% of sales from personalized recommendations, and 50% increase in international orders.",
    featuredImage: "/placeholder.svg?height=600&width=800",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
];

// Team Members Data
export const teamMembers = [
  {
    id: "1",
    name: "Minh Nguyen",
    role: "Founder & Creative Director",
    avatar: "/placeholder.svg?height=400&width=400",
    bio: "With over 15 years in digital design, Minh leads our creative vision and ensures every project exceeds expectations.",
  },
  {
    id: "2",
    name: "Linh Tran",
    role: "Head of Strategy",
    avatar: "/placeholder.svg?height=400&width=400",
    bio: "Linh brings data-driven insights to every project, helping clients achieve measurable business results.",
  },
  {
    id: "3",
    name: "Duc Pham",
    role: "Lead Developer",
    avatar: "/placeholder.svg?height=400&width=400",
    bio: "Duc transforms designs into performant, accessible websites using cutting-edge technologies.",
  },
  {
    id: "4",
    name: "Hoa Le",
    role: "Senior Designer",
    avatar: "/placeholder.svg?height=400&width=400",
    bio: "Hoa crafts beautiful interfaces that balance aesthetics with usability, creating delightful user experiences.",
  },
];

// Company Stats
export const stats = [
  { label: "Years Experience", value: "8+" },
  { label: "Projects Completed", value: "150+" },
  { label: "Happy Clients", value: "80+" },
  { label: "Team Members", value: "12" },
];

// Process Steps
export const processSteps = [
  {
    step: 1,
    title: "Discovery",
    description: "We dive deep into your business, goals, and target audience to understand what makes you unique.",
  },
  {
    step: 2,
    title: "Strategy",
    description: "We develop a tailored approach that aligns with your objectives and sets clear success metrics.",
  },
  {
    step: 3,
    title: "Design",
    description: "We create compelling visuals and intuitive experiences that engage your audience.",
  },
  {
    step: 4,
    title: "Launch",
    description: "We bring your project to life with meticulous attention to detail and ongoing optimization.",
  },
];
