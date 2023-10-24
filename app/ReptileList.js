import React from 'react';

function ReptileList() {
  const reptiles = ["Red", "Black", "Yellow", "White", "Orange"];

  return (
    <ol>
      {reptiles.map((reptile) => (
        <li>{reptile}</li>
      ))}
    </ol>
  );
}

export default ReptileList;