import React from 'react';
import { Pane } from 'evergreen-ui';
import ProgressTile from './Tile';

function ProgressPageTiles() {
  return (
    <Pane
      display="flex"
      flexWrap="wrap"
      backgroundColor="lightgray"
      width="100%"
      height="100%"
      justifyContent="center"
      alignItems="center"
    >
      <ProgressTile
        icon="Icon"
        title="Weight"
        measure="135lbs"
      />
      <ProgressTile />
      <ProgressTile />
      <ProgressTile />
      <ProgressTile />
      <ProgressTile />
    </Pane>
  );
}

export default ProgressPageTiles;
