import { createFileRoute } from "@tanstack/react-router";
import { INDEXES_HI } from "@/data/indexes/hi";
import { HomePage, homeMeta } from "@/components/home-page";

export const Route = createFileRoute("/hi/")({
  component: () => <HomePage lang="hi" registry={INDEXES_HI} />,
  head: () => homeMeta("hi"),
});
