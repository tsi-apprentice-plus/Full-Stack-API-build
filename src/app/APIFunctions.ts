export interface CharData {
    name: string;
    LocationsVisited: [number];
    LocationDesired: number;
}

export interface LocationData {
    name: string;
    desc: string;
    danger: number;
}

export async function getCharData(dataID: string): Promise<CharData> {
    const res = await fetch(`http://localhost:8080/chars/${dataID}`);

    if (!res.ok) {
        throw new Error("Failed to fetch Data of type ${dataID}");
    }
    return res.json() as Promise<CharData>;
}

export async function getLocationData(dataID: string): Promise<LocationData> {
    const res = await fetch(`http://localhost:8080/locations/${dataID}`);

    if (!res.ok) {
        throw new Error(`Failed to fetch Data of type ${dataID}`);
    }
    return res.json() as Promise<LocationData>;
}

export async function getAragornData(): Promise<CharData> {
    const res = await fetch("http://localhost:8080/chars/Aragorn");

    if (!res.ok) {
        throw new Error("Failed to fetch Data of name Aragorn");
    }
    return res.json() as Promise<CharData>;
}

export async function deleteCharsData(dataID: string) {
    console.log("Arkvoodle");
    const res = await fetch(`http://localhost:8080/chars/${dataID}`, {
        method: "DELETE",
    });
    console.log("BLAH");
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
    const res = await fetch(`http://localhost:8080/chars/`, {
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

// app.get('/chars',async (req,res)=>{
//     const charsFound= await (Char.find())
//     res.status(200)
//     res.json(charsFound)
// })

// app.get('/chars/:name',async (req,res)=>{
//     const CharFound= await Char.findOne({name: req.params.name})
//     res.status(200)
//     res.json(CharFound)
// })
// app.get('/locations/:name',async (req,res)=>{
//     const locationFound= await Location.findOne({name: req.params.name})
//     res.status(200)
//     res.json(locationFound)
// })

// app.patch('/chars/:name',async (req,res)=>{
//     await Char.findOneAndUpdate({name:req.params.name}, req.body)
//     const char = await Char.findOne({name:req.params.name})
//     res.json(char)
// })
// app.patch('/location/:name',async (req,res)=>{
//     await Location.findOneAndUpdate({name:req.params.name}, req.body)
//     const location = await Location.findOne({name:req.params.name})
//     res.json(location)
//     })

// app.post ('/chars',async (req,res)=>{
//     const newChar= new Char (req.body)
//     await newChar.save()
//     res.status(201)
//     res.json (await Char.findOne({name:(newChar.name)}))
//     })

// app.post ('/locations',async (req,res)=>{
//     const newLocation= new Location (req.body)
//     await newLocation.save()
//     res.status(201)
//     res.json (await Location.findOne({name:(newLocation.name)}))
//     })

// app.delete ('/chars/:name', async (req,res)=>{
//     await Char.findOneAndDelete({name:req.params.name})
//     res.sendStatus(204)
// })
// app.delete ('/locations/:name', async (req,res)=>{
//     await Location.findOneAndDelete({name:req.params.name})
//     res.sendStatus(204)
// })
