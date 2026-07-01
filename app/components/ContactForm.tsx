"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const formData = new FormData(e.currentTarget);
    const formElement = e.currentTarget;

    const res = await fetch("https://formspree.io/f/mykqdeol", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    const json = await res.json();

    if (json.ok) {
      setStatus("success");
      formElement.reset();
    } else {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="text"
        name="name"
        placeholder="Your name"
        required
        className="border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-300"
      />
      <input
        type="email"
        name="email"
        placeholder="Work email"
        required
        className="border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-300"
      />
      <input
        type="text"
        name="company"
        placeholder="Company name"
        className="border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-300"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="bg-indigo-600 text-white py-3 rounded-full text-sm font-semibold hover:bg-indigo-700 transition-colors disabled:opacity-50"
      >
        {status === "loading" ? "Sending..." : "Request a demo"}
      </button>
      {status === "success" && (
        <p className="text-green-600 text-sm text-center">Thanks! We'll be in touch soon.</p>
      )}
      {status === "error" && (
        <p className="text-red-600 text-sm text-center">Something went wrong. Please try again.</p>
      )}
    </form>
  );
}