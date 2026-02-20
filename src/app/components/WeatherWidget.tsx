import { motion } from 'motion/react';
import { CloudSun, Wind, Droplets } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { useEffect, useState } from 'react';

export function WeatherWidget() {
  const { t } = useLanguage();
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const formattedTime = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const dayName = time.toLocaleDateString('en-US', { weekday: 'long' });

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      whileHover={{ scale: 1.05 }}
      className="hidden md:flex flex-col gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-5 shadow-lg absolute top-8 right-8 z-20 w-[200px] cursor-default"
    >
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <span className="block font-['Quicksand'] text-white/80 text-xs font-medium uppercase tracking-wider">
            {dayName}
          </span>
          <span className="block font-['Fredoka'] text-white text-2xl font-medium">
            {formattedTime}
          </span>
        </div>
        <motion.div
          animate={{ 
            y: [0, -4, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          <CloudSun className="text-[#FDBA74] w-8 h-8" />
        </motion.div>
      </div>

      {/* Temp */}
      <div className="flex items-baseline gap-1">
        <span className="font-['Fredoka'] text-white text-4xl">28°</span>
        <span className="font-['Quicksand'] text-white/80 text-sm">Sunny</span>
      </div>

      {/* Details */}
      <div className="flex justify-between border-t border-white/10 pt-3 mt-1">
        <div className="flex items-center gap-1.5">
          <Wind className="text-white/60 w-3.5 h-3.5" />
          <span className="font-['Quicksand'] text-white/80 text-xs">12 km/h</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Droplets className="text-white/60 w-3.5 h-3.5" />
          <span className="font-['Quicksand'] text-white/80 text-xs">45%</span>
        </div>
      </div>
    </motion.div>
  );
}