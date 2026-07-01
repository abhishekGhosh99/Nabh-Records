interface spotifyEmbedProps {
  artistId: string;
}

const SpotifyEmbed = ({ artistId }: spotifyEmbedProps) => {
  return (
    <iframe
      title="Spotify Artist"
      src={`https://open.spotify.com/embed/artist/${artistId}?utm_source=generator&theme=0`}
      width="100%"
      height="380"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
      className="rounded-2xl"
    />
  );
};

export default SpotifyEmbed;
