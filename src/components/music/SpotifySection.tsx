import SpotifyEmbed from "./SpotifyEmbed";
import { spotifyConfig } from "../../constants/spotify";

const SpotifySection = () => {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-6 text-3xl font-bold uppercase">
          Our Music & Releases
        </h2>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-4">
          {spotifyConfig.artistId ? (
            <SpotifyEmbed artistId={spotifyConfig.artistId} />
          ) : (
            <div className="flex h-88 items-center justify-center rounded-xl border border-dashed border-zinc-700 text-zinc-400">
              Spotify artist ID not configured.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SpotifySection;
