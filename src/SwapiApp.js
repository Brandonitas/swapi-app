import React, { useState } from 'react'
import Card from './components/Card'
import Header from './components/Header'

const SwapiApp = () => {
    const [title, setTitle] = useState('Select a movie')
    return (
        <>
            <Header/>
            <div className="cards-section shadow-xl">
                <div className="cards-container">
                    <h2>{title}</h2>
                    <div className="grid grid-cols-3 gap-4 mt-10">
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                    </div>

                </div>
            </div>
        </>
    )
}

export default SwapiApp
