import Link from "next/link";
import { Shell } from "@/components/shell";

export default function ServicesPage() {
  return (
    <Shell>
      <section>
        <h1 className="text-2xl font-semibold tracking-tight text-neutral-900">
          How I can help
        </h1>
        <p className="mt-3 max-w-xl text-sm text-neutral-600">
          I’m interested in work that values depth, clear thinking, and well-engineered systems.
          Typically this looks like focused projects or senior individual contributor roles.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="card p-6">
            <h2 className="text-sm font-medium text-neutral-900">
              Machine learning engineering
            </h2>
            <p className="mt-3 text-xs text-neutral-600">
              End-to-end models: data prep, feature design, training, evaluation, and deployment.
              Pragmatic about trade-offs and baselines.
            </p>
            <ul className="mt-3 space-y-1 text-xs text-neutral-500">
              <li>• Supervised & unsupervised ML</li>
              <li>• Ensemble models & interpretability</li>
              <li>• API-based serving</li>
            </ul>
          </div>

          <div className="card p-6">
            <h2 className="text-sm font-medium text-neutral-900">
              Reinforcement learning & optimisation
            </h2>
            <p className="mt-3 text-xs text-neutral-600">
              Framing problems as decision processes when that actually helps: routing,
              control, and experimentation with RL vs simpler baselines.
            </p>
            <ul className="mt-3 space-y-1 text-xs text-neutral-500">
              <li>• Custom environments & agents</li>
              <li>• Simulation-to-real workflows</li>
              <li>• Comparisons vs OR / heuristics</li>
            </ul>
          </div>

          <div className="card p-6">
            <h2 className="text-sm font-medium text-neutral-900">
              Data engineering & MLOps
            </h2>
            <p className="mt-3 text-xs text-neutral-600">
              Pipelines and infrastructure for ML systems that are meant to survive longer
              than a demo.
            </p>
            <ul className="mt-3 space-y-1 text-xs text-neutral-500">
              <li>• ETL/ELT, dbt, SQL, Snowflake</li>
              <li>• FastAPI, Docker, CI/CD</li>
              <li>• Cloud ML (e.g. Vertex AI)</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 rounded-3xl border-subtle bg-white px-6 py-8 text-sm text-neutral-700 sm:px-10">
          <h2 className="text-base font-medium text-neutral-900">A small note</h2>
          <p className="mt-3">
            I’m careful about taking on work where ML is the wrong answer. Sometimes a
            simpler analytical or engineering solution is better, and I’m happy to say that out loud.
          </p>
          <p className="mt-4">
            If you have something in mind,{" "}
            <Link href="/contact" className="link">
              get in touch
            </Link>{" "}
            and we can figure out whether it’s a good fit.
          </p>
        </div>
      </section>
    </Shell>
  );
}
