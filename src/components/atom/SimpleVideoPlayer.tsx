'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, X } from 'lucide-react';

const SimpleVideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(70);
  const [currentVideo, setCurrentVideo] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [isOpenDetail, setIsOpenDetail] = useState(false);
  const [isMiniPlayer, setIsMiniPlayer] = useState(false);

  const videoRef: any = useRef(null);

  // Daftar video lokal (pastikan file ada di folder public)
  const videos = [
    {
      title: 'Bergema Selamanya',
      src: '/nadhif.mp4',
      thumbnail: '/nadhif.jpg',
    },
    {
      title: 'Hearthbreak Anniversary',
      src: '/hearthbreak.mp4',
      thumbnail: '/hearthbreak.jpg',
    },
    {
      title: 'Serta Mulia',
      src: '/sal.mp4',
      thumbnail: '/sal.jpg',
    },
    {
      title: 'Sampai jadi debu',
      src: '/bandaneira.mp4',
      thumbnail: '/bandaneira.jpg',
    },
  ];

  const currentTrack = videos[currentVideo];

  useEffect(() => {
    const video: any = videoRef.current;
    if (!video) return;

    const updateTime = () => setCurrentTime(video.currentTime);
    const updateDuration = () => setDuration(video.duration);
    const handleEnded = () => {
      setIsPlaying(false);
      if (autoPlay) {
        nextVideo();
      }
    };

    video.addEventListener('timeupdate', updateTime);
    video.addEventListener('loadedmetadata', updateDuration);
    video.addEventListener('ended', handleEnded);
    video.volume = volume / 100;

    return () => {
      video.removeEventListener('timeupdate', updateTime);
      video.removeEventListener('loadedmetadata', updateDuration);
      video.removeEventListener('ended', handleEnded);
    };
  }, [currentVideo, autoPlay]);

  // Effect untuk autoplay ketika video baru dimuat
  useEffect(() => {
    const video: any = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => {
      if (autoPlay && !isPlaying) {
        // Tambah delay kecil untuk memastikan video ready
        setTimeout(() => {
          video
            .play()
            .then(() => {
              setIsPlaying(true);
            })
            .catch((error: any) => {
              console.log('Autoplay gagal:', error);
              // Coba lagi dengan muted autoplay
              video.muted = true;
              return video.play();
            })
            .then(() => {
              setIsPlaying(true);
              // Unmute setelah berhasil play
              setTimeout(() => {
                video.muted = false;
              }, 100);
            })
            .catch((error: any) => {
              console.log('Autoplay tetap gagal:', error);
            });
        }, 100);
      }
    };

    const handleLoadedData = () => {
      if (autoPlay && !isPlaying) {
        handleCanPlay();
      }
    };

    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('loadeddata', handleLoadedData);

    // Trigger langsung jika video sudah ready
    if (video.readyState >= 2) {
      // HAVE_CURRENT_DATA atau lebih
      handleCanPlay();
    }

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('loadeddata', handleLoadedData);
    };
  }, [currentVideo, autoPlay, isPlaying]);

  // Effect khusus untuk autoplay saat pertama kali load
  useEffect(() => {
    const video: any = videoRef.current;
    if (!video || !autoPlay) return;

    const startAutoplay = () => {
      // Coba autoplay dengan volume
      video
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          // Jika gagal, coba dengan muted
          video.muted = true;
          return video.play();
        })
        .then(() => {
          setIsPlaying(true);
          // Unmute setelah 1 detik
          setTimeout(() => {
            video.muted = false;
          }, 1000);
        })
        .catch((error: any) => {
          console.log('Autoplay gagal:', error);
        });
    };

    // Delay untuk memastikan komponen sudah fully mounted
    const timer = setTimeout(startAutoplay, 500);

    return () => clearTimeout(timer);
  }, []); // Hanya run sekali saat mount

  const togglePlay = () => {
    const video: any = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  const nextVideo = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
    setIsPlaying(false);
  };

  const prevVideo = () => {
    setCurrentVideo((prev) => (prev - 1 + videos.length) % videos.length);
    setIsPlaying(false);
  };

  const selectVideo = (index: any) => {
    setCurrentVideo(index);
    setIsPlaying(false);
  };

  const toggleAutoPlay = () => {
    setAutoPlay(!autoPlay);
  };

  const handleProgressClick = (e: any) => {
    const video: any = videoRef.current;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newTime = (clickX / rect.width) * duration;
    video.currentTime = newTime;
  };

  const handleVolumeChange = (e: any) => {
    const newVolume: any = parseInt(e.target.value);
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume / 100;
    }
  };

  const formatTime = (time: any) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const progressPercentage = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div className="fixed bottom-4 left-1/2 z-50 w-96 -translate-x-1/2 transform sm:right-2 sm:left-auto sm:-translate-0 sm:transform-none">
      {/* Shared Video Element - Always present */}
      <video
        ref={videoRef}
        src={currentTrack.src}
        style={{ display: 'none' }}
        preload="auto"
        playsInline
        muted={false}
      />

      {!isOpenDetail ? (
        // Mini Player
        <>
          {isMiniPlayer ? (
            <div className='flex justify-end'>
              <img
                src={currentTrack.thumbnail}
                alt={currentTrack.title}
                style={{ animationDuration: '10s' }}
                className="h-17 w-17 animate-spin cursor-pointer rounded-full border border-green-600/30 object-cover"
                onError={(e: any) => {
                  e.target.src =
                    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjE4MCIgdmlld0JveD0iMCAwIDMyMCAxODAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMjAiIGhlaWdodD0iMTgwIiBmaWxsPSIjMzc0MTUxIi8+Cjx0ZXh0IHg9IjE2MCIgeT0iOTAiIGZpbGw9IiM5Q0EzQUYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZHk9Ii4zZW0iPk5vIFRodW1ibmFpbDwvdGV4dD4KPC9zdmc+';
                }}
                onClick={() => setIsMiniPlayer((PREV) => !PREV)}
              />
            </div>
          ) : null}
          {!isMiniPlayer ? (
            <div className="rounded-xl border border-green-600/30 bg-black/90 p-4 text-white shadow-2xl backdrop-blur-lg">
              <div className="flex justify-end pb-2">
                <X
                  className="h-4 w-4 cursor-pointer"
                  onClick={() => setIsMiniPlayer((PREV) => !PREV)}
                />
              </div>
              <div className="flex items-center justify-between gap-6">
                <div
                  className="flex flex-1 cursor-pointer items-center gap-3"
                  onClick={() => setIsOpenDetail(true)}
                >
                  <img
                    src={currentTrack.thumbnail}
                    alt={currentTrack.title}
                    className="h-9 w-9 rounded-full object-cover"
                    onError={(e: any) => {
                      e.target.src =
                        'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjE4MCIgdmlld0JveD0iMCAwIDMyMCAxODAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMjAiIGhlaWdodD0iMTgwIiBmaWxsPSIjMzc0MTUxIi8+Cjx0ZXh0IHg9IjE2MCIgeT0iOTAiIGZpbGw9IiM5Q0EzQUYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZHk9Ii4zZW0iPk5vIFRodW1ibmFpbDwvdGV4dD4KPC9zdmc+';
                    }}
                  />
                  <div className="flex-1">
                    <div className="truncate text-sm font-medium">
                      {currentTrack.title}
                    </div>
                    <div className="text-xs text-white/70">
                      {currentVideo + 1}/{videos.length} •{' '}
                      {formatTime(currentTime)}/{formatTime(duration)}
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      togglePlay();
                    }}
                    className="rounded-full bg-white p-2 text-black transition-all hover:bg-white/90"
                  >
                    {isPlaying ? (
                      <Pause className="h-4 w-4" />
                    ) : (
                      <Play className="ml-0.5 h-4 w-4" />
                    )}
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      nextVideo();
                    }}
                    className="rounded bg-white/10 px-2 py-1 text-xs text-white/70 hover:text-white"
                  >
                    Next
                  </button>
                </div>
              </div>

              {/* Mini Progress Bar */}
              <div className="mt-3">
                <div
                  className="h-1 w-full cursor-pointer rounded-full bg-white/20"
                  onClick={handleProgressClick}
                >
                  <div
                    className="h-full rounded-full bg-white transition-all"
                    style={{ width: `${progressPercentage}%` }}
                  />
                </div>
              </div>
            </div>
          ) : null}
        </>
      ) : (
        // Detailed Player
        <div className="rounded-xl border border-green-600/30 bg-black/90 p-4 text-white shadow-2xl backdrop-blur-lg">
          {/* Header */}
          <div className="mb-3 flex items-center justify-between">
            <h3 className="truncate text-sm font-medium">
              {currentTrack.title} ({currentVideo + 1}/{videos.length})
            </h3>
            <button
              className="rounded p-1 hover:bg-white/10"
              onClick={() => setIsOpenDetail(false)}
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Video Thumbnail */}
          <div className="relative mb-3">
            <img
              src={currentTrack.thumbnail}
              alt={currentTrack.title}
              className="h-32 w-full rounded-lg object-cover"
              onError={(e: any) => {
                e.target.src =
                  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjE4MCIgdmlld0JveD0iMCAwIDMyMCAxODAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMjAiIGhlaWdodD0iMTgwIiBmaWxsPSIjMzc0MTUxIi8+Cjx0ZXh0IHg9IjE2MCIgeT0iOTAiIGZpbGw9IiM5Q0EzQUYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZHk9Ii4zZW0iPk5vIFRodW1ibmFpbDwvdGV4dD4KPC9zdmc+';
              }}
            />
            {/* Play overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={togglePlay}
                className="rounded-full bg-white/20 p-3 backdrop-blur-sm transition-all hover:bg-white/30"
              >
                {isPlaying ? (
                  <Pause className="h-6 w-6" />
                ) : (
                  <Play className="ml-1 h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-3">
            <div
              className="h-1 w-full cursor-pointer rounded-full bg-white/20"
              onClick={handleProgressClick}
            >
              <div
                className="h-full rounded-full bg-white transition-all"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
            <div className="mt-1 flex justify-between text-xs text-white/70">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          {/* Controls */}
          <div className="mb-3 flex items-center justify-between">
            {/* Play/Previous/Next buttons */}
            <div className="flex items-center space-x-2">
              <button
                onClick={prevVideo}
                className="rounded bg-white/10 px-2 py-1 text-xs text-white/70 hover:text-white"
              >
                Prev
              </button>
              <button
                onClick={togglePlay}
                className="rounded-full bg-white p-2 text-black transition-all hover:bg-white/90"
              >
                {isPlaying ? (
                  <Pause className="h-4 w-4" />
                ) : (
                  <Play className="ml-0.5 h-4 w-4" />
                )}
              </button>
              <button
                onClick={nextVideo}
                className="rounded bg-white/10 px-2 py-1 text-xs text-white/70 hover:text-white"
              >
                Next
              </button>
            </div>

            {/* Volume */}
            <div className="flex items-center space-x-2">
              <Volume2 className="h-4 w-4 text-white/70" />
              <input
                type="range"
                min="0"
                max="100"
                value={volume}
                onChange={handleVolumeChange}
                className="slider h-1 w-16 cursor-pointer appearance-none rounded-full bg-white/20"
              />
            </div>
          </div>

          {/* AutoPlay Toggle & Status */}
          <div className="mb-3 flex items-center justify-between text-xs">
            <div className="flex items-center space-x-2">
              <span className="text-white/70">AutoPlay:</span>
              <button
                onClick={toggleAutoPlay}
                className={`rounded-full px-3 py-1 transition-all ${
                  autoPlay
                    ? 'bg-green-500 text-white'
                    : 'bg-white/20 text-white/70'
                }`}
              >
                {autoPlay ? 'ON' : 'OFF'}
              </button>
            </div>
            <div
              className={`rounded px-2 py-1 text-xs ${
                isPlaying
                  ? 'bg-green-500/20 text-green-400'
                  : 'bg-white/10 text-white/50'
              }`}
            >
              {isPlaying ? '▶ Playing' : '⏸ Paused'}
            </div>
          </div>

          {/* Playlist */}
          <div className="border-t border-white/20 pt-3">
            <p className="mb-2 text-xs text-white/70">Playlist:</p>
            <div className="space-y-1">
              {videos.map((video, index) => (
                <button
                  key={index}
                  onClick={() => selectVideo(index)}
                  className={`w-full rounded p-2 text-left text-xs transition-all ${
                    currentVideo === index
                      ? 'bg-white/20 text-white'
                      : 'text-white/70 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {index + 1}. {video.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: white;
          cursor: pointer;
        }
        .slider::-moz-range-thumb {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: white;
          cursor: pointer;
          border: none;
        }
      `}</style>
    </div>
  );
};

export default SimpleVideoPlayer;
