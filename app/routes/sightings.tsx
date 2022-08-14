import { Outlet, Link, useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { db } from "~/utils/db.server";

type LoaderData = {
    sightingListItems: Array<{ id: string, title: string }>;
};

export const loader: LoaderFunction = async () => {
    const data: LoaderData = {
        sightingListItems: await db.sighting.findMany({
            take: 10,
            select: { id: true, title: true },
            orderBy: { createdAt: "desc" },
          }),
    };
    return json(data);
}

export default function SightingsRoute() {
    const data = useLoaderData<LoaderData>();

    return (
    <div>
        <header>
            <h1>Bigfoot Sightings</h1>
        </header>
        
        <main>
            <div className="container">
                <div className="sightings-list">
                    <p>Recent reports of Bigfoot sightings</p>
                    <ul>
                        {data.sightingListItems.map((sighting) => (
                            <li key={sighting.id}>
                                <Link to={sighting.id}>{sighting.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <Outlet />
            </div>
        </main>
    </div>
    );
}