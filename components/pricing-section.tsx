const plans = [
  {
    name: "Free",
    price: "₹0",
    period: "/month",
    features: ["Up to 2 boards", "100 tasks", "Basic reminders"],
    popular: false,
  },
  {
    name: "Pro",
    price: "₹299",
    period: "/month",
    features: ["Unlimited boards", "Unlimited tasks", "Team collaboration"],
    popular: true,
  },
  {
    name: "Student",
    price: "₹99",
    period: "/month",
    features: ["All Free features", "Study templates", "Priority reminders"],
    popular: false,
  },
];

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="border-b border-slate-800 bg-slate-950 py-16 px-4"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold md:text-4xl text-slate-50">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-2 text-sm text-slate-300 md:text-base">
            Choose the perfect TaskFlow plan for your work or studies.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border bg-slate-900/70 p-8 transition-all ${
                plan.popular
                  ? "border-indigo-500/70 shadow-lg shadow-indigo-500/20 md:scale-105"
                  : "border-slate-800 hover:border-slate-600"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-indigo-600 px-4 py-1 text-xs font-semibold text-white">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="mb-3 text-xl font-semibold text-slate-50">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-slate-50">
                    {plan.price}
                  </span>
                  <span className="text-sm text-slate-400">{plan.period}</span>
                </div>
              </div>

              <ul className="mb-8 space-y-3 text-sm text-slate-200">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-indigo-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full rounded-full px-4 py-2 text-sm font-medium transition ${
                  plan.popular
                    ? "bg-indigo-500 text-white hover:bg-indigo-400"
                    : "bg-slate-800 text-slate-100 hover:bg-slate-700"
                }`}
              >
                Get started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
