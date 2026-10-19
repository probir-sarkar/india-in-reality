import { createFileRoute } from "@tanstack/react-router";
import { INDEXES } from "@/data/indexes";
import { HomePage, homeMeta } from "@/components/home-page";

export const Route = createFileRoute("/")({
  component: () => <HomePage lang="en" registry={INDEXES} />,
  head: () => homeMeta("en"),
});
