

export interface CharData{
name:string,
LocationsVisited:[Number],
LocationDesired:Number
}

export interface LocationData{
    data:{
        name:string,
        desc:String,
        danger:Number
    }
}

export async function getCharData(dataID:string):Promise<CharData>{
    const res =await fetch('localhost:8080/chars/${dataID}')

    if (!res.ok){
        throw new Error ('Failed to fetch Data of type ${dataID}')
    }
    return res.json() as Promise<CharData>
}

export async function getLocationData(dataID:string):Promise<LocationData>{
    const res =await fetch('localhost:8080/locations/${dataID}')

    if (!res.ok){
        throw new Error ('Failed to fetch Data of type ${dataID}')
    }
    return res.json() as Promise<LocationData>
}

export async function getAragornData():Promise<CharData>{
    const res =await fetch('http://localhost:8080/chars/Aragorn')

    if (!res.ok){
        throw new Error ('Failed to fetch Data of name Aragorn')
    }
    return res.json() as Promise<CharData>
}