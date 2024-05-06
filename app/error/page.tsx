"use client"
import { redirect } from 'next/navigation'

function routeToHome() {
    redirect('/')
}

export default function Error() {
    return (
        <div className="bg-red-200">
            <h1>Error</h1>
            <form action={routeToHome}>
                <button type="submit">Go back</button>
            </form>
        </div>
    );
}