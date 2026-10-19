import { createFileRoute } from "@tanstack/react-router";
import { INDEXES_HI } from "@/data/indexes/hi";
import { IndexDetail, DetailNotFound } from "@/components/detail-page";

export const Route = createFileRoute("/hi/indexes/$slug")({
  component: IndexDetailHi,
  head: ({ params }) => {
    const ix = INDEXES_HI.find((i) => i.slug === params.slug);
    return {
      meta: [
        {
          title: ix
            ? `${ix.name} — भारत इन रियलिटी`
            : "Not found — India in Reality",
        },
        { name: "description", content: ix?.tagline ?? "" },
        ix
          ? { name: "alternate", hrefLang: "en", href: `https://inr.probir.dev/indexes/${ix.slug}` }
          : {},
      ],
    };
  },
});

function IndexDetailHi() {
  const { slug } = Route.useParams();
  const ix = INDEXES_HI.find((i) => i.slug === slug);
  if (!ix) return <DetailNotFound lang="hi" />;
  return <IndexDetail ix={ix} lang="hi" registry={INDEXES_HI} />;
}
