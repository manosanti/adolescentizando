import React from "react";

function SpotifyPlaylist() {
  return (
    <div className="bg-slate-900 h-screen">
      <div className="max-w-7xl m-auto">
        <div className="text-white">
          <span className="font-semibold">DIRETAMENTE DO SPOTIFY:</span>
          <h2 className="font-semibold text-5xl">OUÇA A NOSSA SOUNDTRACK</h2>
        </div>

        <div>
          <h2 className="font-semibold text-5xl text-white">
            Playlist 'Adolescentizando'
          </h2>
          <iframe
            src="https://open.spotify.com/embed/playlist/6fybjFwHoWjusI4Zfo5TB0?utm_source=generator"
            width="100%"
            frameBorder="0"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="rounded-xl min-h-96"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default SpotifyPlaylist;
