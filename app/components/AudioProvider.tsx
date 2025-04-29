"use client";
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useRef,
} from "react";


interface AudioContextType {
  musicVolume: number;
  setMusicVolume: (value: number) => void;
  sfxVolume: number;
  setSfxVolume: (value: number) => void;
  playBackgroundAudio: () => void;
  pauseBackgroundAudio: () => void;
  playAudioEffect: (src: string) => void;
  playingBackgroundAudio: boolean;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const useAudioCustom = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error("useAudio must be used within a AudioProvider");
  }
  return context;
};

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [musicVolume, setMusicVolume] = useState(0.3); // music volume 30%
  const [sfxVolume, setSfxVolume] = useState(1.0); // audio effect volume 100%
  const backgroundAudioRef = useRef<HTMLAudioElement | null>(null);

  const [playingBackgroundAudio, setplayingBackgroundAudio] = useState(false);

  useEffect(() => {
    backgroundAudioRef.current = new Audio("./assets/music/bg.mp3");
    backgroundAudioRef.current.loop = true;
    backgroundAudioRef.current.volume = musicVolume;
  }, []);

  useEffect(() => {
    if (backgroundAudioRef.current) {
      backgroundAudioRef.current.volume = musicVolume;
    }
  }, [musicVolume]);

  const playBackgroundAudio = () => {
    setplayingBackgroundAudio(true);
    backgroundAudioRef.current
      ?.play()
      .catch((error) =>
        console.error("Error playing background music:", error)
      );
  };

  const pauseBackgroundAudio = () => {
    setplayingBackgroundAudio(false);
    backgroundAudioRef.current?.pause();
  };

  const playAudioEffect = (src: string) => {
    const audioEffect = new Audio(src);
    audioEffect.volume = sfxVolume;
    audioEffect.play();
  };

  return (
    <AudioContext.Provider
      value={{
        musicVolume,
        setMusicVolume,
        sfxVolume,
        setSfxVolume,
        playBackgroundAudio,
        pauseBackgroundAudio,
        playAudioEffect,
        playingBackgroundAudio,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};
