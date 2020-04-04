import React from 'react';
import './ProgressPageTiles.css';
import ProgressTile from './Tile';

function ProgressPageTiles() {
  return (
    <div className="tile-frame">
      <ProgressTile icon="Icon" title="Weight" measure="135lbs" />
      <ProgressTile />
      <ProgressTile />
      <ProgressTile />
      <ProgressTile />
      <ProgressTile />
    </div>
  );
}

export default ProgressPageTiles;
