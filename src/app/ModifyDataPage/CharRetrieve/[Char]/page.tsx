import { getCharData } from "@/app/APIFunctions";
import { CharData } from "@/app/APIFunctions";
import { NavBar } from "@/app/Navbar";
import React from "react";
interface CharDisplayProps {
  data: CharData;
}
interface PageProps {
  params: {
    Char: string;
  };
}

function CharDisplay({ data }: CharDisplayProps) {
  if (data !== null) {
    console.log(data);
    return (
      <div>
        <p>
          Name: {data.name} <br />
          Location&apos;s Visited:
          {data.LocationsVisited.toString()} <br />
          Location&apos;s Desired:
          {data.LocationDesired}
          <br />
        </p>
      </div>
    );
  } else {
    return <h1>Data Not Found</h1>;
  }
}

async function OneRingApi(name: string) {
  const apiKey = process.env.REACT_APP_API_KEY??"";
  console.log(name);
  return fetch(`https://the-one-api.dev/v2/character?name=/${name}/i`, {
    headers: {
      Authorization: apiKey,
    },
    redirect:"follow"
  }).then((res) => res.json());
}
// .then (oneRingData => console.log(oneRingData+ "Data from API"))

export default async function Home({ params }: PageProps) {
  const data = await getCharData(params.Char);
  const oneRingApiData = await OneRingApi(params.Char);
  return (
    <main>
    <div>
      <CharDisplay data={data} />
      <p>
        Character's Race : 
        {oneRingApiData.docs[0].race}<br/>
        Character's WikiPage <br/>
        {oneRingApiData.docs[0].wikiUrl}
      </p>
      <NavBar/>
    </div>
    </main>
  );
}
