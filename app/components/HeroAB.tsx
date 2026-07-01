"use client";

import { useEffect, useState } from "react";

const AB_VARIANTS = {
  A: {
    headline: "Talk to your customers. Let AI handle the rest.",
    cta: "Start free trial",
  },
  B: {
    headline: "Close more deals with AI-powered voice.",
    cta: "Get a demo today",
  },
};

export default function HeroAB() {
  const [variant, setVariant] = useState<"A" | "B">("A");

  useEffect(() => {
    const stored = localStorage.getItem("ab_variant");
    if (stored === "A" || stored === "B") {
      setVariant(stored);
    } else {
      const assigned = Math.random() < 0.5 ? "A" : "B";
      localStorage.setItem("ab_variant", assigned);
      setVariant(assigned);
    }
    // Track which variant was seen
    console.log(`AB Test: Variant ${variant} shown`);
  }, []);

  return (
    <div className="flex flex-col items-center text-center">
      <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
        {AB_VARIANTS[variant].headline}
      </h1>
      <button className="bg-indigo-600 text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-indigo-700 transition-colors">
        {AB_VARIANTS[variant].cta}
      </button>
    </div>
  );
}