import Home from "@/app/page";
import '@testing-library/jest-dom'
import{ render, screen} from "@testing-library/react"
import React from 'react'

beforeEach(()=>   
    (
    render(<Home/>)
   )
)
describe("basic Navigation test",()=>{
    test("render Aaragorns data page",()=>{
        const successUiElement=screen.getByTestId('button 1');
        expect(successUiElement).toBeInTheDocument();
    })
})