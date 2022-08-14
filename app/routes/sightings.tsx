import { Outlet } from "@remix-run/react";

export default function SightingsRoute() {
  return (
    <div>
      <h1>Bigfoot Sightings</h1>
      <main>
        <Outlet />
      </main>
    </div>
  );
}