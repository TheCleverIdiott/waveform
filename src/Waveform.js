import React, { useEffect, useRef } from 'react';

const Waveform = ({ data }) => {
  const svgRef = useRef(null);
  
  useEffect(() => {
    const svgElement = svgRef.current;
    
    // Clear any existing content
    svgElement.innerHTML = '';

    // Set up the dimensions and styling for the waveform
    const waveformWidth = svgElement.clientWidth;
    const waveformHeight = svgElement.clientHeight;
    const halfWaveformHeight = waveformHeight / 2;
    const pathElement = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    pathElement.setAttribute('stroke', 'blue');
    pathElement.setAttribute('fill', 'none');

    // Calculate the width of each sample
    const sampleWidth = waveformWidth / data.length;

    // Build the waveform path data
    let pathData = '';
    for (let i = 0; i < data.length; i++) {
      const x = i * sampleWidth;
      const y = halfWaveformHeight - (data[i] * halfWaveformHeight);
      pathData += `${x},${y} `;
    }

    // Set the path data attribute
    pathElement.setAttribute('d', `M ${pathData}`);

    // Append the path element to the SVG
    svgElement.appendChild(pathElement);
  }, [data]);

  return <svg ref={svgRef} width={800} height={200}></svg>;
};

export default Waveform;