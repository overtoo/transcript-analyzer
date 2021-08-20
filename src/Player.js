import React, { useState, useEffect } from "react";

const useAudio = (url, autoPlay, seekTo, refreshAudio, loadAudio) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(autoPlay);
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setTime(audio.currentTime), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  // console.log(audio.currentTime);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  // useEffect(
  //   (seekTo) => {
  //     reload();
  //     alert("worked");
  //   },
  //   [loadAudio]
  // );

  const reload = (time) => {
    audio.pause();
    // audio.load();
    // console.log(audio.currentTime);
    audio.currentTime = time;
    audio.play();
    // console.log(audio.currentTime + " is now playing");
  };

  useEffect(() => {
    // console.log(refreshAudio + " iss this chang");
    // console.log("SEEK TOO");
    reload(seekTo);
    // alert("worked");

    audio.addEventListener("ended", () => setPlaying(false));

    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, [playing, seekTo, refreshAudio, loadAudio]);

  return [playing, toggle, reload, audio.currentTime, time];
};

const Player = ({
  url,
  autoPlay,
  seekTo,
  refreshAudio,
  loadAudio,
  setGetTime,
}) => {
  const [cleanCurrentTime, setCleanCurrentTime] = useState("0: 00");
  const [playing, toggle, reload, currentTime, time] = useAudio(
    url,
    autoPlay,
    seekTo,
    refreshAudio,
    loadAudio
  );

  function display(seconds) {
    const format = (val) => `0${Math.floor(val)}`.slice(-2);
    const hours = seconds / 3600;
    const minutes = (seconds % 3600) / 60;
    setGetTime(currentTime);

    return [hours, minutes, seconds % 60].map(format).join(":");
  }

  useEffect(() => {
    setCleanCurrentTime(display(currentTime));
    setGetTime(currentTime);
  }, [time]);

  return (
    <div>
      {/* <button onClick={toggle}>{playing ? "Pause" : "Play"}</button> */}
      {/* <button
        onClick={() => {
          reload(seekTo);
        }}
      >
        {"load"}
      </button> */}
      {cleanCurrentTime} {"  "}
      {/* {(Math.round(currentTime * 10) / 10).toFixed(1)} */}
      {/* {Math.round(currentTime)} */}
    </div>
  );
};

export default Player;
