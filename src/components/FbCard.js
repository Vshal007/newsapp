import React, { useState } from 'react';

function FbCard() {
    const [text, setText] = useState('');

    const handleChange = (event) => {
        setText(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add your form submission logic here
        console.log('Submitting post:', text);
        setText('');
    };

    return (
        <div className="flex flex-col w-full max-w-2xl mx-auto border-b border-gray-200">
            <form onSubmit={handleSubmit} className="flex items-center py-4">
                <div className="flex-grow relative">
                    <textarea
                        value={text}
                        onChange={handleChange}
                        className="w-full h-24 resize-none rounded-md shadow-sm border border-gray-300 px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:ring-2"
                        placeholder="What's on your mind?"
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                        <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-medium text-indigo-600 bg-white border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            <LiveVideoIcon className="mr-2 -ml-1 h-5 w-5 text-indigo-500" />
                            Live Video
                        </button>
                        <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-medium text-indigo-600 bg-white border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            <PhotoVideoIcon className="mr-2 -ml-1 h-5 w-5 text-indigo-500" />
                            Photo/Video
                        </button>
                    </div>
                </div>
                <button type="submit" className="ml-4 inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Post
                </button>
            </form>

            <div className="flex items-center justify-between pt-4">
                <div className="flex items-center">
                    <FeelingActivityIcon className="mr-2 h-5 w-5 text-indigo-500" />
                    Feeling/activity
                </div>
                <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-medium text-indigo-600 bg-white border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <MoreIcon className="-ml-1 h-5 w-5 text-indigo-500" />
                </button>
            </div>
        </div>
    );
}

export default FbCard;