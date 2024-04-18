import React from 'react'

const Videolist = ({videos, onSelect}) => {
  return (
    <ul>
        {videos.map(video => (
            <li key={video.id} onClick={() => onSelect(video.link)}>
                {video.link}
            </li>
        ))}
    </ul>
  )
}

export default Videolist
