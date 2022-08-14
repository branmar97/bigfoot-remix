import { LiveReload, Outlet } from "@remix-run/react";
import TimeAgo from "javascript-time-ago";
import en from 'javascript-time-ago/locale/en.json'

TimeAgo.addDefaultLocale(en)

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Bigfoot Sightings</title>
      </head>
      <body>
        <Outlet />
        <LiveReload />
      </body>
    </html>
  );
}