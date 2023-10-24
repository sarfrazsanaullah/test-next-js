import React from 'react';

function ReptileList() {
    const reptiles = ['Green', 'Red', 'Purple', "Yellow", "Orange", "White"];

    return (
      <ol>
        {reptiles.map(reptile => (
          <li key={reptile}>{reptile}</li>
        ))}
      </ol>
    );
}
export default ReptileList;

