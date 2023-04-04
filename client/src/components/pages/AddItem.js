import React, { useState } from 'react'
import Axios from 'axios'

export default function AddItem() {
    const [title, setTitle] = useState('')
    const [iconURL, setIconURL] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        Axios.post('/api/listedItems', {
            title: title,
            iconURL: iconURL,
            description: description
        })
    
    }

    return (
        <div className="bg-amber-100 pb-10 pl-10">
            <div className="text-xl pt-5 mb-4 font-bold text-gray-800">Add item</div>
            <section className="max-w-4xl p-6 bg-white rounded-md border border-gray-300 shadow-xl pb-10">
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-6 mt-4">
                    <div>
                        <input onChange={(e) => {setTitle(e.target.value)}} type="text" placeholder="Title" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>

                    <div>
                        <input onChange={(e) => { setIconURL(e.target.value) }} type="text" placeholder="iconURL" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>
                </div>

                <div className="pt-3">
                    <input onChange={(e) => { setDescription(e.target.value) }} type="text" placeholder="Description" className="block mt-2 w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"></input>
                </div>

                <div className="flex justify-center mt-6">
                        <button type="submit" className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600" onClick={() => window.location.reload(false)}>Save</button>
                </div>

            </form>
            </section>
        </div>
    )
}
