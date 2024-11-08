import { Wifi, Bluetooth, Airplay, Moon, Layout, ScreenShare, Volume2, Sun } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

interface ControlCenterProps {
  isVisible: boolean;
}

const ControlCenter: React.FC<ControlCenterProps> = ({ isVisible }) => {
    const [brightness, setbrightness] = useState(100);

  if (!isVisible) return null;

  return (
    <>
    <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'black',
          opacity: (100 - brightness) / 100,
          pointerEvents: 'none',
          zIndex: 40,
        }}
      ></div>

    <div className="fixed top-12 right-4 w-80 bg-gray-800/60 backdrop-blur-md text-white rounded-xl shadow-lg p-4 z-50 border border-gray-700 space-y-4">
      
      <div className="p-3 rounded-lg bg-gray-800/80">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center space-x-2">
            <Wifi size={20} />
            <div>
              <p className="text-sm font-semibold">Wi-Fi</p>
              <p className="text-xs text-gray-400">University Terrace_Guest</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Bluetooth size={20} />
            <div>
              <p className="text-sm font-semibold">Bluetooth</p>
              <p className="text-xs text-gray-400">On</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Airplay size={20} />
            <div>
              <p className="text-sm font-semibold">AirDrop</p>
              <p className="text-xs text-gray-400">Contacts Only</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Moon size={20} />
            <div>
              <p className="text-sm font-semibold">Focus</p>
              <p className="text-xs text-gray-400">Do Not Disturb</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex space-x-2 p-3 rounded-lg bg-gray-800/80">
        <div className="flex items-center space-x-2 bg-gray-700/80 p-2 rounded-lg">
          <Layout size={20} />
          <p className="text-sm font-semibold">Stage Manager</p>
        </div>
        <div className="flex items-center space-x-2 bg-gray-700/80 p-2 rounded-lg">
          <ScreenShare size={20} />
          <p className="text-sm font-semibold">Screen Mirroring</p>
        </div>
      </div>


      <div className="p-3 rounded-lg bg-gray-800/80 space-y-2">
        <p className="text-sm font-semibold">Display</p>
        <input type="range" className="w-full bg-gray-600 accent-white cursor-pointer" min="0" max="100" value={brightness}
        onChange= {(e) => setbrightness(Number(e.target.value))} />
      </div>

      <div className="p-3 rounded-lg bg-gray-800/80 space-y-2">
        <p className="text-sm font-semibold">Sound</p>
        <input type="range" className="w-full bg-gray-600 accent-white cursor-pointer" min="0" max="100" defaultValue="50" />
      </div>

      <div className="p-3 rounded-lg bg-gray-800/80 flex items-center space-x-3">
        <Image src="svg/music-icon.svg" alt="Album Art" width={40} height={40} className="rounded-md" />
        <div className="flex-1">
          <p className="text-sm font-semibold">Beautiful World</p>
          <p className="text-xs text-gray-400">When Chai Met Toast</p>
        </div>
        <button>
          <Volume2 size={20} className="text-white" />
        </button>
      </div>
      <div className="flex items-center justify-around pt-2 border-t border-gray-700 bg-gray-800/80 rounded-lg p-3">
        <button className="flex flex-col items-center text-gray-400 hover:text-white">
          <Volume2 size={20} />
          <p className="text-xs">Sound</p>
        </button>
        <button className="flex flex-col items-center text-gray-400 hover:text-white">
          <Sun size={20} />
          <p className="text-xs">Display</p>
        </button>
      </div>
    </div>
    </>
  );
};

export default ControlCenter;
