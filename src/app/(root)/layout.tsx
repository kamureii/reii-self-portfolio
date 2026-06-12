import "../globals.css";

import { SiteHtml } from "../site-shell";

export { metadata, viewport } from "../site-shell";

export default function RootRedirectLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <SiteHtml>{children}</SiteHtml>;
}
