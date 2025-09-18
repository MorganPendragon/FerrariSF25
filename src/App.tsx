import { useRef } from "react";
import { motion } from "framer-motion";
import './index.css';
import './App.css';




const fadeUp = {
  hidden: { y: -20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};


function App() {
  const car = useRef<HTMLDivElement | null>(null);
  const scrollToSection = () => {
    car.current?.scrollIntoView({ behavior: "smooth" });
  };


  return (
    <div className='sf25'>
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div className='landing'>
          <div className="landingtext">
            <h1>FERRARI SF-25</h1>
            <h2>The 2025 Scuderia Ferrari Formula 1 Car.</h2>
          </div>
          <div className="explore">
            <button onClick={scrollToSection} className="rounded-none border-none outline outline-offset-4 outline-[#FF2800] button">Explore the Car</button>
          </div>
        </div>
      </motion.div>



      <div ref={car} className='relative mx-auto car'>

        {/* ferrari pic */}
        <img src="/pics/sf25.avif" alt="sf25" className="w-[100%]"
        />

        {/* rear wing */}
        <div className="absolute top-[400px] left-[250px] flex items-center">
          <span className="mr-[50px]">Rear wing</span>
          <div className="w-[300px] h-[2px] bg-red-600"></div>
          <div className="w-3 h-3 bg-red-600 rounded-full"></div>
        </div>

        {/* tire */}
        <div className="absolute top-[750px] right-[150px] flex items-center">
          <div className="w-3 h-3 bg-red-600 rounded-full"></div>
          <div className="w-[300px] h-[2px] bg-red-600"></div>
          <span className="ml-[50px]">Font Tire</span>
        </div>

        {/* halo */}
        <div className="absolute top-[1250px] left-[250px] flex items-center">
          <span className="mr-[50px]">Halo</span>
          <div className="w-[610px] h-[2px] bg-red-600"></div>
          <div className="w-3 h-3 bg-red-600 rounded-full"></div>
        </div>
      </div>

      {/* 3d model */}
      <div className="model">
        <iframe
          title="F1 2025 Ferrari SF-25"
          src="https://sketchfab.com/models/7929bd7771d8494eaf0eb31404e24bf6/embed?autostart=1&preload=1&transparent=1&ui_theme=dark"
          allow="autoplay; fullscreen; xr-spatial-tracking"
          allowFullScreen
        ></iframe>
      </div>
    </div >
  );
}
export default App;
