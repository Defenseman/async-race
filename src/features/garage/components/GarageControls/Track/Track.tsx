/* eslint-disable max-lines-per-function */
import React from 'react';

interface TrackProps {
  name: string;
}

export function Track({ name }: TrackProps) {
  return (
    <div
      style={{
        height: '4px',
        backgroundColor: '#555',
        marginTop: '10px',
        position: 'relative',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Белые пунктирные линии */}
      <div
        style={{
          position: 'absolute',
          height: '4px',
          width: '100%',
          backgroundImage:
            'repeating-linear-gradient(to right, white 0, white 10px, transparent 10px, transparent 20px)',
          top: '1px',
        }}
      />
      <h1
        style={{
          margin: '0 0 0 20px',
          position: 'absolute',
          top: '2px',
          fontSize: '50px',
          fontWeight: 700,
        }}
      >
        {name}
      </h1>
      <div
        style={{
          position: 'absolute',
          height: '4px',
          width: '100%',
          backgroundColor: '#555',
          backgroundImage:
            'repeating-linear-gradient(to right, white 0, white 10px, transparent 10px, transparent 20px)',
          top: '65px',
        }}
      />
    </div>
  );
}
