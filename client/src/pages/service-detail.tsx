import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  CheckCircle,
  Shield,
  Phone,
  Mail,
  User,
  Activity,
  Car,
  Home as HomeIcon,
  Briefcase,
  Plane,
  Zap,
  HelpCircle,
  Users,
  HardHat, // Ensure this is imported
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Assets
import healthImg from "@assets/generated_images/health_insurance_concept.png";
import motorImg from "@assets/generated_images/motor_insurance_concept.png";
import homeImg from "@assets/generated_images/home_insurance_concept.png";
import businessImg from "@assets/generated_images/business_insurance_concept.png";
import lifeImg from "@assets/generated_images/life_insurance_concept.png";
import travelImg from "@assets/generated_images/travel_insurance_concept.png";

import termImg from "@assets/generated_images/term_insurance_concept.png";
import accidentImg from "@assets/generated_images/personal_accident_insurance_concept.png";
import petImg from "@assets/generated_images/pet_insurance_concept.png";

import doImg from "@assets/generated_images/directors_and_officers_insurance_concept.png";
import piImg from "@assets/generated_images/professional_indemnity_insurance_concept.png";
import cglImg from "@assets/generated_images/commercial_general_liability_insurance_concept.png";
import cyberImg from "@assets/generated_images/cyber_risk_insurance_concept.png";
import fireImg from "@assets/generated_images/fire_insurance_concept.png";
import marineImg from "@assets/generated_images/marine_cargo_insurance_concept.png";

import liabilityCatImg from "@assets/generated_images/liability_insurance_category_concept.png";
import propertyCatImg from "@assets/generated_images/property_and_assets_insurance_category_concept.png";
import engineeringCatImg from "@assets/generated_images/engineering_insurance_category_concept.png";
import manpowerCatImg from "@assets/generated_images/manpower_and_employee_insurance_category_concept.png";
// Reusing marine image for category as it fits well
const marineCatImg = marineImg;

