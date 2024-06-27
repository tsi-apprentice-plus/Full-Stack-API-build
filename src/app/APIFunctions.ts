export interface CharData {
    name: string;
    LocationsVisited: [number];
    LocationDesired: number;
}

export interface LocationData {
    name: string;
    desc: string;
    danger: number;
    id:number;
}

export async function getCharData(dataID: string): Promise<CharData> {
    const res = await fetch(`http://api.jon.netbuildertraining.com/chars/${dataID}`);

    if (!res.ok) {
        throw new Error("Failed to fetch Data of type ${dataID}");
    }
    return res.json() as Promise<CharData>;
}

export async function getLocationData(dataID: string): Promise<LocationData> {
    const res = await fetch(`http://api.jon.netbuildertraining.com/locations/${dataID}`);

    if (!res.ok) {
        throw new Error(`Failed to fetch Data of type ${dataID}`);
    }
    return res.json() as Promise<LocationData>;
}

export async function getAragornData(): Promise<CharData> {
    const res = await fetch("http://api.jon.netbuildertraining.com/chars/Aragorn");

    if (!res.ok) {
        throw new Error("Failed to fetch Data of name Aragorn");
    }
    return res.json() as Promise<CharData>;
}

export async function deleteCharsData(dataID: string) {
    const res = await fetch(`http://api.jon.netbuildertraining.com/chars/${dataID}`, {
        method: "DELETE",
    });
    if (!res.ok) {
        console.log("failed");
        throw new Error("Failed");
    } else {
        console.log("Delete was successful, it has been cast into Mount Doom");
    }
}

export async function createCharsData(
    name: string,
    location: number[],
    locationDesired: number
) {
    console.log("part 1");
    const body = {
        name,
        LocationsVisited:location,
        LocationDesired:locationDesired
    };
    console.log("body", body);
    const jsonbody = JSON.stringify(body)
    console.log(jsonbody + "JSON BODY")
    const res = await fetch(`http://api.jon.netbuildertraining.com/chars/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: jsonbody
    });
    if (!res.ok) {
        console.log("failed");
        console.log(res);
        throw new Error("Failed");
    } else {
        console.log("Created a New Char");
    }
}