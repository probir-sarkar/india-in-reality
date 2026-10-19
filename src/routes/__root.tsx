/// <reference types="vite/client" />
import { Outlet, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import appCss from "@/styles/globals.css?url";
import { SITE } from "@/lib/site";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        title: `${SITE.name} — ${SITE.tagline}`,
      },
      {
        name: "description",
        content: SITE.description,
      },
      { property: "og:type", content: "website" },
      { property: "og:title", content: `${SITE.name} — ${SITE.tagline}` },
      { property: "og:description", content: SITE.description },
      { property: "og:url", content: SITE.url },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
    ],
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <Outlet />
        <Scripts />
      </body>
    </html>
  );
}

