import { createFileRoute } from "@tanstack/react-router";
import { INDEXES } from "@/data/indexes";
import { IndexDetail, DetailNotFound } from "@/components/detail-page";

export const Route = createFileRoute("/indexes/$slug")({
  component: IndexDetailEn,
  head: ({ params }) => {
    const ix = INDEXES.find((i) => i.slug === params.slug);
    return {
      meta: [
        {
          title: ix
            ? `${ix.name}: what it says, and what to make of it — India in Reality`
            : "Not found — India in Reality",
        },
        { name: "description", content: ix?.tagline ?? "" },
        ...(ix
          ? [{ name: "alternate", hrefLang: "hi", href: `https://inr.probir.dev/hi/indexes/${ix.slug}` }]
          : []),
      ],
    };
  },
});

function IndexDetailEn() {
  const { slug } = Route.useParams();
  const ix = INDEXES.find((i) => i.slug === slug);
  if (!ix) return <DetailNotFound lang="en" />;
  return <IndexDetail ix={ix} lang="en" registry={INDEXES} />;
}
