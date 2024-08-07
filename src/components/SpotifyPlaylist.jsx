import React from "react";

// Images
import spotifyBrand from '../img/spotify.png'

function SpotifyPlaylist() {
  return (
    <div className="bg-slate-900 min-h-screen py-12 px-4 xl:min-h-screen flex items-center">
      <div className="2xl:max-w-7xl xl:max-w-6xl xl:py-16 mx-auto">
        <div className="text-white xl:mb-24 mb-12">
          <span className="font-semibold">DIRETAMENTE DO SPOTIFY:</span>
          <h2 className="font-semibold xl:text-5xl text-3xl">OUÇA A NOSSA PLAYLIST</h2>
          <a href="https://open.spotify.com/playlist/6fybjFwHoWjusI4Zfo5TB0?go=1&sp_cid=c1cc0a52147e8ae9b40d375b5aa307cc&utm_source=embed_player_p&utm_medium=desktop&nd=1&dlsi=061d63d65e12484c" target="_blank"><img src={spotifyBrand} className="w-2/4 mt-4 xl:w-2/5" alt="" /></a>
        </div>

        <div>
          <h2 className="font-semibold text-green-500 mb-3 xl:text-5xl text-3xl">
            Playlist Adolescentizando
          </h2>
          <iframe
            src="https://open.spotify.com/embed/playlist/6fybjFwHoWjusI4Zfo5TB0?utm_source=generator"
            frameBorder="0"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="rounded-xl min-h-96 w-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default SpotifyPlaylist;
