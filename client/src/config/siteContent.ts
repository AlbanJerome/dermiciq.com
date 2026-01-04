export const siteContent = {
  brand: {
    name: "Dermiciq",
    tagline: "Personal Relevance Intelligence",
    description: "The first skincare intelligence platform that understands your unique biology.",
  },

  meta: {
    defaultTitle: "Dermiciq Technologies | Personalized Skincare Intelligence",
    defaultDescription: "Stop guessing. Start knowing. Dermiciq replaces binary 'safe vs. toxic' scoring with context-aware, personalized ingredient intelligence for your unique skin.",
    keywords: "skincare analysis, ingredient checker, sensitive skin, eczema, rosacea, contact dermatitis, Health Canada 2025, personalized skincare, ingredient intelligence",
  },

  navigation: {
    links: [
      { label: "Home", href: "/" },
      { label: "The Science", href: "/science" },
      { label: "Sovereign Neutrality", href: "/neutrality" },
      { label: "Partners", href: "/partners" },
      { label: "Contact", href: "/contact" },
    ],
    cta: { label: "Login", href: "/login" },
  },

  hero: {
    headline: "Stop Guessing. Start Knowing.",
    subheadline: "The first skincare intelligence platform that understands your unique biology—not just universal scores.",
    primaryCta: { label: "Get Started", href: "/login" },
    secondaryCta: { label: "Learn How It Works", href: "/science" },
    trustBadge: "Sovereign Neutral Technology",
  },

  problem: {
    headline: "Binary Apps Are Failing You",
    subheadline: "Current ingredient checkers use universal 'safe vs. toxic' scores that ignore your unique biology.",
    points: [
      {
        title: "The Misleading 'Safe' Label",
        description: "Ingredients broadly categorized as 'safe' can trigger severe reactions in sensitive populations.",
      },
      {
        title: "The Cost of False Positives",
        description: "Ingredients labeled as 'bad' may be perfectly suitable—or even beneficial—for your skin.",
      },
      {
        title: "No Personalization",
        description: "For millions managing eczema, rosacea, or contact dermatitis, current tools offer zero meaningful personalization.",
      },
    ],
  },

  pillars: {
    headline: "The Dynamic Sensitivity Protocol",
    subheadline: "A proprietary intelligence layer that shifts the burden of chemical cross-referencing from you to sophisticated algorithms.",
    items: [
      {
        title: "Dynamic Sensitivity Protocol",
        description: "Context-aware analysis that considers your unique biological profile, not just universal hazard ratings.",
        icon: "Dna",
      },
      {
        title: "Hierarchical Derivative Mapping",
        description: "Identifies hidden molecular triggers by cross-referencing thousands of chemical synonyms and derivatives.",
        icon: "Network",
      },
      {
        title: "Context-Aware Risk Assessment",
        description: "Calculates real-world exposure risk based on concentration, product type, and your personal sensitivity threshold.",
        icon: "ShieldCheck",
      },
      {
        title: "Sovereign Neutrality",
        description: "Zero 'pay-to-play' brand certifications. Pure science. Absolute consumer trust.",
        icon: "Scale",
      },
      {
        title: "Regulatory Aligned",
        description: "Built to translate Health Canada's 2025 fragrance allergen disclosure requirements into actionable insights.",
        icon: "FileCheck",
      },
      {
        title: "Continuous Learning",
        description: "Your feedback refines your personal sensitivity model, making recommendations smarter over time.",
        icon: "Brain",
      },
    ],
  },

  regulatory: {
    badge: "The 2026 Shift",
    headline: "Health Canada's New Era of Transparency",
    subheadline: "Starting 2025-2026, detailed fragrance allergen disclosure becomes mandatory. Dermiciq is built to translate this complex chemical data into personalized health insights.",
    timeline: [
      { year: "2024", label: "Framework Announced", status: "complete" },
      { year: "2025", label: "Phase 1 Implementation", status: "current" },
      { year: "2026", label: "Full Disclosure Required", status: "upcoming" },
    ],
    cta: { label: "Prepare Your Organization", href: "/partners" },
  },

  stats: {
    items: [
      { value: 44.6, suffix: "%", label: "of North Americans report sensitive skin" },
      { value: 90, suffix: "%", label: "of occupational skin diseases are contact dermatitis" },
      { value: 500, prefix: "$", suffix: "B", label: "global beauty market operating on flawed paradigms" },
    ],
  },

  science: {
    meta: {
      title: "The Science | Dermiciq Technologies",
      description: "Learn how Hierarchical Derivative Mapping (HDM) identifies hidden ingredient triggers that binary apps miss.",
    },
    hero: {
      headline: "Hierarchical Derivative Mapping",
      subheadline: "The technology behind personalized ingredient intelligence",
      badge: "The Technology",
    },
    cta: {
      headline: "Experience the Difference",
      subheadline: "See how Dermiciq's context-aware intelligence works for your unique skin.",
      buttonLabel: "Get Started",
    },
    howItWorks: {
      headline: "How HDM Works",
      steps: [
        {
          number: 1,
          title: "Ingredient Parsing",
          description: "Our engine scans INCI lists and identifies every ingredient, including hidden derivatives and synonyms.",
        },
        {
          number: 2,
          title: "Derivative Tree Construction",
          description: "Each ingredient is mapped to its molecular family tree—coconut derivatives, for example, include over 50 hidden surfactants.",
        },
        {
          number: 3,
          title: "Profile Cross-Reference",
          description: "Your personal sensitivity profile is matched against the derivative tree to identify potential triggers.",
        },
        {
          number: 4,
          title: "Context-Aware Scoring",
          description: "Risk is calculated based on concentration, product type (rinse-off vs. leave-on), and your historical reaction data.",
        },
      ],
    },
    comparison: {
      headline: "Binary Apps vs. Dermiciq",
      dermiciq: [
        "Context-aware risk assessment",
        "Personal sensitivity profiles",
        "Hidden derivative detection",
        "Dose-response calculations",
        "Regulatory-aligned intelligence",
      ],
      competitors: [
        "Universal 'safe vs. toxic' scores",
        "One-size-fits-all ratings",
        "Surface-level ingredient matching",
        "Hazard-based fear marketing",
        "Outdated databases",
      ],
    },
  },

  neutrality: {
    meta: {
      title: "Sovereign Neutrality | Dermiciq Technologies",
      description: "Our commitment to scientific integrity: zero pay-to-play certifications, pure objective analysis.",
    },
    hero: {
      headline: "Sovereign Neutrality",
      subheadline: "Zero brand payments. Pure science.",
      badge: "Our Commitment",
    },
    badge: {
      title: "Sovereign Neutral",
      subtitle: "Certified Independent Intelligence",
    },
    quote: "We refuse to sell certifications, endorse products, or accept payment from any brand. Your trust is our only currency.",
    quoteAttribution: "— Dermiciq Founding Principle",
    commitmentsHeadline: "Our Commitments",
    cta: {
      headline: "Trust Built on Transparency",
      subheadline: "Join the movement toward truly objective skincare intelligence.",
      buttonLabel: "Get Started",
    },
    commitments: [
      {
        title: "No Pay-to-Play Certifications",
        description: "Brands cannot purchase favorable ratings or 'clean' badges from Dermiciq.",
      },
      {
        title: "Open Methodology",
        description: "Our scoring algorithms and data sources are documented and available for scientific review.",
      },
      {
        title: "User-First Data Policy",
        description: "Your sensitivity data is never sold to third parties or used for targeted advertising.",
      },
      {
        title: "Independent Research",
        description: "Our team collaborates with dermatologists and researchers without corporate sponsorship influence.",
      },
      {
        title: "Continuous Audit",
        description: "Regular third-party audits ensure our neutrality commitments are maintained.",
      },
    ],
  },

  partners: {
    meta: {
      title: "Partners & B2B | Dermiciq Technologies",
      description: "Licensing opportunities for clinics, retailers, and healthcare providers seeking personalized ingredient intelligence.",
    },
    hero: {
      headline: "Partner With Dermiciq",
      subheadline: "Bring personalized ingredient intelligence to your patients and customers.",
      badge: "B2B Solutions",
    },
    statsHeadline: "Market Opportunity",
    logosSection: {
      headline: "Trusted by Leading Healthcare Providers",
      placeholder: "Partner",
      comingSoon: "Partner logos coming soon",
    },
    cta: {
      headline: "Ready to Partner?",
      subheadline: "Contact us to learn how Dermiciq can enhance your patient experience.",
    },
    ctaButtonLabel: "Contact Sales",
    benefits: [
      {
        title: "Clinical Integration",
        description: "Embed Dermiciq intelligence into your patient consultation workflow.",
        icon: "Stethoscope",
      },
      {
        title: "White-Label Solutions",
        description: "Offer Dermiciq-powered recommendations under your own brand.",
        icon: "Palette",
      },
      {
        title: "Data Licensing",
        description: "Access our derivative mapping database for product development and reformulation.",
        icon: "Database",
      },
    ],
    stats: [
      { value: 88, suffix: "%", label: "Gross margin on data licensing" },
      { value: 18.5, suffix: "%", label: "CAGR in target market" },
      { value: 1.5, prefix: "$", suffix: "B", label: "SAM by 2025" },
    ],
  },

  contact: {
    meta: {
      title: "Contact Us | Dermiciq Technologies",
      description: "Get in touch with the Dermiciq team for support, partnership inquiries, or general questions.",
    },
    hero: {
      headline: "Get In Touch",
      subheadline: "Questions about Dermiciq? We're here to help.",
      badge: "Contact Us",
    },
    successState: {
      headline: "Message Sent!",
      sendAnother: "Send Another Message",
    },
    submitting: "Sending...",
    toasts: {
      successTitle: "Message sent!",
      errorTitle: "Error",
    },
    infoCards: {
      email: "Email",
      location: "Location",
      hours: "Hours",
    },
    form: {
      fields: {
        name: { label: "Full Name", placeholder: "Your name" },
        email: { label: "Work Email", placeholder: "you@company.com" },
        organization: { label: "Organization", placeholder: "Your organization (optional)" },
        message: { label: "Message", placeholder: "How can we help you?" },
      },
      submit: "Send Message",
      success: "Thank you! Your message has been sent successfully.",
      error: "Something went wrong. Please try again.",
    },
    info: {
      email: "hello@dermiciq.com",
      location: "Toronto, Canada",
      hours: "Monday - Friday, 9AM - 5PM EST",
    },
  },

  login: {
    meta: {
      title: "Login | Dermiciq Technologies",
      description: "Sign in to access your personalized Dermiciq dashboard.",
    },
    headline: "Welcome Back",
    subheadline: "Sign in to access your personalized ingredient intelligence.",
    googleButton: "Continue with Google",
    divider: "or continue with email",
    comingSoon: "Full email authentication coming soon.",
  },

  dashboard: {
    meta: {
      title: "Dashboard | Dermiciq Technologies",
      description: "Your personalized Dermiciq dashboard.",
    },
    headline: "Welcome to Dermiciq",
    comingSoon: {
      title: "Dashboard Coming Soon",
      description: "We're building something incredible. Your personalized ingredient intelligence dashboard is under development.",
    },
  },

  faq: {
    headline: "Frequently Asked Questions",
    items: [
      {
        question: "How is Dermiciq different from apps like Yuka or Think Dirty?",
        answer: "Legacy apps use universal 'hazard-based' scoring that treats all users identically. Dermiciq's Dynamic Sensitivity Protocol creates a personalized risk profile based on your unique biology, skin conditions, and reaction history.",
      },
      {
        question: "What is Hierarchical Derivative Mapping?",
        answer: "HDM is our proprietary technology that identifies hidden ingredient triggers. For example, if you're sensitive to coconut, HDM will flag over 50 coconut-derived surfactants that other apps miss entirely.",
      },
      {
        question: "How does Dermiciq stay neutral?",
        answer: "We refuse all 'pay-to-play' brand certifications. Our revenue comes from B2B data licensing and consumer subscriptions—never from brands seeking favorable ratings.",
      },
      {
        question: "Is my data sold to third parties?",
        answer: "Never. Your sensitivity data is encrypted and used solely to improve your personal recommendations. We do not sell user data or use it for advertising.",
      },
      {
        question: "What is the Health Canada 2025 regulation?",
        answer: "Health Canada's Self-Care Framework mandates detailed fragrance allergen disclosure starting 2025-2026. Dermiciq is built to translate this complex chemical data into personalized health insights.",
      },
    ],
  },

  cta: {
    headline: "Ready to Stop Guessing?",
    subheadline: "Join thousands who have discovered the power of personalized ingredient intelligence.",
    buttonLabel: "Get Started",
  },

  notFound: {
    headline: "Page Not Found",
    description: "The page you're looking for doesn't exist or has been moved.",
    homeButton: "Go Home",
    backButton: "Go Back",
  },

  footer: {
    tagline: "Personal Relevance Intelligence for Your Skin",
    columns: [
      {
        title: "Product",
        links: [
          { label: "The Science", href: "/science" },
          { label: "Sovereign Neutrality", href: "/neutrality" },
          { label: "Partners", href: "/partners" },
        ],
      },
      {
        title: "Legal",
        links: [
          { label: "Privacy Policy", href: "#" },
          { label: "Terms of Service", href: "#" },
          { label: "Cookie Policy", href: "#" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "About Us", href: "#" },
          { label: "Contact", href: "/contact" },
          { label: "Careers", href: "#" },
        ],
      },
    ],
    copyright: "© 2024 Dermiciq Technologies. All rights reserved.",
    location: "Toronto, Canada",
  },
};

export type SiteContent = typeof siteContent;
