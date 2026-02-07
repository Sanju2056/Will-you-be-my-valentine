import { useRef, useState, useEffect } from "react";
import { SpeakerWaveIcon, SpeakerXMarkIcon } from "@heroicons/react/24/solid";
import { Happy } from "../../assets/music";

const Sound = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Try to play audio on component mount
  useEffect(() => {
    if (audioRef.current) {
      const playPromise = audioRef.current.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true); // audio started successfully
          })
          .catch(() => {
            // Autoplay prevented by browser, set isPlaying false
            setIsPlaying(false);
          });
      }
    }
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex items-center w-full justify-end p-4">
      <audio ref={audioRef} src={Happy} loop />

      <button
        onClick={toggleMusic}
        className="text-white rounded-full flex items-center justify-center transition-transform transform hover:scale-110"
      >
        {isPlaying ? (
          <SpeakerWaveIcon className="w-8 h-8" />
        ) : (
          <SpeakerXMarkIcon className="w-8 h-8" />
        )}
      </button>
    </div>
  );
};

export default Sound;