// Data Configuration
const servicesData: Record<string, any> = {
  // --- Category Pages ---
  "liability-insurance": {
    title: "Liability Insurance",
    subtitle: "Complete Legal & Financial Protection",
    description:
      "Liability insurance provides your business with protection against claims resulting from injuries and damage to people and/or property. It covers legal costs and payouts for which the insured party would be found liable.",
    image: liabilityCatImg,
    icon: Shield,
    whyMatters: {
      title: "Why Liability Insurance?",
      highlights: [
        {
          title: "Legal Costs",
          desc: "Covers expensive defense fees.",
          icon: "⚖️",
        },
        {
          title: "Settlements",
          desc: "Pays for judgments and settlements.",
          icon: "💰",
        },
        {
          title: "Peace of Mind",
          desc: "Operate without fear of litigation.",
          icon: "🕊️",
        },
      ],
      summary: "Don't let a lawsuit bankrupt your business.",
    },
    faqs: [
      {
        q: "What types of liability are covered?",
        a: "We cover General Liability, Professional Indemnity, D&O, Product Liability, and more.",
      },
    ],
  },
  "property-assets-insurance": {
    title: "Property & Assets Insurance",
    subtitle: "Safeguard Your Physical Capital",
    description:
      "Property and Assets Insurance protects your physical business assets—buildings, equipment, inventory, and furniture—against loss or damage from fire, theft, natural disasters, and other risks.",
    image: propertyCatImg,
    icon: HomeIcon,
    whyMatters: {
      title: "Why Property Insurance?",
      highlights: [
        {
          title: "Asset Replacement",
          desc: "Replaces damaged equipment/buildings.",
          icon: "🏗️",
        },
        {
          title: "Business Continuity",
          desc: "Helps you recover quickly after a disaster.",
          icon: "🔄",
        },
        {
          title: "Comprehensive Cover",
          desc: "Fire, theft, and breakdown protection.",
          icon: "🔥",
        },
      ],
      summary: "Protect the foundation of your business.",
    },
    faqs: [
      {
        q: "Does it cover machinery?",
        a: "Yes, specific policies like Machinery Breakdown cover operational equipment.",
      },
    ],
  },
  "engineering-sector-insurance": {
    title: "Engineering Insurance",
    subtitle: "Risks in Construction & Engineering",
    description:
      "Specialized insurance solutions for the construction and engineering sectors. Covers projects, contractors, plant and machinery, and third-party liabilities arising during construction/erection.",
    image: engineeringCatImg,
    icon: HardHat,
    whyMatters: {
      title: "Why Engineering Insurance?",
      highlights: [
        {
          title: "Project All-Risk",
          desc: "Covers the entire project lifecycle.",
          icon: "🚧",
        },
        {
          title: "Equipment Cover",
          desc: "Protects expensive construction machinery.",
          icon: "🚜",
        },
        {
          title: "Liability",
          desc: "Third-party injury/damage at site.",
          icon: "⚠️",
        },
      ],
      summary: "Build safely, we've got you covered.",
    },
    faqs: [],
  },
  "marine-insurance": {
    title: "Marine Insurance",
    subtitle: "Protection for Goods in Transit",
    description:
      "Marine Insurance covers the loss or damage of ships, cargo, terminals, and any transport or cargo by which property is transferred, acquired, or held between the points of origin and final destination.",
    image: marineCatImg,
    icon: Plane,
    whyMatters: {
      title: "Why Marine Insurance?",
      highlights: [
        {
          title: "Transit Damage",
          desc: "Covers goods against damage during travel.",
          icon: "🚢",
        },
        {
          title: "Global Scope",
          desc: "International and domestic transit coverage.",
          icon: "🌍",
        },
        {
          title: "Peace of Mind",
          desc: "Secure your supply chain logistics.",
          icon: "📦",
        },
      ],
      summary: "Safe journey for your valuable cargo.",
    },
    faqs: [],
  },
  "manpower-employee-insurance": {
    title: "Manpower & Employee Insurance",
    subtitle: "Care for Your Most Valuable Asset",
    description:
      "Employee benefits insurance helps you attract and retain talent by providing health, accident, and life coverage. It also ensures statutory compliance like Workmen's Compensation.",
    image: manpowerCatImg,
    icon: Users,
    whyMatters: {
      title: "Why Employee Insurance?",
      highlights: [
        {
          title: "Talent Retention",
          desc: "Employees value health & safety benefits.",
          icon: "🤝",
        },
        {
          title: "Compliance",
          desc: "Meet legal requirements (e.g., WC Act).",
          icon: "📜",
        },
        {
          title: "Productivity",
          desc: "Healthy employees are productive employees.",
          icon: "📈",
        },
      ],
      summary: "Invest in your people.",
    },
    faqs: [],
  },
  "directors-and-officers-insurance": {
    title: "Directors & Officers Liability",
    subtitle: "Protect Your Leadership",
    description:
      "Directors and Officers (D&O) Liability Insurance protects the personal assets of corporate directors and officers, and their spouses, in the event they are personally sued by employees, vendors, competitors, investors, customers, or other parties, for actual or alleged wrongful acts in managing a company.",
    image: doImg,
    icon: Shield,
    whyMatters: {
      title: "Why D&O Insurance Matters",
      highlights: [
        {
          title: "Personal Asset Protection",
          desc: "Safeguards personal wealth of directors against legal claims.",
          icon: "💼",
        },
        {
          title: "Legal Defense Costs",
          desc: "Covers expensive legal fees for defense against lawsuits.",
          icon: "⚖️",
        },
        {
          title: "Regulatory Investigations",
          desc: "Coverage for costs arising from official investigations.",
          icon: "mj",
        },
      ],
      summary: "Essential protection for corporate leadership.",
    },
    faqs: [
      {
        q: "Who needs D&O Insurance?",
        a: "Any company with a board of directors or advisory committee, whether public, private, or non-profit.",
      },
      {
        q: "Does it cover criminal acts?",
        a: "No, D&O insurance typically excludes coverage for criminal fraud or illegal profits.",
      },
    ],
  },
  "professional-indemnity-insurance": {
    title: "Professional Indemnity",
    subtitle: "Coverage for Professional Advice",
    description:
      "Professional Indemnity (PI) Insurance protects professionals such as architects, doctors, accountants, and consultants against claims of negligence or breach of duty arising from the services they provide.",
    image: piImg,
    icon: Briefcase,
    whyMatters: {
      title: "Why PI Insurance Matters",
      highlights: [
        {
          title: "Negligence Claims",
          desc: "Covers claims due to errors, omissions, or negligence.",
          icon: "📝",
        },
        {
          title: "Reputation Protection",
          desc: "Helps manage and mitigate damage to professional reputation.",
          icon: "🌟",
        },
        {
          title: "Legal Defense",
          desc: "Pays for legal costs to defend against claims.",
          icon: "⚖️",
        },
      ],
      summary: "Secure your professional practice against errors.",
    },
    faqs: [
      {
        q: "Is PI Insurance mandatory?",
        a: "It is often mandatory for certain professions like doctors, lawyers, and insurance brokers.",
      },
      {
        q: "What is the retroactive date?",
        a: "It is the date from which your coverage begins. Claims arising from acts before this date are not covered.",
      },
    ],
  },
  "commercial-general-liability": {
    title: "Commercial General Liability",
    subtitle: "Comprehensive Third-Party Protection",
    description:
      "Commercial General Liability (CGL) insurance protects your business against claims of bodily injury or property damage caused to third parties by your business operations, products, or premises.",
    image: cglImg,
    icon: Users,
    whyMatters: {
      title: "Why CGL Insurance Matters",
      highlights: [
        {
          title: "Bodily Injury",
          desc: "Covers medical costs if a third party is injured on your premises.",
          icon: "🤕",
        },
        {
          title: "Property Damage",
          desc: "Compensates for damage to third-party property.",
          icon: "🏚️",
        },
        {
          title: "Advertising Injury",
          desc: "Covers claims of libel, slander, or copyright infringement.",
          icon: "📢",
        },
      ],
      summary: "Broad protection for your business liabilities.",
    },
    faqs: [
      {
        q: "Does CGL cover employee injuries?",
        a: "No, employee injuries are typically covered under Workmen Compensation Insurance.",
      },
    ],
  },
  "cyber-risk-insurance": {
    title: "Cyber Risk Insurance",
    subtitle: "Defend Against Digital Threats",
    description:
      "In the digital age, Cyber Risk Insurance is crucial. It covers financial losses resulting from data breaches, cyber-attacks, ransomware, and other cyber incidents.",
    image: cyberImg,
    icon: Zap,
    whyMatters: {
      title: "Why Cyber Insurance Matters",
      highlights: [
        {
          title: "Data Breach Costs",
          desc: "Covers notification costs, credit monitoring, and forensics.",
          icon: "💻",
        },
        {
          title: "Ransomware",
          desc: "Coverage for ransom payments and data restoration.",
          icon: "🔒",
        },
        {
          title: "Business Interruption",
          desc: "Compensates for income loss during system downtime.",
          icon: "📉",
        },
      ],
      summary: "Stay secure in a connected world.",
    },
    faqs: [
      {
        q: "Is Cyber Insurance only for IT companies?",
        a: "No, any business that handles sensitive customer data should have cyber insurance.",
      },
    ],
  },
  "fire-insurance": {
    title: "Fire Insurance",
    subtitle: "Protect Your Physical Assets",
    description:
      "Standard Fire and Special Perils Policy covers your property against loss or damage due to fire, lightning, explosion, floods, storms, and other specified perils.",
    image: fireImg,
    icon: Zap, // Using Zap (Flame concept)
    whyMatters: {
      title: "Why Fire Insurance Matters",
      highlights: [
        {
          title: "Building & Contents",
          desc: "Covers the physical structure and goods inside.",
          icon: "🏢",
        },
        {
          title: "Natural Calamities",
          desc: "Protection against floods, storms, and earthquakes.",
          icon: "🌊",
        },
        {
          title: "Man-made Perils",
          desc: "Covers riots, strikes, and malicious damage.",
          icon: "🔥",
        },
      ],
      summary: "Solid protection for your physical investments.",
    },
    faqs: [
      {
        q: "Does it cover theft?",
        a: "Standard fire policies do not cover burglary/theft unless added as an extension or separate policy.",
      },
    ],
  },
  "marine-cargo-insurance": {
    title: "Marine Cargo Insurance",
    subtitle: "Secure Your Goods in Transit",
    description:
      "Marine Cargo Insurance covers loss or damage to goods during transit by sea, air, road, or rail. It is essential for importers, exporters, and logistics companies.",
    image: marineImg,
    icon: Plane,
    whyMatters: {
      title: "Why Marine Cargo Insurance Matters",
      highlights: [
        {
          title: "Transit Risks",
          desc: "Covers accidents, sinking, or derailment during transport.",
          icon: "🚢",
        },
        {
          title: "Loading/Unloading",
          desc: "Protection against damage during handling.",
          icon: "📦",
        },
        {
          title: "Customs Duty",
          desc: "Covers duty payable on damaged goods.",
          icon: "🛃",
        },
      ],
      summary: "Safe passage for your valuable cargo.",
    },
    faqs: [
      {
        q: "What is 'All Risk' coverage?",
        a: "Institute Cargo Clauses (A) provides the widest coverage, often termed as 'All Risk', subject to exclusions.",
      },
    ],
  },
  "workmen-compensation": {
    title: "Workmen Compensation",
    subtitle: "Employee Safety Net",
    description:
      "Workmen Compensation Insurance provides coverage for medical expenses and wage replacement to employees injured in the course of employment.",
    image: businessImg,
    icon: Users,
    whyMatters: {
      title: "Why Workmen Compensation Matters",
      highlights: [
        {
          title: "Legal Compliance",
          desc: "Mandatory for many businesses under the Workmen's Compensation Act.",
          icon: "⚖️",
        },
        {
          title: "Medical Expenses",
          desc: "Covers hospitalization costs for work-related injuries.",
          icon: "🏥",
        },
        {
          title: "Disability Benefits",
          desc: "Compensation for temporary or permanent disability.",
          icon: "🤕",
        },
      ],
      summary: "Take care of those who work for you.",
    },
    faqs: [
      {
        q: "Who is covered?",
        a: "All employees, including contract workers, can be covered under this policy.",
      },
    ],
  },
  "product-liability-insurance": {
    title: "Product Liability Insurance",
    subtitle: "Consumer Safety Protection",
    description:
      "Product Liability Insurance covers the cost of compensating claims for personal injury or property damage arising from products you have sold or supplied.",
    image: cglImg, // Reusing CGL image
    icon: Shield,
    whyMatters: {
      title: "Why Product Liability Matters",
      highlights: [
        {
          title: "Defective Products",
          desc: "Coverage against claims due to manufacturing defects.",
          icon: "⚠️",
        },
        {
          title: "Safety Failures",
          desc: "Protection if your product causes harm to a user.",
          icon: "🛡️",
        },
        {
          title: "Legal Defense",
          desc: "Covers legal costs for defending liability claims.",
          icon: "⚖️",
        },
      ],
      summary: "Build trust with your products safely.",
    },
    faqs: [
      {
        q: "Is it necessary for retailers?",
        a: "Yes, even retailers can be held liable if they sell defective products.",
      },
    ],
  },
  "property-insurance": {
    title: "Property Insurance",
    subtitle: "Comprehensive Asset Coverage",
    description:
      "Property insurance provides financial reimbursement to the owner or renter of a structure and its contents in the event of damage or theft.",
    image: fireImg, // Reusing Fire image
    icon: HomeIcon,
    whyMatters: {
      title: "Why Property Insurance Matters",
      highlights: [
        {
          title: "Asset Protection",
          desc: "Covers buildings, machinery, and stock.",
          icon: "🏭",
        },
        {
          title: "Risk Mitigation",
          desc: "Reduces financial impact of unforeseen disasters.",
          icon: "📉",
        },
      ],
      summary: "Total protection for your business assets.",
    },
    faqs: [],
  },
  "machinery-breakdown": {
    title: "Machinery Breakdown",
    subtitle: "Operational Continuity",
    description:
      "This policy covers financial loss incurred due to the sudden and accidental breakdown of machinery.",
    image: businessImg,
    icon: Zap,
    whyMatters: {
      title: "Why Machinery Breakdown Matters",
      highlights: [
        {
          title: "Repair Costs",
          desc: "Covers cost of parts and labor for repairs.",
          icon: "🔧",
        },
        {
          title: "Internal Damage",
          desc: "Covers electrical and mechanical breakdowns.",
          icon: "⚙️",
        },
      ],
      summary: "Keep your operations running smoothly.",
    },
    faqs: [],
  },
  "engineering-insurance": {
    title: "Engineering Insurance",
    subtitle: "Project & Equipment Safety",
    description:
      "Contractors All Risk (CAR) and Erection All Risk (EAR) policies provide comprehensive protection for construction projects and engineering risks.",
    image: businessImg,
    icon: HardHat, // Assuming HardHat is available or use generic
    whyMatters: {
      title: "Why Engineering Insurance Matters",
      highlights: [
        {
          title: "Project Cover",
          desc: "Covers civil works during construction.",
          icon: "🏗️",
        },
        {
          title: "Third Party",
          desc: "Includes third-party liability at the project site.",
          icon: "🚧",
        },
      ],
      summary: "Build with confidence.",
    },
    faqs: [],
  },
  "group-health-insurance": {
    title: "Group Health Insurance",
    subtitle: "Employee Wellness",
    description:
      "Provide comprehensive health coverage to your employees and their families.",
    image: healthImg,
    icon: Activity,
    whyMatters: {
      title: "Why Group Health Matters",
      highlights: [
        {
          title: "Employee Retention",
          desc: "A key benefit to attract and retain talent.",
          icon: "🤝",
        },
        {
          title: "Wellness",
          desc: "Ensures workforce health and productivity.",
          icon: "❤️",
        },
      ],
      summary: "Invest in your team's health.",
    },
    faqs: [],
  },
  "health-insurance": {
    title: "Health Insurance",
    subtitle: "Comprehensive Health Coverage for You & Your Family",
    description:
      "Safeguard your health and finances with our trusted health insurance plans. From individual coverage to family floaters, we ensure you get the best treatment without financial stress.",
    image: healthImg,
    icon: Activity,
    whyMatters: {
      title: "Why Health Insurance Matters",
      highlights: [
        {
          title: "Hospitalization",
          desc: "Covers hospitalization, surgeries, and day-care treatments.",
          icon: "🏥",
        },
        {
          title: "Family Plans",
          desc: "Individual, family floater, and senior citizen plans.",
          icon: "👨‍👩‍👧",
        },
        {
          title: "Cashless",
          desc: "Cashless treatment at 10,000+ hospitals across India.",
          icon: "💳",
        },
      ],
      summary:
        "Safeguard your health and finances – explore affordable health insurance plans!",
    },
    faqs: [
      {
        q: "What is Health Insurance?",
        a: "Health insurance covers medical expenses that arise due to an illness. These expenses could be related to hospitalization costs, cost of medicines or doctor consultation fees.",
      },
      {
        q: "Key Features of Health Insurance Plans",
        a: "Key features include cashless hospitalization, pre and post-hospitalization coverage, ambulance charges, no claim bonus, and tax benefits under section 80D.",
      },
      {
        q: "Who Should Buy Health Insurance?",
        a: "Everyone should buy health insurance. With rising medical costs, a sudden illness can drain your savings. It is advisable to buy it early when you are young and healthy.",
      },
      {
        q: "What is Cashless Hospitalization?",
        a: "In cashless hospitalization, the insurance company settles the bill directly with the hospital network, so you don't have to pay upfront.",
      },
      {
        q: "Can I Add My Family Members Under One Plan?",
        a: "Yes, you can opt for a Family Floater plan which covers your spouse, children, and dependent parents under a single sum insured.",
      },
      {
        q: "Do I Get Tax Benefits?",
        a: "Yes, premiums paid for health insurance are eligible for tax deductions under Section 80D of the Income Tax Act.",
      },
    ],
  },
  "motor-insurance": {
    title: "Motor Insurance",
    subtitle: "Protect Your Ride on Every Journey",
    description:
      "Drive with confidence knowing you're protected. Our motor insurance plans offer comprehensive coverage for accidents, theft, third-party liability, and more.",
    image: motorImg,
    icon: Car,
    whyMatters: {
      title: "Why Motor Insurance Matters",
      highlights: [
        {
          title: "Accident Cover",
          desc: "Protection against damages from accidents, fire, and theft.",
          icon: "🚗",
        },
        {
          title: "Third-Party Liability",
          desc: "Covers legal liability for injury or property damage to third parties.",
          icon: "⚖️",
        },
        {
          title: "Cashless Garages",
          desc: "Access to a wide network of cashless garages for hassle-free repairs.",
          icon: "🔧",
        },
      ],
      summary:
        "Don't let an accident put the brakes on your life – get insured today!",
    },
    faqs: [
      {
        q: "Is Motor Insurance Mandatory?",
        a: "Yes, under the Motor Vehicles Act, Third-Party Liability insurance is mandatory for all vehicles in India.",
      },
      {
        q: "What is Zero Depreciation Cover?",
        a: "Zero Depreciation is an add-on that covers the full cost of replacing parts without deducting depreciation value during a claim.",
      },
      {
        q: "What does Comprehensive Insurance Cover?",
        a: "It covers damages to your own vehicle (Own Damage) as well as Third-Party Liability.",
      },
    ],
  },
  "home-insurance": {
    title: "Home Insurance",
    subtitle: "Secure Your Sanctuary",
    description:
      "Your home is your most valuable asset. Protect it from unforeseen events like fire, burglary, and natural calamities with our comprehensive home insurance.",
    image: homeImg,
    icon: HomeIcon,
    whyMatters: {
      title: "Why Home Insurance Matters",
      highlights: [
        {
          title: "Structure Cover",
          desc: "Protection for the building structure against fire, floods, and earthquakes.",
          icon: "🏠",
        },
        {
          title: "Content Cover",
          desc: "Covers valuables, electronics, and furniture against theft and damage.",
          icon: "📺",
        },
        {
          title: "Burglary Protection",
          desc: "Financial safety net in case of break-ins and theft.",
          icon: "🔓",
        },
      ],
      summary: "Peace of mind starts at home. Secure yours today.",
    },
    faqs: [
      {
        q: "What does Home Insurance cover?",
        a: "It covers the structure of your home and its contents against risks like fire, theft, flood, earthquake, etc.",
      },
      {
        q: "Are my jewelry and electronics covered?",
        a: "Yes, you can opt for cover for valuable contents like jewelry and electronics under specific plans.",
      },
    ],
  },
  "business-insurance": {
    title: "Business Insurance",
    subtitle: "Safeguard Your Enterprise",
    description:
      "Comprehensive protection for your business assets, liabilities, and employees. Ensure business continuity with our tailored commercial insurance solutions.",
    image: businessImg,
    icon: Briefcase,
    whyMatters: {
      title: "Why Business Insurance Matters",
      highlights: [
        {
          title: "Asset Protection",
          desc: "Covers office, machinery, and inventory against damages.",
          icon: "🏢",
        },
        {
          title: "Liability Cover",
          desc: "Protection against legal claims from third parties or employees.",
          icon: "📜",
        },
        {
          title: "Employee Benefits",
          desc: "Group health and accident covers for your workforce.",
          icon: "👥",
        },
      ],
      summary: "Focus on growth, we'll handle the risks.",
    },
    faqs: [
      {
        q: "What is Commercial General Liability?",
        a: "It protects your business against claims of bodily injury or property damage caused to third parties by your operations.",
      },
      {
        q: "Why do I need Business Insurance?",
        a: "It protects your financial stability against unexpected losses, lawsuits, and disasters that could otherwise close your business.",
      },
    ],
  },
  "life-insurance": {
    title: "Life Insurance",
    subtitle: "Secure Your Family's Future",
    description:
      "Ensure your loved ones are financially secure even in your absence. Our life insurance plans offer protection and savings to meet your long-term goals.",
    image: lifeImg,
    icon: User,
    whyMatters: {
      title: "Why Life Insurance Matters",
      highlights: [
        {
          title: "Financial Security",
          desc: "Provides a safety net for your family in case of untimely demise.",
          icon: "🛡️",
        },
        {
          title: "Goal Planning",
          desc: "Helps build a corpus for child's education, marriage, or retirement.",
          icon: "🎯",
        },
        {
          title: "Tax Benefits",
          desc: "Tax deductions on premiums paid under Section 80C.",
          icon: "💰",
        },
      ],
      summary: "A promise of protection for those who matter most.",
    },
    faqs: [
      {
        q: "What is the difference between Term and Life Insurance?",
        a: "Term insurance is pure protection plan with high cover at low cost but no maturity benefit. Life insurance (Endowment/ULIP) offers both protection and savings/investment.",
      },
      {
        q: "What is the right age to buy Life Insurance?",
        a: "The earlier the better. Premiums are lower when you are young and healthy.",
      },
    ],
  },
  "travel-insurance": {
    title: "Travel Insurance",
    subtitle: "Travel the World Worry-Free",
    description:
      "Don't let flight delays or medical emergencies ruin your trip. Our travel insurance plans keep you protected across the globe.",
    image: travelImg,
    icon: Plane,
    whyMatters: {
      title: "Why Travel Insurance Matters",
      highlights: [
        {
          title: "Medical Emergencies",
          desc: "Covers medical expenses and hospitalization while abroad.",
          icon: "🩺",
        },
        {
          title: "Trip Delays",
          desc: "Compensation for flight delays, cancellations, and missed connections.",
          icon: "✈️",
        },
        {
          title: "Baggage Loss",
          desc: "Reimbursement for lost or delayed checked-in baggage.",
          icon: "🧳",
        },
      ],
      summary: "Your perfect travel companion for a safe journey.",
    },
    faqs: [
      {
        q: "Is Travel Insurance mandatory?",
        a: "It is mandatory for visa applications to many countries (like Schengen countries) and highly recommended for all international travel.",
      },
      {
        q: "Does it cover pre-existing diseases?",
        a: "Coverage for pre-existing diseases varies by plan. Check the policy wording carefully.",
      },
    ],
  },
  "term-insurance": {
    title: "Term Insurance",
    subtitle: "Pure Protection for Your Loved Ones",
    description:
      "Secure your family's financial future with high life cover at affordable premiums. Term insurance ensures your dependents are taken care of in your absence.",
    image: termImg,
    icon: Shield,
    whyMatters: {
      title: "Why Term Insurance Matters",
      highlights: [
        {
          title: "High Coverage",
          desc: "Get large life cover at very low premium rates.",
          icon: "🛡️",
        },
        {
          title: "Family Security",
          desc: "Ensures your family can maintain their lifestyle in your absence.",
          icon: "👨‍👩‍👧‍👦",
        },
        {
          title: "Tax Benefits",
          desc: "Save tax up to ₹1.5 Lakhs under Section 80C.",
          icon: "💰",
        },
      ],
      summary: "Small premium today, big security for tomorrow.",
    },
    faqs: [
      {
        q: "What happens if I survive the term?",
        a: "Standard term plans do not offer maturity benefits. However, Return of Premium (ROP) plans refund the premiums paid if you survive the policy term.",
      },
      {
        q: "Can I add riders to my term plan?",
        a: "Yes, you can add riders like Critical Illness, Accidental Death, and Waiver of Premium for enhanced protection.",
      },
    ],
  },
  "personal-accident-insurance": {
    title: "Personal Accident Insurance",
    subtitle: "Protection Against Life's Uncertainties",
    description:
      "Accidents can happen anytime. Our personal accident insurance covers death, disability, and income loss due to accidents, ensuring financial stability.",
    image: accidentImg,
    icon: Zap,
    whyMatters: {
      title: "Why Personal Accident Insurance Matters",
      highlights: [
        {
          title: "Disability Cover",
          desc: "Covers permanent total and partial disabilities.",
          icon: "♿",
        },
        {
          title: "Income Loss",
          desc: "Provides weekly compensation for temporary total disability.",
          icon: "📉",
        },
        {
          title: "Global Coverage",
          desc: "24/7 worldwide protection against accidents.",
          icon: "🌍",
        },
      ],
      summary: "Stay prepared for the unexpected.",
    },
    faqs: [
      {
        q: "Does health insurance cover accidents?",
        a: "Health insurance covers hospitalization costs, but Personal Accident insurance provides a lump sum payout for death or disability, which health plans may not cover.",
      },
      {
        q: "Is medical check-up required?",
        a: "Usually, Personal Accident policies do not require a pre-policy medical check-up.",
      },
    ],
  },
  "pet-insurance": {
    title: "Pet Insurance",
    subtitle: "Care for Your Furry Friends",
    description:
      "Pets are family too. Our pet insurance covers veterinary expenses, surgery costs, and third-party liability for your dogs and cats.",
    image: petImg,
    icon: User, // Using generic user/heart icon as fallback if specific isn't imported, but Heart was used in services.tsx
    whyMatters: {
      title: "Why Pet Insurance Matters",
      highlights: [
        {
          title: "Vet Fees",
          desc: "Covers unexpected veterinary bills and treatments.",
          icon: "🩺",
        },
        {
          title: "Surgery Cover",
          desc: "Reimburses costs for necessary surgeries and hospitalization.",
          icon: "🏥",
        },
        {
          title: "Third-Party Liability",
          desc: "Protects against legal liability if your pet causes injury or damage.",
          icon: "⚖️",
        },
      ],
      summary: "Best care for your loyal companions.",
    },
    faqs: [
      {
        q: "Which pets are covered?",
        a: "Most plans cover dogs and cats. Some insurers may cover other pets too.",
      },
      {
        q: "Is there an age limit for pets?",
        a: "Yes, usually pets between 8 weeks to 8 years are eligible for new policies.",
      },
    ],
  },
};

