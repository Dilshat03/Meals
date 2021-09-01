import React from 'react';

const Youtube = ({video}) => {
    return (
        <div key={video.idMeal}>
            <iframe className='video-meal' width="560" height="315" src={`https://www.youtube.com/embed/${video}`}
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
            </iframe>
        </div>
    );
};

export default Youtube;