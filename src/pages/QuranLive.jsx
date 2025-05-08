const QuranLive = () => (
  <div className="text-center py-16">
    <h2 className="text-3xl font-bold text-[#0077B6] mb-4">Live Quran Stream</h2>
    <p className="text-gray-700 mb-8">
      Tune in to listen to live Quran recitations 24/7 from the holy cities of Mecca and Madinah.
    </p>
    <div className="aspect-video w-full max-w-3xl mx-auto border-4 border-[#0077B6] rounded-xl overflow-hidden shadow-xl">
      <iframe 
        className="w-full h-full" 
        src="https://www.youtube.com/embed/live_stream?channel=UCI4yIyGn1RZl9MFtU2klx-Q" 
        title="Live Quran Stream" 
        allowFullScreen
      />
    </div>
  </div>
);

export default QuranLive;
