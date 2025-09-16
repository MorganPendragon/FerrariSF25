import './index.css';
import './App.css';

function App() {
  return (
    <div className='sf25'>
      <img
        src="/pics/sf25.avif"
        alt="Example"
        className="w-[100%]"
      />
      <iframe
        title="F1 2025 Ferrari SF-25"
        src="https://sketchfab.com/models/7929bd7771d8494eaf0eb31404e24bf6/embed?autostart=1&preload=1&transparent=1&ui_theme=dark"
        style={{
          width: '1900px',
          height: '1080px',
          border: 'none',
        }}
        allow="autoplay; fullscreen; xr-spatial-tracking"
        allowFullScreen
      ></iframe>
    </div>
  );
}
export default App;
