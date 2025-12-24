import React, { useState } from 'react';
import ChristmasScene from './components/ChristmasScene';
import Overlay from './components/Overlay';
import { AudioFX } from './utils/audio';

export default function App() {
  const [hasStarted, setHasStarted] = useState(false);
  const [targetState, setTargetState] = useState<'tree' | 'heart' | 'explode'>('tree');

  const handleStart = () => {
    setHasStarted(true);
    AudioFX.init();
    // Try to play background music if possible, or user can assume it starts
    const audio = document.getElementById('bg-music') as HTMLAudioElement;
    if (audio) {
      audio.play().catch(e => console.log("Audio autoplay prevented", e));
    }
  };

  return (
    <div className="relative w-full h-screen bg-[#050505] overflow-hidden font-sans text-[#c5a880]">
      {/* Background Music */}
      <audio id="bg-music" loop>
        <source src="https://music.163.com/song/media/outer/url?id=2153919351.mp3" type="audio/mpeg" />
      </audio>

      {/* 3D Scene & Hand Tracking */}
      <ChristmasScene 
        started={hasStarted} 
        onStateChange={setTargetState} 
      />

      {/* UI Overlay */}
      <Overlay 
        started={hasStarted} 
        onStart={handleStart} 
      />
    </div>
  );
}