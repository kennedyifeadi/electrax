import React from 'react';

export const DynamicBackground = ({ image, size = "100%" }) => {
  const inlineStyle = {
    height: size,
  };

  return (
    <div className="w-full absolute top-0" style={inlineStyle}>
      <img src={image} alt="" className="w-full h-full object-cover" />
    </div>
  );
};