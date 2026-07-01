import ContactForm from "./components/ContactForm";
import HeroAB from "./components/HeroAB";
import { getStoryblokApi } from "@storyblok/react/rsc";
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
async function getHomeContent() {
  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.get("cdn/stories/home", {
    version: "draft",
  });
  return data.story;
}
export default async function Home() {
  const story = await getHomeContent();
  console.log("Storyblok data:", JSON.stringify(story, null, 2));
  return (
    <main className="min-h-screen bg-white font-sans">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-5 border-b border-gray-100">
        <div className="text-2xl font-bold text-indigo-600">CallFlow</div>
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-600">
          <a href="#features" className="hover:text-indigo-600 transition-colors">Features</a>
          <a href="#pricing" className="hover:text-indigo-600 transition-colors">Pricing</a>
          <a href="#contact" className="hover:text-indigo-600 transition-colors">Contact</a>
        </div>
        <div className="flex items-center gap-3">
          <button className="text-sm text-gray-600 hover:text-indigo-600 transition-colors">Log in</button>
          <button className="bg-indigo-600 text-white text-sm px-4 py-2 rounded-full hover:bg-indigo-700 transition-colors">
            Get a demo
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center px-8 py-24 max-w-4xl mx-auto">
        <span className="bg-indigo-50 text-indigo-600 text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-wide">
          AI-Powered Customer Communications
        </span>
        <HeroAB />
       <p className="text-xl text-gray-500 max-w-2xl mb-10">
  {story.content.body[0]?.subheadline}
</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-indigo-600 text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-indigo-700 transition-colors">
  {story.content.body[0]?.cta_text}
</button>
          <button className="border border-gray-200 text-gray-700 px-8 py-3 rounded-full text-sm font-semibold hover:border-indigo-300 transition-colors">
            Watch demo
          </button>
        </div>
        <p className="text-xs text-gray-400 mt-4">No credit card required · Setup in 5 minutes</p>
      </section>

      {/* Social Proof */}
      <section className="bg-gray-50 py-10 px-8">
        <p className="text-center text-sm text-gray-400 mb-6">Trusted by 22,000+ companies worldwide</p>
        <div className="flex flex-wrap justify-center gap-10 text-gray-300 font-bold text-lg">
          <span>Shopify</span>
          <span>HubSpot</span>
          <span>Intercom</span>
          <span>Zendesk</span>
          <span>Salesforce</span>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Everything your team needs</h2>
        <p className="text-center text-gray-500 mb-16 max-w-xl mx-auto">
          Built for sales and support teams who need to move fast without sacrificing quality.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: "🤖",
              title: "AI Voice Agent",
              desc: "Automates routine calls so your team focuses on what matters most."
            },
            {
              icon: "⚡",
              title: "AI Assist",
              desc: "Real-time guidance during calls and streamlined post-call summaries."
            },
            {
              icon: "📊",
              title: "Analytics Dashboard",
              desc: "Track call volume, resolution rates, and team performance in real time."
            },
            {
              icon: "💬",
              title: "Omnichannel",
              desc: "Voice, SMS, and WhatsApp unified in one seamless workspace."
            },
            {
              icon: "🔗",
              title: "CRM Integrations",
              desc: "Native integrations with HubSpot, Salesforce, and 100+ tools."
            },
            {
              icon: "🔒",
              title: "Enterprise Security",
              desc: "SOC 2 compliant with end-to-end encryption and access controls."
            }
          ].map((feature) => (
            <div key={feature.title} className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-gray-50 py-24 px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Simple, transparent pricing</h2>
        <p className="text-center text-gray-500 mb-16">Start free. Scale as you grow.</p>
        <div className="flex flex-col md:flex-row gap-6 max-w-4xl mx-auto">
          {[
            { name: "Starter", price: "$30", desc: "Perfect for small teams", features: ["Up to 5 users", "Voice + SMS", "Basic analytics", "Email support"] },
            { name: "Growth", price: "$70", desc: "For scaling teams", features: ["Up to 25 users", "AI Assist included", "Advanced analytics", "Priority support"], popular: true },
            { name: "Enterprise", price: "Custom", desc: "For large organizations", features: ["Unlimited users", "AI Voice Agent", "Custom integrations", "Dedicated CSM"] }
          ].map((plan) => (
            <div key={plan.name} className={`flex-1 rounded-2xl p-8 ${plan.popular ? "bg-indigo-600 text-white shadow-xl scale-105" : "bg-white border border-gray-100"}`}>
              {plan.popular && <span className="text-xs font-bold uppercase tracking-wide bg-white text-indigo-600 px-2 py-1 rounded-full mb-4 inline-block">Most Popular</span>}
              <h3 className={`text-xl font-bold mb-1 ${plan.popular ? "text-white" : "text-gray-900"}`}>{plan.name}</h3>
              <p className={`text-sm mb-4 ${plan.popular ? "text-indigo-200" : "text-gray-500"}`}>{plan.desc}</p>
              <div className={`text-4xl font-bold mb-6 ${plan.popular ? "text-white" : "text-gray-900"}`}>{plan.price}<span className="text-base font-normal">{plan.price !== "Custom" ? "/mo" : ""}</span></div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className={`text-sm flex items-center gap-2 ${plan.popular ? "text-indigo-100" : "text-gray-600"}`}>
                    <span>✓</span> {f}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-full text-sm font-semibold transition-colors ${plan.popular ? "bg-white text-indigo-600 hover:bg-indigo-50" : "bg-indigo-600 text-white hover:bg-indigo-700"}`}>
                Get started
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Contact / CTA Section */}
      <section id="contact" className="py-24 px-8 max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to get started?</h2>
        <p className="text-gray-500 mb-10">Talk to our team and see CallFlow in action.</p>
        <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
         <ContactForm />
          <p className="text-xs text-gray-400 mt-4">We'll get back to you within 24 hours.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8 px-8 text-center text-sm text-gray-400">
        © 2025 CallFlow. Built with Next.js + Tailwind CSS.
      </footer>
    </main>
  );
}