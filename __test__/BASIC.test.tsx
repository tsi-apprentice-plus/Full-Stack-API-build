import Home from "@/app/page";
import '@testing-library/jest-dom'
import{ render, screen} from "@testing-library/react"
import React from 'react'
// import { enableFetchMocks } from 'jest-fetch-mock'
// import { act } from 'react-dom/test-utils';

// const fetchMock=jest
//     .spyOn(global,'fetch')
//     .mockImplementation(()=>Promise.resolve({json:()=>Promise.resolve(
//         {"name":"Aragorn",
//         "LocationsVisited":[3,5,6,7,8,9],
//         "LocationDesired":9
//         }
//         )
//     }
//     )as Promise<Response>
// )

beforeEach(()=>   
    (
    render(<Home/>)
   )
)

describe("basic render test",()=>{
    test("rendering main page",()=>{
        const successUiElement=screen.getByTestId('button 1');
        expect(successUiElement).toBeInTheDocument();
    })
    test("rendering main page",()=>{
        const successUiElement=screen.getByTestId('button 2');
        expect(successUiElement).toBeInTheDocument();
    })

    test("rendering main page",()=>{
        const successUiElement=screen.getByTestId('button 3');
        expect(successUiElement).toBeInTheDocument();
    })

    test("rendering main page",()=>{
        const successUiElement=screen.getByTestId('button 4');
        expect(successUiElement).toBeInTheDocument();
    })
    test("rendering main page",()=>{
        const successUiElement=screen.getByTestId('button 5');
        expect(successUiElement).toBeInTheDocument();
    })

 })