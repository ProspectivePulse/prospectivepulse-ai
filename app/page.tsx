import Link from "next/link";
import { Shell } from "@/components/shell";

export default function HomePage() {
  return (
    <Shell>
      <section className="flex flex-col items-center text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
          Data AI · ML · RL · Robotics
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl">
          Calm, deliberate{" "}
          <span className="font-normal">AI systems</span>.
        </h1>
        <p className="mt-4 max-w-xl text-sm text-neutral-600 sm:text-base">
          ProspectivePulse Tech is the independent practice of Nikit Sharma, a Data AI Engineer
          focused on reinforcement learning, robotics, and production-grade ML systems.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-6 py-2 text-sm text-white shadow-sm hover:bg-black"
          >
            View portfolio
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-full border border-neutral-300 px-6 py-2 text-sm text-neutral-800 hover:border-neutral-400"
          >
            Work with me
          </Link>
        </div>
      </section>

      <section className="mt-16 grid gap-6 text-sm text-neutral-700 sm:grid-cols-3">
        <div className="card p-6">
          <h2 className="text-base font-medium text-neutral-900">Machine learning</h2>
          <p className="mt-3 text-sm text-neutral-600">
            From problem framing to deployment: supervised, unsupervised, and ensemble models
            that do more than score well in a notebook.
          </p>
        </div>
        <div className="card p-6">
          <h2 className="text-base font-medium text-neutral-900">Reinforcement learning</h2>
          <p className="mt-3 text-sm text-neutral-600">
            Custom environments, Q-Learning, PPO, and robotics projects that turn RL into
            something you can actually see and touch.
          </p>
        </div>
        <div className="card p-6">
          <h2 className="text-base font-medium text-neutral-900">Data & MLOps</h2>
          <p className="mt-3 text-sm text-neutral-600">
            ETL/ELT, dbt, Snowflake, FastAPI, Docker, CI/CD, and monitoring for ML systems
            that are meant to live in production.
          </p>
        </div>
      </section>

      <section className="mt-16">
        <div className="card flex flex-col gap-6 p-8 sm:flex-row sm:items-center">
          <div className="flex-1">
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">Featured project</p>
            <h2 className="mt-3 text-xl font-medium text-neutral-900">
              Project Juggernaut — RL-driven robotic arm tank
            </h2>
            <p className="mt-3 text-sm text-neutral-600">
              A reinforcement-learning driven robotic platform built with Raspberry Pi and MegaPi.
              The system learns navigation behaviours in simulation before being deployed onto hardware.
            </p>
            <p className="mt-3 text-xs text-neutral-500">
              Python · RL (Q-Learning, PPO) · Raspberry Pi · Sensors · Docker
            </p>
            <div className="mt-4">
              <Link href="/portfolio#juggernaut" className="link text-sm">
                View details
              </Link>
            </div>
          </div>
          <div className="flex-1">
            <div className="aspect-[4/3] w-full rounded-3xl bg-neutral-100" />
          </div>
        </div>
      </section>
    </Shell>
  );
}
