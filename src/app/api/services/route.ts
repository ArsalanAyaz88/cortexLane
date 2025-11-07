import { NextResponse } from "next/server";

export const revalidate = 60; // cache for 1 minute

export async function GET() {
  const services = [
    {
      title: "AI Consulting",
      items: [
        "Discovery workshops to align goals, data, and ROI",
        "Architecture blueprints and feasibility assessments",
        "Build vs. buy guidance and implementation roadmap",
      ],
    },
    {
      title: "RAG Apps",
      items: [
        "Grounded chat over Confluence, GitHub, Drive",
        "High-signal retrieval with evals and guardrails",
        "Observability for latency, cost, and response quality",
      ],
    },
    {
      title: "MLOps",
      items: [
        "Model/Prompt CI, versioning, and rollout policies",
        "Monitoring, drift detection, and auto rollback",
        "Security, scaling, and cost controls for prod",
      ],
    },
    {
      title: "Computer Vision",
      items: [
        "Detection, tracking, and segmentation pipelines",
        "Synthetic data + labeling to boost accuracy",
        "Edge and real-time inference for operations",
      ],
    },
    {
      title: "LLM Fine‑tuning",
      items: [
        "Instruction and domain tuning with curated datasets",
        "Safety reviews, red-teaming, and eval suites",
        "Optimized serving with quantization + caching",
      ],
    },
    {
      title: "Research by PhDs",
      items: [
        "Rapid literature reviews and SOTA baselines",
        "Custom prototypes from papers to POCs",
        "IP-first experiments and ablations",
      ],
    },
    {
      title: "Architect Design",
      items: [
        "Reference architectures for AI stacks",
        "Cost-performance tradeoffs and SLAs",
        "Compliance and security best practices",
      ],
    },
    {
      title: "AI Agents",
      items: [
        "Tool use, function calling, and planning",
        "Multi-agent orchestration for workflows",
        "Safety, logging, and human-in-the-loop",
      ],
    },
  ];

  return NextResponse.json({ services });
}
