export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-50">
      {/* Navbar */}
      <header className="w-full border-b border-slate-800">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-indigo-500 to-cyan-400" />
            <span className="text-lg font-semibold tracking-tight">TaskFlow</span>
          </div>
          <div className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#testimonials" className="hover:text-white transition">Testimonials</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
          </div>
          <a
            href="#pricing"
            className="rounded-full bg-indigo-500 px-4 py-2 text-sm font-medium text-white shadow hover:bg-indigo-400 transition"
          >
            Get started
          </a>
        </nav>
      </header>

      {/* Main content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b border-slate-800">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 py-16 md:flex-row md:py-24">
            
            {/* Text */}
            <div className="flex-1 space-y-6">
              <span className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs font-medium text-slate-300">
                🚀 New · Productivity for everyday life
              </span>

              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                Your tasks. Your flow.{" "}
                <span className="bg-gradient-to-r from-indigo-400 to-cyan-300 bg-clip-text text-transparent">
                  Zero chaos.
                </span>
              </h1>

              <p className="max-w-xl text-sm text-slate-300 sm:text-base">
                TaskFlow helps you organize assignments, daily routines, and projects in a clean,
                distraction-free workspace. Designed for students, professionals, and teams.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#pricing"
                  className="inline-flex items-center justify-center rounded-full bg-indigo-500 px-6 py-2.5 text-sm font-medium text-white shadow hover:bg-indigo-400 transition"
                >
                  Start for free
                </a>

                <button className="inline-flex items-center justify-center rounded-full border border-slate-700 px-6 py-2.5 text-sm font-medium text-slate-200 hover:bg-slate-900 transition">
                  Watch demo
                </button>
              </div>

              <p className="text-xs text-slate-400">
                No credit card required · Auto-sync across devices · Cancel anytime
              </p>
            </div>

            {/* Mock UI */}
            <div className="flex-1 w-full">
              <div className="mx-auto max-w-md rounded-2xl border border-slate-800 bg-slate-900/60 p-4 shadow-xl">

                <div className="mb-4 flex items-center justify-between">
                  <div className="text-sm font-medium text-slate-200">Today's Focus</div>
                  <span className="rounded-full bg-emerald-500/10 px-2 py-1 text-xs text-emerald-300">
                    5 tasks
                  </span>
                </div>

                <div className="space-y-3 text-sm">
                  {[
                    "Finish landing page UI",
                    "Review interview notes",
                    "Reply to client emails",
                    "Plan tasks for tomorrow",
                  ].map((task, i) => (
                    <div
                      key={task}
                      className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/60 px-3 py-2"
                    >
                      <div className="flex items-center gap-2">
                        <input type="checkbox" className="h-4 w-4 rounded border-slate-600 bg-slate-900" />
                        <span className="text-slate-200">{task}</span>
                      </div>
                      <span className="text-[10px] text-slate-400">
                        {i === 0 ? "Due in 2h" : "Today"}
                      </span>
                    </div>
                  ))}
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="border-b border-slate-800 bg-slate-950">
          <div className="mx-auto max-w-6xl px-4 py-14">
            <h2 className="text-center text-2xl font-semibold sm:text-3xl">
              Everything you need to stay organized
            </h2>

            <p className="mt-2 text-center text-sm text-slate-300 sm:text-base">
              Clean, powerful features designed to simplify your day.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Smart task lists",
                  desc: "Create custom lists for study, work, or personal tasks. Easily set due dates and priorities.",
                },
                {
                  title: "Reminders & schedules",
                  desc: "Get gentle reminders to keep you on track throughout the day.",
                },
                {
                  title: "Share & collaborate",
                  desc: "Share task boards with friends or teammates and stay aligned.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5"
                >
                  <div className="mb-3 text-lg font-medium text-slate-100">{item.title}</div>
                  <p className="text-sm text-slate-300">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="border-b border-slate-800 bg-slate-950">
          <div className="mx-auto max-w-6xl px-4 py-14">

            <h2 className="text-center text-2xl font-semibold sm:text-3xl">
              Loved by students & teams
            </h2>

            <p className="mt-2 text-center text-sm text-slate-300 sm:text-base">
              People across all backgrounds use TaskFlow to simplify their workflow.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                {
                  quote:
                    "I use TaskFlow to manage college assignments and weekly plans. It keeps everything in one place.",
                  user: "Ananya, B.Tech Student",
                },
                {
                  quote:
                    "Clean UI and no distractions. Perfect for organizing freelance projects.",
                  user: "Rohan, Developer",
                },
                {
                  quote:
                    "Our team uses it for sprint planning. Simple, fast, and easy for everyone.",
                  user: "Priya, Product Manager",
                },
              ].map((t) => (
                <div
                  key={t.user}
                  className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5"
                >
                  <p className="text-sm text-slate-200">“{t.quote}”</p>
                  <p className="mt-3 text-xs font-medium text-slate-400">— {t.user}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="border-b border-slate-800 bg-slate-950">
          <div className="mx-auto max-w-6xl px-4 py-14">
            <h2 className="text-center text-2xl font-semibold sm:text-3xl">
              Simple pricing for everyone
            </h2>
            <p className="mt-2 text-center text-sm text-slate-300 sm:text-base">
              Start free and upgrade only when you need more.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                {
                  plan: "Free",
                  price: "₹0",
                  features: ["2 boards", "100 tasks", "Basic reminders"],
                  highlight: false,
                },
                {
                  plan: "Pro",
                  price: "₹299/mo",
                  features: ["Unlimited boards", "Unlimited tasks", "Team collaboration"],
                  highlight: true,
                },
                {
                  plan: "Student",
                  price: "₹99/mo",
                  features: ["All Free features", "Study templates", "Priority reminders"],
                  highlight: false,
                },
              ].map((p) => (
                <div
                  key={p.plan}
                  className={`flex flex-col rounded-2xl border ${
                    p.highlight ? "border-indigo-500 shadow-lg shadow-indigo-500/20" : "border-slate-800"
                  } bg-slate-900/60 p-6`}
                >
                  <h3 className="text-lg font-semibold">{p.plan}</h3>
                  <div className="mt-2 text-3xl font-bold">{p.price}</div>

                  <ul className="mt-4 space-y-2 text-sm text-slate-300">
                    {p.features.map((f) => (
                      <li key={f}>• {f}</li>
                    ))}
                  </ul>

                  <button
                    className={`mt-6 rounded-full px-4 py-2 text-sm font-medium ${
                      p.highlight
                        ? "bg-indigo-500 text-white hover:bg-indigo-400"
                        : "border border-slate-700 hover:bg-slate-900"
                    }`}
                  >
                    Choose plan
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950">
        <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between px-4 py-6 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} TaskFlow. All rights reserved.</p>
          <div className="flex gap-4 mt-3 sm:mt-0">
            <a href="#" className="hover:text-slate-200">Privacy</a>
            <a href="#" className="hover:text-slate-200">Terms</a>
            <a href="#" className="hover:text-slate-200">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
