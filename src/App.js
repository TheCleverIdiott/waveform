import React, { useEffect, useState } from 'react';
import Waveform from './Waveform';
import data from './waveform.json';
import WaveformChart from './WaveformChart';
import waveformData from './waveformData.json';

const App = () => {
  const [waveformData, setWaveformData] = useState([]);

  useEffect(() => {
    // Fetch the JSON data
    setWaveformData(data.data);
  }, []);

  return (
    <div>
      <h1>Example Waveform</h1>
      <Waveform data={waveformData} />
    </div>
  );
};

export default App;
