import React from 'react';
import './Videolist.css';

const Videolist = ({ videos, onSelect }) => {
  return (
    <ul className="VideoList">
      {videos.map(video => (
        <li key={video.id} className="VideoListItem" onClick={() => onSelect(video.link)}>
          {video.link}
        </li>
      ))}
    </ul>
  );
}

export default Videolist;
