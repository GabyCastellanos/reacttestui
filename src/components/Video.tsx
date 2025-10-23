export default function Video() {
  // Replace 'YOUR_VIDEO_ID' with your actual YouTube video ID
  const videoId = '8VsAXHAJsto';

  return (
    <section id="video" className="py-20 bg-dark-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            See It In Action
          </h2>
          <p className="text-xl text-gray-400">
            Watch our demo video to see Queryosity in action
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg border-4 border-primary-500/30"
              src={`https://www.youtube.com/embed/${videoId}`}
              title="Queryosity Demo Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
