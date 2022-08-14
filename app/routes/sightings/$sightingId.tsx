import type { Sighting } from "@prisma/client";
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import ReactTimeAgo from "react-time-ago";
import { db } from "~/utils/db.server";

type LoaderData = { sighting: Sighting };

export const loader: LoaderFunction = async ({ params }) => {
  const sighting = await db.sighting.findUnique({
    where: { id: params.sightingId }
  })

  if (!sighting) {
    throw new Error("Record not found")
  }
  
  const data: LoaderData = { sighting };
  return json(data)
};

export default function SightingRoute() {
  const data = useLoaderData<LoaderData>();
  
  return (
    <div>
      <h2>{data.sighting.title}</h2>
      <p>Reported <ReactTimeAgo date={new Date(data.sighting.createdAt)} /></p>
      <div>
        <ul>
          <li>Occured {data.sighting.occurence}</li>
          <li>{data.sighting.city}, {data.sighting.state}</li>
          <li>Vicinity: {data.sighting.vicinity}</li>
          <li>Witnesses: {data.sighting.witnesses}</li>
          <li>Conditions: {data.sighting.conditions}</li>
          <li>Evidence: {data.sighting.evidence}</li>
          <li>Details: {data.sighting.details}</li>
        </ul>
      </div>
    </div>
  );
}