const handleQuoteSubmit = (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);

  const name = formData.get("name");
  const phone = formData.get("phone");
  const email = formData.get("email");
  const serviceType = formData.get("serviceType");
  const query = formData.get("query");

  const message = `
Hello, I would like to know More About this Insurance.

Name: ${name}
Phone: ${phone}
Email: ${email}
Service Type: ${serviceType}
Query: ${query || "N/A"}
  `;

  const whatsappNumber = "917303177489";
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message,
  )}`;

  window.open(whatsappURL, "_blank");
};

export default function ServiceDetail() {
  const { type } = useParams();
  const service = servicesData[type as string];

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const serviceType =
      (form.elements.namedItem("serviceType") as HTMLInputElement).value ||
      type;
    const query = (form.elements.namedItem("query") as HTMLTextAreaElement)
      .value;

    const message = `I would like to Know more about this insurance\n\nName: ${name}\n*Phone:* ${phone}\nEmail: ${email}\nService: ${serviceType}\nQuery: ${query}`;
    const whatsappUrl = `https://wa.me/917303177489?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Service Not Found</h2>
          <Link href="/services">
            <Button>Back to Services</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen font-sans text-slate-600 bg-slate-50">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-white pt-20">
          <Link href="/services">
            <Button
              variant="ghost"
              className="text-white/80 hover:text-white hover:bg-white/10 mb-6 pl-0"
            >
              <ChevronLeft className="mr-2 h-4 w-4" /> Back to Services
            </Button>
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-secondary/20 rounded-xl backdrop-blur-sm">
                <service.icon size={32} className="text-secondary" />
              </div>
              <span className="text-secondary font-bold uppercase tracking-widest text-sm -mt-2">
                Our Services
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-extrabold leading-tight mb-4 -mt-6">
              {service.title}
            </h1>
            <p className="text-xl text-slate-100 max-w-2xl">
              {service.subtitle}
            </p>

            <script type="application/ld+json">
              {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Service",
                name: service.title,
                provider: {
                  "@type": "LocalBusiness",
                  name: "Insurance Lab",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Indore",
                    addressRegion: "Madhya Pradesh",
                    addressCountry: "IN",
                  },
                },
                areaServed: {
                  "@type": "City",
                  name: "Indore",
                },
                description: service.description,
                offers: {
                  "@type": "Offer",
                  priceCurrency: "INR",
                  availability: "https://schema.org/InStock",
                },
              })}
            </script>
            <script type="application/ld+json">
              {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: service.faqs.map((faq: any) => ({
                  "@type": "Question",
                  name: faq.q,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: faq.a,
                  },
                })),
              })}
            </script>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column: Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-heading font-bold text-primary mb-6">
                  Overview
                </h2>
                <p className="text-lg leading-relaxed text-slate-600">
                  {service.description}
                </p>
              </motion.div>

              {/* Key Highlights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100"
              >
                <h2 className="text-2xl font-heading font-bold text-primary mb-2">
                  {service.whyMatters.title}
                </h2>
                <div className="w-16 h-1 bg-secondary rounded-full mb-8"></div>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  {service.whyMatters.highlights.map((item: any, i: number) => (
                    <div
                      key={i}
                      className="text-center p-4 rounded-xl hover:bg-slate-50 transition-colors"
                    >
                      <div className="text-4xl mb-4">{item.icon}</div>
                      <h3 className="font-bold text-lg text-primary mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-500">{item.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-primary/5 rounded-xl p-6 text-center">
                  <p className="font-medium text-primary text-lg">
                    {service.whyMatters.summary}
                  </p>
                </div>
              </motion.div>

              {/* FAQs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                {/* <h2 className="text-2xl font-heading font-bold text-primary mb-6 flex items-center gap-2">
                  <HelpCircle className="text-secondary" />
                  {service.title} FAQs
                </h2> */}
                <Accordion type="single" collapsible className="w-full">
                  {service.faqs.map((faq: any, i: number) => (
                    <AccordionItem key={i} value={`item-${i}`}>
                      <AccordionTrigger className="text-left font-semibold text-slate-700">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-slate-600">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            </div>

            {/* Right Column: Get Quotation Form */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border-t-4 border-secondary">
                  <h3 className="text-2xl font-heading font-bold text-primary mb-2">
                    Get Quotation
                  </h3>
                  <p className="text-slate-500 mb-6 text-sm">
                    Fill out the form below and our experts will get back to you
                    with the best plans.
                  </p>

                  <form className="space-y-4" onSubmit={handleQuoteSubmit}>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">
                        Company Name / Name
                      </label>
                      <Input
                        name="name"
                        placeholder="Enter your name"
                        className="bg-slate-50"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">
                        Phone Number
                      </label>
                      <Input
                        name="phone"
                        placeholder="Enter your phone number"
                        className="bg-slate-50"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">
                        Email
                      </label>
                      <Input
                        name="email"
                        placeholder="Enter your email address"
                        className="bg-slate-50"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">
                        Service Type
                      </label>
                      <input type="hidden" name="serviceType" value={type} />
                      <div className="p-3 bg-slate-50 border rounded-md text-slate-700 font-medium capitalize">
                        {service.title}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">
                        Query
                      </label>
                      <Textarea
                        name="query"
                        placeholder="Write your message here"
                        className="bg-slate-50 resize-none"
                        rows={3}
                      />
                    </div>

                    {/* <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">
                        Verify Code
                      </label>
                      <div className="flex gap-3">
                        <div className="bg-slate-200 px-4 py-2 rounded-md font-mono font-bold tracking-widest select-none">
                          X7K9
                        </div>
                        <Input
                          placeholder="Enter code"
                          className="bg-slate-50"
                        />
                      </div>
                    </div> */}

                    <Button
                      type="submit"
                      className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all"
                    >
                      Request Quote
                    </Button>
                  </form>
                </div>

                <div className="mt-6 bg-[#020a7f] rounded-2xl p-6 text-white text-center">
                  <Phone className="mx-auto mb-4 text-secondary" size={32} />
                  <h4 className="font-bold text-lg mb-2">
                    Need Immediate Assistance?
                  </h4>
                  <p className="text-white/70 mb-4 text-sm">
                    Our experts are available 24/7 to help you.
                  </p>
                  <a
                    href="tel:+917303177489"
                    className="text-xl font-bold text-secondary hover:underline"
                  >
                    +91 73031 77489
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
