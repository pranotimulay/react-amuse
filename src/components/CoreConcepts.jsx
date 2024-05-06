import React from "react";

export default function CoreConcepts(data) {
    console.log(data);

    return React.createElement(
        'li',
        null,
        React.createElement('img', { src: data.image, alt: data.description }), // Nested createElement for img tag
        React.createElement('h3', null, data.title), // Nested createElement for h3 tag
        React.createElement('p', null, data.description) // Nested createElement for p tag
    );
}