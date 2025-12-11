import { Shell } from "@/components/shell";

export default function AboutPage() {
  return (
    <Shell>
      <section className="grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-neutral-900">
            About
          </h1>
          <p className="mt-3 text-sm text-neutral-600">
            I’m Nikit Sharma, a Data AI Engineer with a background in mechanical engineering and business
            information. Over the last several years I’ve worked across data engineering, machine learning,
            and applied AI.
          </p>
          <p className="mt-3 text-sm text-neutral-600">
            I’m particularly interested in reinforcement learning, robotics, and how to make
            complex systems simple enough to reason about. I enjoy work that asks for both
            theory and engineering: designing algorithms, but also getting them to run
            predictably in real environments.
          </p>
          <p className="mt-3 text-sm text-neutral-600">
            ProspectivePulse Tech is my independent practice — a place to bring together
            RL, ML, and solid engineering for teams that care about both rigour and results.
          </p>
        </div>
        <div className="card p-6 text-sm text-neutral-700">
          <h2 className="text-sm font-medium text-neutral-900">At a glance</h2>
          <ul className="mt-3 space-y-1 text-xs text-neutral-600">
            <li>• Based in Brisbane, Australia</li>
            <li>• Data AI Engineer · ML · RL · MLOps</li>
            <li>• Reinforcement learning projects with real robots</li>
            <li>• Comfortable across strategy, data, and code</li>
          </ul>
        </div>
      </section>
    </Shell>
  );
}
