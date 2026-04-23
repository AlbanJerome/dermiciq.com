/**
 * Single source of truth: DERMICIQ TECHNOLOGIES INC. (business plan PDF).
 * Same facts and key messages as the PDF — wording tuned to sound human, warm, and conversational.
 */

import { siteOrigin } from "@/lib/site";

export const siteContent = {
  brand: {
    name: "Dermiciq Technologies Inc.",
    shortName: "Dermiciq™",
    productName: "Dermiciq™",
    tagline: "Cosmetic ingredients, explained for your skin—not for a scorecard.",
    description:
      "Dermiciq™ is a personalized cosmetic-ingredient platform. It helps you see how ingredients line up with what you already know about your skin—your sensitivities, what you prefer to skip, and what you’ve actually lived through—not a single “clean” or “toxic” label for everyone.",
  },

  meta: {
    defaultTitle: "Dermiciq™ | Ingredients that make sense for your skin",
    defaultDescription:
      "Skip the one-size-fits-all scores. Dermiciq™ is neutral, educational, and built around one question: Is this ingredient relevant to me?",
    keywords:
      "Dermiciq, cosmetic ingredients, INCI, sensitive skin, contact dermatitis, personalization, ingredient scanner, clean beauty, transparency, allergy-aware skincare",
    siteUrl: siteOrigin,
  },

  navigation: {
    links: [
      { label: "Home", href: "/" },
      { label: "How it works", href: "/how-it-works" },
      { label: "About", href: "/about" },
      { label: "For sensitive skin", href: "/for-sensitive-skin" },
    ],
    contactEmail: "hello@dermiciq.com",
  },

  home: {
    hero: {
      id: "home",
      headline: "Is this ingredient actually right for me?",
      subhead:
        "Dermiciq™ finally looks at cosmetic ingredients through the lens of your own skin — your sensitivities, your preferences, and your real experiences. No more one-size-fits-all “clean” or “toxic” scores.",
      eyebrow: "Dermiciq Technologies Inc.",
      imageSrc:
        "https://images.unsplash.com/photo-1631729432532-d1cfada35afe?auto=format&fit=crop&w=2000&q=80",
      /** Decorative full-bleed hero; headline + subhead carry meaning—empty alt avoids browsers showing alt if the image fails to load. */
      imageAlt: "",
    },

    executiveSummary: {
      id: "summary",
      title: "Why we’re building this",
      paragraphs: [
        "Cosmetics today come with a lot of ingredient transparency. You can scan, search, and read a label in seconds. That part is wonderful. What’s broken is what happens next: most tools still sort ingredients into universal buckets—“good,” “bad,” “clean,” or “toxic”—as if every skin type reacted the same way. Biology doesn’t work like that.",
        "Dermiciq™ is a personalized cosmetic-ingredient platform. We’re not here to hand down a verdict on a whole bottle for everyone. We’re here to help you see how an ingredient lines up with you—your sensitivities, what you prefer to avoid, and what you’ve already learned about your own skin.",
        "If you deal with fragrance sensitivity, contact dermatitis, eczema, rosacea, acne-prone skin, or a known cosmetic allergy, you already know the problem. A single “safety” score can miss the mark in both directions. Something people tolerate easily might still sting you. Something that sounds scary on an app might be fine for your routine.",
        "We care less about moral labels and more about a practical question: Is this ingredient relevant to me? You set what matters. We keep the tone calm and educational. The goal is simple: help you stand between a product label and your real skin—with room for all the diversity skin actually has.",
      ],
    },

    missionVision: {
      id: "mission",
      title: "What we believe",
      mission:
        "To empower individuals with clear, neutral, and personalized understanding of cosmetic ingredients.",
      coreInsight: "Ingredients are not universally good or bad—skin responses are personal.",
      visionLead:
        "Dermiciq aims to become a neutral, trustworthy bridge between cosmetic products and individual skin diversity.",
      visionBody:
        "By rejecting fear-based narratives and embracing personalization, Dermiciq seeks to redefine how consumers understand ingredients—shifting the conversation from “good versus bad” to informed, individual relevance. In doing so, Dermiciq supports a more ethical, educated, and inclusive future for cosmetic transparency.",
      ctaAbout: { label: "Read our full mission & vision", href: "/about" },
    },

    problemSolution: {
      id: "solution",
      title: "What’s broken today — and what we’re doing instead",
      problemTitle: "Why one score for everyone doesn’t work",
      problemIntro:
        "Ingredient scanners and “clean beauty” lists are everywhere now. Most still share the same habits:",
      problemBullets: [
        "Universal scoring systems (e.g., clean/dirty, safe/unsafe)",
        "Ingredient blacklists applied equally to all users",
        "Simplified risk ratings detached from formulation context",
        "Alarmist or fear-based language",
      ],
      problemClosing:
        "A lot of them sound like the last word on safety. Cosmetic science—and your skin—are more complicated than that.",
      solutionTitle: "What Dermiciq does",
      solutionLead: "Dermiciq gives you ingredient context—not a single “good” or “bad” stamp for the whole world.",
      traditionalQuestion: "Most apps ask: Is this ingredient bad?",
      dermiciqQuestion: "Dermiciq asks: Is this ingredient relevant to your sensitivities?",
      solutionClosing:
        "What an ingredient does depends on the formula, how much is there, how you use it—and, most of all, on you.",
      ctaSensitive: { label: "Sensitive skin? Here’s the fuller picture", href: "/for-sensitive-skin" },
    },

    keyDifferentiators: {
      id: "differentiators",
      title: "What makes Dermiciq different",
      items: [
        {
          kind: "bullets" as const,
          title: "Personal sensitivity matching",
          bullets: [
            "You choose what counts as a sensitivity or a preference",
            "No one default blacklist for every account",
            "Your profile can grow as you learn more about your skin",
          ],
        },
        {
          kind: "examples" as const,
          title: "Context over judgment",
          intro: "We steer clear of absolute language. You’ll see phrasing more like:",
          examples: [
            "“Commonly associated with irritation in some sensitive users”",
            "“Generally well tolerated, but flagged due to your profile settings”",
            "“Functional ingredient used primarily for preservation or texture”",
          ],
          closing: "Science has nuance. Skin has nuance. Your labels should, too.",
        },
        {
          kind: "bullets" as const,
          title: "Education-first design",
          bullets: [
            "We explain what an ingredient is doing in a formula—not just whether it “sounds” scary",
            "We lean on formulation science, not buzzwords",
            "We don’t play doctor: no medical claims, diagnoses, or treatment advice",
          ],
          footer: "We’re here to inform—not to set your hair on fire.",
        },
      ],
    },

    howPreview: {
      id: "how-preview",
      title: "How Dermiciq works",
      intro: "Four simple beats, start to finish. The wording stays plain the whole way through.",
      steps: [
        {
          n: 1,
          title: "Personal profile creation",
          body: "You tell us what to watch for—known allergens, whole families of ingredients you’d rather skip, or specific names you want flagged.",
        },
        {
          n: 2,
          title: "Ingredient parsing",
          body: "We read ingredient lists the way they’re written: standard INCI names, or everyday words when that’s what you have.",
        },
        {
          n: 3,
          title: "Relevance matching",
          body: "We line each ingredient up with your profile. You’re looking for personal relevance—not a universal risk score.",
        },
        {
          n: 4,
          title: "Neutral presentation",
          body: "You get context, a clear sense of what matters for you, and short explanations in normal language.",
        },
      ],
      disclaimer:
        "Dermiciq does not diagnose conditions or predict outcomes; it provides clarity and context to support informed decision-making.",
      cta: { label: "See the full walkthrough", href: "/how-it-works" },
    },

    targetUsers: {
      id: "users",
      title: "Who we’re for",
      primaryTitle: "You might be a primary user if…",
      primaryBullets: [
        "Your skin is sensitive or quick to react",
        "You already know you have a cosmetic or contact allergy",
        "You’re tired of binary “clean beauty” apps that don’t feel like they know you",
      ],
      secondaryTitle: "You might also love Dermiciq if…",
      secondaryBullets: [
        "You’re a skincare nerd who wants calmer, clearer explanations",
        "You’re a parent keeping track of someone else’s sensitivities",
        "You work in beauty and want neutral language for ingredients",
      ],
    },

    productEthical: {
      id: "scope",
      title: "What the first version covers — and what it won’t",
      mvpTitle: "Where we’re starting (MVP)",
      mvpBullets: [
        "Ingredient list scanning or manual lookup",
        "User sensitivity profile creation",
        "Personalized ingredient relevance flagging",
        "Plain-language ingredient explanations",
      ],
      exclusionsTitle: "What we’re not building (on purpose)",
      exclusionsBullets: [
        "No medical diagnosis or treatment recommendations",
        "No product safety certification",
        "No guarantees regarding suitability or outcomes",
      ],
      exclusionsClosing: "That keeps the product honest, easier to trust, and simpler on the regulatory side.",
      ethicalTitle: "How we think about ethics & rules",
      ethicalIntro: "Dermiciq is an informational software platform.",
      ethicalBullets: [
        "It does not diagnose, treat, cure, or prevent medical conditions",
        "It does not certify product safety or regulatory compliance",
        "It relies on publicly available ingredient data and user-defined inputs",
      ],
      ethicalClosing:
        "We stay inside those lines on purpose—less legal fog for you, more room to be upfront about what we can and can’t promise.",
      businessTitle: "How we might grow later (high level)",
      businessIntro: "Down the road, a few paths could make sense:",
      businessBullets: [
        "Freemium access: basic ingredient analysis free, advanced personalization paid",
        "Subscription tiers: enhanced profiles, deeper explanations, historical tracking",
        "Optional B2B insights: anonymized, aggregated trends for industry research",
      ],
      businessClosing: "Whatever we pick, privacy and ethical data use come first.",
    },

    contact: {
      id: "contact",
      title: "Want to say hello?",
      body: "We’re a small team with a big respect for sensitive skin. General questions welcome:",
      email: "hello@dermiciq.com",
    },
  },

  pages: {
    howItWorks: {
      metaTitle: "How Dermiciq works | Dermiciq™",
      metaDescription:
        "Profile, parsing, matching, and calm explanations—without diagnoses or fear-based scores.",
      headline: "How Dermiciq works",
      intro:
        "Dermiciq gives you ingredient context—not a thumbs-up or thumbs-down for the whole planet. Here’s the flow we’re building toward.",
      stepsSectionTitle: "The four steps",
      neutralSectionTitle: "How we talk about results",
      neutralSectionBody:
        "You’ll see context, a clear sense of what matters for your profile, and short explanations in everyday words—not a universal “toxic” or “clean” verdict.",
      boundariesSectionTitle: "Hard boundaries (for clarity)",
      boundariesSectionIntro:
        "The first version of Dermiciq is intentionally narrow. That protects you and keeps expectations honest. Specifically, Dermiciq does not:",
    },

    about: {
      metaTitle: "About Dermiciq | Mission & vision",
      metaDescription:
        "Our mission, the insight that started it all, and where we hope everyday transparency can go.",
      headline: "About Dermiciq Technologies Inc.",
      sections: [
        {
          title: "Mission",
          body: "To empower individuals with clear, neutral, and personalized understanding of cosmetic ingredients.",
        },
        {
          title: "Core insight",
          body: "Ingredients are not universally good or bad—skin responses are personal.",
        },
        {
          title: "Vision",
          paragraphs: [
            "Dermiciq aims to become a neutral, trustworthy bridge between cosmetic products and individual skin diversity.",
            "By rejecting fear-based narratives and embracing personalization, Dermiciq seeks to redefine how consumers understand ingredients—shifting the conversation from “good versus bad” to informed, individual relevance.",
            "In doing so, Dermiciq supports a more ethical, educated, and inclusive future for cosmetic transparency.",
          ],
        },
      ],
    },

    forSensitiveSkin: {
      metaTitle: "For sensitive skin | Dermiciq™",
      metaDescription:
        "Why universal scores miss sensitive skin—and how “relevant to me” fills the gap.",
      headline: "For sensitive skin",
      subhead:
        "If “safe” and “toxic” labels have ever felt wrong for your face, you’re not imagining it. Skin really is individual.",
      currentLandscapeTitle: "What the landscape looks like right now",
      currentLandscapeIntro:
        "Ingredient scanners and “clean beauty” databases are easy to find. A lot of them still share the same habits:",
      currentLandscapeBullets: [
        "Universal scoring systems (e.g., clean/dirty, safe/unsafe)",
        "Ingredient blacklists applied equally to all users",
        "Simplified risk ratings detached from formulation context",
        "Alarmist or fear-based language",
      ],
      whyFailsTitle: "Where that approach breaks down",
      whyFailsBullets: [
        "An ingredient labeled “bad” may be harmless or beneficial for many users",
        "Ingredients labeled “safe” can still trigger irritation or allergic reactions",
        "Users with known sensitivities receive no meaningful personalization",
        "Consumers are encouraged to fear ingredients rather than understand them",
      ],
      whyFailsClosing:
        "If you’re juggling eczema, dermatitis, fragrance sensitivity, or contact allergies, that leaves you with very little that feels actionable. It also doesn’t match how people actually live with their skin.",
      gapTitle: "The gap we keep hearing about",
      gapIntro: "Even with more transparency than ever, most mainstream consumer tools still don’t:",
      gapBullets: [
        "Let you define your own ingredient sensitivities",
        "Match cosmetic ingredients against a personal sensitivity profile",
        "Explain ingredients in neutral language—without moral or marketing spin",
      ],
      gapClosing:
        "So millions of people are left guessing—with information that’s technically “there,” but not really about them.",
      solutionTitle: "What Dermiciq does differently",
      solutionParagraphs: [
        "Dermiciq gives you ingredient context—not ingredient verdicts.",
        "Traditional apps ask: Is this ingredient bad? Dermiciq asks: Is this ingredient relevant to your sensitivities?",
        "That matters because impact depends on the formula, the concentration, how you use it—and, most of all, on you.",
      ],
    },
  },

  faq: {
    items: [
      {
        question: "Does Dermiciq diagnose skin conditions?",
        answer:
          "No. Dermiciq doesn’t diagnose, treat, cure, or prevent medical conditions. It’s informational software—here to add context so you can make your own informed choices.",
      },
      {
        question: "Is Dermiciq a “clean beauty” or safety certification tool?",
        answer:
          "No. We don’t certify that a product is “safe,” and we don’t speak for regulators. We also don’t give everyone the same “good” or “bad” stamp. We focus on what’s relevant to the profile you chose.",
      },
      {
        question: "How is Dermiciq different from apps that score every ingredient the same for everyone?",
        answer:
          "You define what matters to your skin. We match ingredients to that—not to a default blacklist for every user. The tone stays educational, not alarmist.",
      },
    ],
  },

  notFound: {
    headline: "Page not found",
    description: "That page may have moved, or the link might be a little off.",
    homeButton: "Back to home",
    backButton: "Go back",
  },

  footer: {
    tagline: "Calm, personalized ingredient help—in plain language, without the pile-on.",
    location: "Dermiciq Technologies Inc.",
    copyright: `© ${new Date().getFullYear()} Dermiciq Technologies Inc. All rights reserved.`,
    columns: [
      {
        title: "Product",
        links: [
          { label: "How it works", href: "/how-it-works" },
          { label: "For sensitive skin", href: "/for-sensitive-skin" },
          { label: "Home overview", href: "/", hash: "summary" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "About & mission", href: "/about" },
          { label: "Contact", href: "/", hash: "contact" },
        ],
      },
      {
        title: "Legal",
        links: [
          { label: "Privacy", href: "/privacy" },
          { label: "Terms", href: "/terms" },
          { label: "Cookies", href: "/cookies" },
        ],
      },
    ],
  },
} as const;
