'use client'

import { useSearchParams } from 'next/navigation'
import { redirect } from 'next/navigation'

export default function Aboutdsadqwefdevcw(){
    const searchParams = useSearchParams()
    const number = searchParams.get('number')
    const text = searchParams.get('text')

    if (!text || !number) {
        redirect('/error');
    }

    return (
        <div>
            <h1>About</h1>
            <p>This is the about page</p>
            <p>Number: {number}</p>
            <p>Text: {text}</p>
        </div>
    )
}