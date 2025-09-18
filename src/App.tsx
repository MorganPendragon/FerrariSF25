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

        {/* chasis */}
        <div className="absolute top-[730px] right-[150px] flex items-center">
          <div className="w-3 h-3 bg-red-600 rounded-full"></div>
          <div className="w-[470px] h-[2px] bg-red-600"></div>
          <span className="ml-[50px]">Front Chasis</span>
        </div>

        {/* halo */}
        <div className="absolute top-[1250px] left-[250px] flex items-center">
          <span className="mr-[50px]">Halo Protection</span>
          <div className="w-[540px] h-[2px] bg-red-600"></div>
          <div className="w-3 h-3 bg-red-600 rounded-full"></div>
        </div>

        {/* cockpit */}
        <div className="absolute top-[1450px] right-[150px] flex items-center">
          <div className="w-3 h-3 bg-red-600 rounded-full"></div>
          <div className="w-[690px] h-[2px] bg-red-600"></div>
          <span className="ml-[50px]">Cockpit</span>
        </div>

        {/* rear chasis */}
        <div className="absolute top-[2300px] left-[250px] flex items-center">
          <span className="mr-[50px]">Rear Chasis</span>
          <div className="w-[400px] h-[2px] bg-red-600"></div>
          <div className="w-3 h-3 bg-red-600 rounded-full"></div>
        </div>

        {/* rear wing */}
        <div className="absolute top-[2500px] right-[150px] flex items-center">
          <div className="w-3 h-3 bg-red-600 rounded-full"></div>
          <div className="w-[670px] h-[2px] bg-red-600"></div>
          <span className="ml-[50px]">Rear Wing</span>
        </div>
      </div>

      {/* drivers section */}
      <h2 className="text-center">Drivers</h2>
      <div className="drivers relative flex justify-center">
        {/* Charles */}
        <div className="relative group">
          <img
            src="/pics/charles.avif"
            alt="Charles Leclerc"
            className="transition duration-300 group-hover:blur-sm"
          />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white p-2 rounded-lg text-center opacity-0 transition duration-300 group-hover:opacity-100">
            <h3>Charles Leclerc</h3>
            <p>Nationality: Monegasque</p>
          </div>
        </div>

        {/* Lewis */}
        <div className="relative group">
          <img
            src="/pics/lewis.avif"
            alt="Lewis Hamilton"
            className="transition duration-300 group-hover:blur-sm"
          />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white p-2 rounded-lg text-center opacity-0 transition duration-300 group-hover:opacity-100">
            <h3>Lewis Hamilton</h3>
            <p>Nationality: British</p>
          </div>
        </div>
      </div>

<div className="space">
  
</div>

      {/* 3d model */}
      <div className="model m">
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
