import Image from "next/image";
import Link from "next/link";
import { Shell } from "@/components/shell";

export default function PortfolioPage() {
  return (
    <Shell>
      <section>
        <h1 className="text-2xl font-semibold tracking-tight text-neutral-900">
          Selected work
        </h1>
        <p className="mt-3 max-w-xl text-sm text-neutral-600">
          A few projects that show how I think about reinforcement learning, robotics,
          and applied machine learning.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <article id="juggernaut" className="card flex flex-col p-4">
            <div className="relative mb-3 aspect-[4/3] w-full overflow-hidden rounded-2xl bg-neutral-100">
              <Image
                src="/images/juggernaut.jpg"
                alt="Project Juggernaut"
                fill
                className="object-cover"
              />
            </div>
            <h2 className="text-sm font-medium text-neutral-900">
              Project Juggernaut — RL robotic arm tank
            </h2>
            <p className="mt-2 text-xs text-neutral-600">
              Reinforcement-learning driven tracked robot platform using Raspberry Pi and MegaPi,
              with simulation-first training and hardware deployment.
            </p>
            <p className="mt-2 text-[11px] uppercase tracking-wide text-neutral-500">
              RL · Robotics · Python
            </p>
            <div className="mt-3">
              <Link
                href="https://github.com/ProspectivePulse/project-juggernaut"
                className="link text-xs"
                target="_blank"
              >
                View on GitHub
              </Link>
            </div>
          </article>

          <article className="card flex flex-col p-4">
            <div className="relative mb-3 aspect-[4/3] w-full overflow-hidden rounded-2xl bg-neutral-100">
              <Image
                src="/images/warehouse-rl.jpg"
                alt="Warehouse RL"
                fill
                className="object-cover"
              />
            </div>
            <h2 className="text-sm font-medium text-neutral-900">
              Warehouse routing optimizer — RL environment
            </h2>
            <p className="mt-2 text-xs text-neutral-600">
              RL environment that frames warehouse pick routing as a decision process, comparing RL
              agents to classical optimisation and heuristics.
            </p>
            <p className="mt-2 text-[11px] uppercase tracking-wide text-neutral-500">
              RL · Optimisation · Python
            </p>
            <div className="mt-3">
              <Link
                href="https://github.com/ProspectivePulse"
                className="link text-xs"
                target="_blank"
              >
                View repository
              </Link>
            </div>
          </article>

          <article className="card flex flex-col p-4">
            <div className="relative mb-3 aspect-[4/3] w-full overflow-hidden rounded-2xl bg-neutral-100">
              <Image
                src="/images/essay-scoring.jpg"
                alt="Essay scoring"
                fill
                className="object-cover"
              />
            </div>
            <h2 className="text-sm font-medium text-neutral-900">
              Automated essay scoring — deep learning
            </h2>
            <p className="mt-2 text-xs text-neutral-600">
              Neural model that classifies/ranks student essays into performance bands using
              bidirectional LSTMs and an ensemble with gradient boosting.
            </p>
            <p className="mt-2 text-[11px] uppercase tracking-wide text-neutral-500">
              NLP · Deep Learning
            </p>
            <div className="mt-3">
              <Link
                href="https://github.com/ProspectivePulse"
                className="link text-xs"
                target="_blank"
              >
                View repository
              </Link>
            </div>
          </article>
        </div>
      </section>
    </Shell>
  );
}
