
const AIVisualization = () => {
  return (
    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
      <div className="flex flex-col items-center space-y-4 text-white/60">
        <div className="w-px h-16 bg-gradient-to-b from-white/40 to-transparent"></div>
        <div className="animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default AIVisualization;
