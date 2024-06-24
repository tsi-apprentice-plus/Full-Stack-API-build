import { getCharData } from "@/app/APIFunctions";
import { CharData } from "@/app/APIFunctions";
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
          {data.LocationsVisited} <br />
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
  console.log(name);
  return fetch(`https://the-one-api.dev/v2/character?name=/samwise/i`, {
    headers: {
      Authorization: ``,
    },
    redirect:"follow"
  }).then((res) => res.json());
}
// .then (oneRingData => console.log(oneRingData+ "Data from API"))

export default async function Home({ params }: PageProps) {
  const data = await getCharData(params.Char);
  const oneRingApiData = await OneRingApi(params.Char);
  return (
    <div>
      <CharDisplay data={data} />
      <p>
        Characters Race
        {oneRingApiData.docs[0].race}
      </p>
    </div>
  );
}
