/**
 * Single source of truth: DermicIQ TECHNOLOGIES INC. (business plan PDF).
 * Same facts and key messages as the PDF, with wording that reads like a real conversation.
 */

import { siteOrigin } from "@/lib/site";

export const siteContent = {
  brand: {
    name: "DermicIQ Technologies Inc.",
    shortName: "DermicIQ™",
    productName: "DermicIQ™",
    tagline: "Cosmetic ingredients explained for your skin, not for a scoreboard.",
    description:
      "DermicIQ™ is a tool that lines up product ingredients with what you already know about your skin: what irritates you, what you choose to avoid, and what you’ve learned from your own experience. It’s not another blanket “clean” or “toxic” stamp for everyone.",
  },

  meta: {
    defaultTitle: "DermicIQ™ | Ingredient help that’s actually about you",
    defaultDescription:
      "DermicIQ is calm, clear, and built on one question: is this ingredient relevant to me? No universal safety score, no fear-first messaging.",
    keywords:
      "DermicIQ, cosmetic ingredients, INCI, sensitive skin, contact dermatitis, personalization, ingredient scanner, clean beauty, transparency, allergy-aware skincare",
    siteUrl: siteOrigin,
  },

  navigation: {
    links: [
      { label: "Home", href: "/" },
      { label: "How it works", href: "/how-it-works" },
      { label: "About", href: "/about" },
      { label: "For sensitive skin", href: "/for-sensitive-skin" },
    ],
    contactEmail: "hello@DermicIQ.com",
  },

  home: {
    hero: {
      id: "home",
      headline: "Skincare ingredients that match how your skin really behaves",
      subhead:
        "We look at INCI lists the way a thoughtful consult would: against your history, your avoid list, and what you already know stings (or works).",
      eyebrow: "DermicIQ Technologies Inc.",
      /** Prefer responsive WebP/JPEG in HomeHero; kept for reference / fallbacks. */
      imageSrc: "images/hero-1200.jpg",
      imageAlt: "",
      cta: { label: "Set up your profile", href: "https://app.dermiciq.com/" },
    },

    executiveSummary: {
      id: "summary",
      title: "Why we’re building this",
      paragraphs: [
        "You can read a label online in a second, and that’s a real win. The frustrating part is what most apps do next. They still bucket ingredients for everyone: “good,” “bad,” “clean,” or “toxic,” as if every face reacts the same. In clinic and in real life, that’s just not how skin works.",
        "DermicIQ is here to show how a given ingredient lines up with you, not to declare a whole product safe or dangerous for the planet. We weigh what you tell us: sensitivities, deal-breakers, and what you’ve already figured out about your own skin.",
        "If you’ve got fragrance issues, contact dermatitis, eczema, rosacea, acne-prone skin, or a known cosmetic allergy, you know the problem. A single “safety” number can be wrong both ways. A crowd favorite might burn you. Something with a scary name in an app might be completely fine in your routine.",
        "We’d rather you ask, “Is this relevant to me?” than chase a moral score. You decide what counts. We stay educational, not alarmist. The point is to put something useful between the fine print and your face, and to respect that skin is wildly individual.",
      ],
    },

    missionVision: {
      id: "mission",
      title: "What we believe",
      mission:
        "Give people a clear, neutral, personalized read on cosmetic ingredients, without the performance anxiety.",
      coreInsight: "No ingredient is “good” or “bad” for everyone. What matters is how you react.",
      visionLead:
        "We want to sit in the space between a product and your specific skin, so the conversation stays honest and specific.",
      visionBody:
        "We’re not here to stoke fear or sell you a single story about “chemicals.” We want the question to be whether something matters for you, not whether it wins a popularity contest. When we do that well, everyday transparency becomes more honest and far more inclusive.",
      ctaAbout: { label: "Read our full mission and vision", href: "/about" },
    },

    problemSolution: {
      id: "solution",
      title: "What’s not working, and what we do instead",
      problemTitle: "Why one score for everyone doesn’t work",
      problemIntro:
        "Scanners and “clean beauty” lists are everywhere. A lot of them still do the same few things:",
      problemBullets: [
        "One-size-fits-all scores (clean/dirty, safe/unsafe) for every user",
        "The same blacklist, no matter who you are",
        "Risk numbers that ignore the rest of the formula",
        "Language that leans on fear instead of explanation",
      ],
      problemClosing:
        "Many of them read like a final judgment on safety. The actual science (and your own skin) are usually messier than a single number.",
      solutionTitle: "What DermicIQ does",
      solutionLead:
        "We give you context. We don’t hand out one “good” or “bad” stamp and call it a day for the whole world.",
      traditionalQuestion: "Most apps ask: is this ingredient bad?",
      DermicIQQuestion: "We’re built around: is it relevant to your sensitivities?",
      solutionClosing:
        "How an ingredient lands depends on the formula, how much of it is there, how you use the product, and (most of all) on you.",
      ctaSensitive: { label: "Sensitive skin? Here’s a fuller read", href: "/for-sensitive-skin" },
    },

    keyDifferentiators: {
      id: "differentiators",
      title: "What makes DermicIQ different",
      items: [
        {
          kind: "bullets" as const,
          title: "Sensitivity matching, your way",
          bullets: [
            "You name what counts as a sensitivity or a hard no",
            "We don’t force the same default blacklist on every account",
            "You can add detail as you learn more about your skin",
          ],
        },
        {
          kind: "examples" as const,
          title: "We favor context, not a verdict",
          intro: "You’ll read copy that sounds more like the examples below, and less like a courtroom:",
          examples: [
            "“Commonly associated with irritation in some sensitive users”",
            "“Generally well tolerated, but flagged because of your profile”",
            "“In the formula for preservation (or texture), not as the main active”",
          ],
          closing: "Science is nuanced, skin is nuanced, and a label should sound like that too.",
        },
        {
          kind: "bullets" as const,
          title: "Built to teach first",
          bullets: [
            "We say what the ingredient is doing in the product, not just whether the name spooks people",
            "We stick to how formulas actually work, not the trend of the week",
            "We’re not pretending to be your derm. No diagnosis or treatment talk.",
          ],
          footer: "We want you informed, not panicked.",
        },
      ],
    },

    howPreview: {
      id: "skin-analysis",
      title: "How DermicIQ works",
      intro: "Four simple steps, plain language end to end.",
      steps: [
        {
          n: 1,
          title: "Build your profile",
          body: "You tell us what to watch for: known allergens, whole ingredient families to skip, or specific names you want called out.",
        },
        {
          n: 2,
          title: "Read the list as written",
          body: "We parse the list you give us — whether it’s the INCI on the box or a rough list in your own words.",
        },
        {
          n: 3,
          title: "Match to you",
          body: "We compare each line to your profile. You get personal relevance, not a one-size-fits-all risk number.",
        },
        {
          n: 4,
          title: "Show it clearly",
          body: "You see short explanations in normal language, and a clear sense of what to pay attention to for your skin.",
        },
      ],
      disclaimer:
        "DermicIQ does not diagnose conditions or predict what will happen on your skin. It’s here to add clarity so you can decide for yourself.",
      cta: { label: "See the full walkthrough", href: "/how-it-works" },
    },

    targetUsers: {
      id: "users",
      title: "Who we’re for",
      primaryTitle: "We built this with you in mind if…",
      primaryBullets: [
        "Your skin is sensitive or fires back quickly",
        "You already know you have a cosmetic or contact allergy",
        "You’re done with “clean or dirty” apps that don’t know you at all",
      ],
      secondaryTitle: "You might also get a lot out of it if…",
      secondaryBullets: [
        "You like skincare and want explanations that don’t feel like a scare tactic",
        "You’re helping a kid or family member keep track of what they can use",
        "You work in beauty and want copy that doesn’t throw ingredients under the bus for drama",
      ],
    },

    productEthical: {
      id: "scope",
      title: "What the first version does, and what it doesn’t",
      mvpTitle: "What we’re shipping first (MVP)",
      mvpBullets: [
        "Scan a list or look ingredients up by hand",
        "Build a sensitivity profile you control",
        "Flag what’s relevant to that profile, ingredient by ingredient",
        "Short, plain-language explanations of what you’re looking at",
      ],
      exclusionsTitle: "What we’re not doing (on purpose)",
      exclusionsBullets: [
        "No medical diagnosis or treatment plans",
        "No stamp that says a product is “safe” in a regulatory sense",
        "No promise that a product will or won’t work for you",
      ],
      exclusionsClosing:
        "That keeps the product straight with you, easier to trust, and the rules simpler for everyone.",
      ethicalTitle: "How we play by the rules",
      ethicalIntro: "DermicIQ is an educational software tool, full stop.",
      ethicalBullets: [
        "We don’t diagnose, treat, cure, or prevent medical conditions",
        "We don’t certify that a product meets a safety or compliance bar",
        "We work from public ingredient information and what you tell us in your profile",
      ],
      ethicalClosing:
        "We stay in that lane on purpose, so you get fewer vague promises and a clearer line on what you can expect from the app.",
      businessTitle: "Down the line (broad strokes)",
      businessIntro: "Later on, a few models could make sense, such as:",
      businessBullets: [
        "A free tier for basics, with paid access to deeper personalization",
        "Subscription plans for richer profiles, deeper notes, and history you can look back on",
        "Optional industry-facing insights from anonymized, aggregated use (only with clear controls)",
      ],
      businessClosing: "Whatever we ship, privacy and honest data use come first.",
    },

    contact: {
      id: "contact",
      title: "Want to get in touch?",
      body: "We’re a small team and we take sensitive skin seriously. For general questions:",
      email: "hello@DermicIQ.com",
    },
  },

  pages: {
    howItWorks: {
      metaTitle: "How DermicIQ works | DermicIQ™",
      metaDescription:
        "A simple path from your skin details to clear ingredient context. No universal scores, no medical claims, no scare copy.",
      headline: "How DermicIQ Works",
      intro:
        "We line up the skin you are working with, today, to the list on a label. The goal is a read that is about you, not a one score that pretends to fit every face.",
      processSectionTitle: "The four steps",
      steps: [
        {
          n: 1,
          title: "Tell us about your skin",
          body:
            "We start with what you already know: flares, ingredients you avoid, a diagnosis that matters, or a patch-test result. Even “my skin is picky” is useful. The closer this is to the truth, the better the match to your labels later.",
        },
        {
          n: 2,
          title: "We analyze deeply",
          body:
            "You add an INCI list (or type it the way you have it) and we parse and check each line against the profile you built. We aim for a careful, contextual read, not a single up-or-down grade for the whole bottle.",
        },
        {
          n: 3,
          title: "Get real recommendations",
          body:
            "You get down-to-earth takeaways: what is worth a second look for you, what is probably fine, and a short “why” in normal words. It’s meant to help you shop and compare with confidence, not to replace a dermatology visit for diagnosis or treatment.",
        },
        {
          n: 4,
          title: "Your profile learns over time",
          body:
            "Update when something changes, new patch-test results, a new allergy, or a better understanding of a trigger. The profile is yours, so the match stays in step with the skin you have now.",
        },
      ],
      resultsSectionTitle: "What you see in the app",
      resultsSectionBody:
        "The screen is set up for a quick read, not a color wash over a whole back-of-box list. Wording stays steady and low-drama, by design, so the focus stays on the lines that matter to you.",
      disclaimer:
        "We do not diagnose, predict a flare, or replace a clinician when you need a formal plan. We give context so the next choice is a little less guesswork.",
      boundariesSectionTitle: "Not in our lane (by design)",
      boundariesSectionIntro:
        "Narrow on purpose, so the promise stays real. DermicIQ does not:",
      ctaStart: {
        title: "Ready when you are",
        subtext: "When you are ready, continue in the DermicIQ app, no extra steps on this site.",
        label: "Start Free Analysis",
        href: "https://app.dermiciq.com/",
        backLabel: "Back to home",
      },
    },

    about: {
      metaTitle: "About DermicIQ | DermicIQ™",
      metaDescription:
        "A small team building calmer, personal ingredient help for people who are tired of one-size-fits-all scores. Our mission, what we do differently, and a note from us.",
      headline: "About DermicIQ",
      intro:
        "We are DermicIQ Technologies Inc., a company focused on one thing: making cosmetic ingredients easier to read in a way that respects you, your history, and your real skin, not a generic “safe for everyone” stamp.",
      missionTitle: "Our mission, and why we exist",
      missionParagraphs: [
        "DermicIQ exists because you should not have to guess if a long INCI name matters for you based on a color code or a crowd score. Our mission is to show how ingredients line up with the sensitivities, preferences, and life experience you bring to the mirror.",
        "We are not here to be the most dramatic app on the shelf. We are here to be the one that stays calm, explains in plain language, and lets you be the one who decides what to try or skip, with a dermatologist in the picture when you need that level of care.",
      ],
      differentTitle: "What makes us a bit different",
      differentPoints: [
        "Your profile, not a default one. You decide what to watch for, so you are not stuck with a generic blacklist the whole world shares.",
        "We favor context. An ingredient in a product is a story about concentration, role, and you. We try to speak that way, with nuance, instead of a single “good or bad” badge.",
        "We are honest about our limits. DermicIQ educates, it does not replace a visit when you need a diagnosis or a treatment plan. Stating that out loud is part of earning your trust.",
      ],
      teamTitle: "A note from us",
      teamBody:
        "DermicIQ is built by a small, focused team. We care about skin that reacts, skin that is tired of being spoken for, and the gap between a label in your hand and a clear answer. We are early, we are building in public, and we take feedback from real people with real reactions seriously. If you write to us, a human reads it (even if the reply is short).",
      teamFootnote:
        "We are a software company, not a clinic. That keeps the product in the right lane, and the expectations clear, for all of us.",
      cta: {
        title: "Curious to try the flow yourself?",
        subtext:
          "Open the home page and walk through your skin profile, or read how it all fits together first, whichever you prefer.",
        label: "Start Free Analysis",
        href: "/#skin-analysis",
        sublinkLabel: "How it works",
        sublinkHref: "/how-it-works",
        backLabel: "Back to home",
        backHref: "/",
      },
    },

    forSensitiveSkin: {
      metaTitle: "For sensitive skin | DermicIQ™",
      metaDescription:
        "When your skin is reactive, a green check from an app is cold comfort. DermicIQ matches an ingredient list to the history you already carry, without turning your face into a crowd default.",
      headline: "For sensitive skin",
      subhead:
        "If a product ever looked “safe” on paper and your skin still flared, you are not overreacting. Sensitivity is real, and it is personal, and a single score rarely captures that.",
      currentLandscapeTitle: "A pattern we see a lot in apps and lists",
      currentLandscapeIntro:
        "It is easy to find scanners and so-called clean beauty scorecards. Many still do the same few things:",
      currentLandscapeBullets: [
        "The same up-or-down score (clean, dirty, safe) for every user, no matter their patch-test history or contact allergies",
        "A shared “avoid this” list, even when your derm was clear that one chemical name, not a whole class, is the problem",
        "A one-line “risk” that ignores how much of something is in the pot, and what it sits next to in the formula",
        "Language that nudges you to panic about a name, instead of helping you read it alongside your own story",
      ],
      whyFailsTitle: "Why that feels so empty in real life",
      whyFailsBullets: [
        "A red mark for one person can be a non-issue for someone else, and a green check can still miss your own trigger. “Safe for everyone” is a phrase that breaks down quickly on sensitized skin.",
        "A calm label is no guarantee. Allergy and irritation follow your history, not a popularity count.",
        "If the app never really asks for your list of known reactions, you are not getting a personal read. You are getting a crowd default.",
        "Fear-based copy can pile stress on top of a flare. Most people in that position want a calmer, clearer look at the list, not a louder alarm.",
      ],
      whyFailsClosing:
        "If you are juggling eczema, a contact allergy, something your dermatologist named, fragrance, rosacea, or just skin that stings when the air turns dry, the same line comes up. “I read the app, and I still don’t know what to trust for my own face.” A one-number verdict is rarely the thing you carry into the day. It does not match what living with that skin is actually like.",
      gapTitle: "What a lot of people are still looking for",
      gapIntro:
        "The issue is not whether information exists online. It is that a lot of it stops before it is really about your skin. Most of these tools still will not:",
      gapBullets: [
        "Let you name what your own skin tends to do, the ingredients you have been told to avoid, and the things that just always sting for you",
        "Walk a cosmetic list against that story, line by line, instead of one shared blacklist for the whole public",
        "Talk about what an ingredient is actually doing in the formula, without a moral pass/fail that ignores your personal history",
      ],
      gapClosing:
        "The facts may be on the screen, and you can still be standing in the aisle asking: is this a reasonable pick for my own skin tonight, with the history I carry? That is the part we want to do better, without pretense that a phone can replace a clinic visit when you need one.",
      solutionTitle: "What we try to offer instead",
      solutionParagraphs: [
        "DermicIQ isn’t here to stamp any product as good or bad — full stop. It is here to line up a label with the sensitivities, no-gos, and life experience you give us, because that is what changes the answer in your hands.",
        "The question that drives the work is simple. Does this line on the list deserve a second look for the skin you are actually in, not for a trend and not for someone else’s face on the internet?",
        "How a name acts on skin still depends on the full formula, how you use the product, and a lot the screen will never know. We stay in a clear lane — education and context — so the exam, the patch test, and the plan you make with a dermatologist stay in charge of diagnosis and care when you need that.",
      ],
    },
  },

  faq: {
    items: [
      {
        question: "Does DermicIQ diagnose skin conditions?",
        answer:
          "No. DermicIQ doesn’t diagnose, treat, cure, or prevent medical conditions. It’s informational software—here to add context so you can make your own informed choices.",
      },
      {
        question: "Is DermicIQ a “clean beauty” or safety certification tool?",
        answer:
          "No. We don’t certify that a product is “safe,” and we don’t speak for regulators. We also don’t give everyone the same “good” or “bad” stamp. We focus on what’s relevant to the profile you chose.",
      },
      {
        question: "How is DermicIQ different from apps that score every ingredient the same for everyone?",
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
    tagline: "Ingredient help that fits your skin, in plain language, no pile-on.",
    location: "DermicIQ Technologies Inc.",
    copyright: `© ${new Date().getFullYear()} DermicIQ Technologies Inc. All rights reserved.`,
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