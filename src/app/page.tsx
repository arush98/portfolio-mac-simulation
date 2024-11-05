"use client";
import React, { useState, useEffect, ReactNode } from 'react';
import { 
  User, Wifi, Battery, Search,
  Monitor, X,Github,
  Linkedin,
  LucideIcon,
  Instagram, 
} from 'lucide-react';
import Image from 'next/image';
import ControlCenter from '@/app/components/controlCenter';
import FinderOverlay from './components/finderoverlay';
import Spotlight from './components/spotlight';
import Netflix from './components/netflix';


interface Project {
  id: number;
  title: string;
  tech: string;
  desc: string;
  url: string;
}

interface Experience {
  role: string;
  company: string;
  period: string;
  desc: string;
}

interface Notification {
  id: number;
  message: string;
}

interface DockIconProps {
  icon?: LucideIcon;
  customIconSrc?: string;
  label: string;
  bounce?: boolean;
}

interface WindowProps {
  title: string;
  onClose: () => void;
  children: ReactNode;
}

const RealisticMacOS: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>('');
  const [activeWindow, setActiveWindow] = useState<string | null>(null);
  const [isBooting, setIsBooting] = useState<boolean>(true);
  const [bootProgress, setBootProgress] = useState<number>(0);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [isControlCenterOpen, setIsControlCenterOpen] = useState<boolean>(false);
  const [isPDFViewerOpen, setIsPDFViewerOpen] = useState<boolean>(false);
  const [isFinderOpen, setIsFinderOpen] = useState<boolean>(false);
  const [isSpotlightOpen, setIsSpotlightOpen] = useState(false);
  

  const iconPath = 'svg/folder2.svg';
  const pdfUrl = 'pdf/Arush-Mishra.pdf';

  const desktopIcons = [
    { name: 'Projects', iconPath },
    { name: 'Experience', iconPath },
    { name: 'Contact', iconPath },
    { name: 'Resume', iconPath: 'svg/pdf3.svg' } 
  ];

  const projects: Project[] = [
    { id: 1, title: "Social Media App", tech: "Angular / Firebase", desc: "Interactive Full Stack platform for sharing posts, liking the post, and replying to the posts", url: "https://socialapp-e5948.web.app"  },
    { id: 2, title: "Food Resturant", tech: "React / Typescript", desc: "Restaurant website with online menu, ordering system, and table reservations", url: "https://www.alliedtechnologies.io/" },
    { id: 3, title: "Bloggin App", tech: "Angular / Firebase", desc: "Content management system for creating, publishing, and managing blog posts",url: "https://scribefp-b1d29.firebaseapp.com" },
    { id: 4, title: "Portfolio Website", tech: "Angular / Javascript", desc: "Professional portfolio showcasing projects, skills, and experience",url: "https://arushmishra-123.web.app" }
  ];

  const experience: Experience[] = [
    { role: "Founding Front End Member", company: "PeritusHub LLC", period: "2023-Present", desc: "Leading frontend development team" },
    { role: "Front End Developer Intern", company: "Sports Excitement", period: "2023-2024", desc: "Built scalable web applications" },
    { role: "Full Stack Developer", company: "Allied Technologies", period: "2020-2021", desc: "Created responsive websites" },
    { role: "Front end Developer Intern", company: "IdeaTV NEWS", period: "2019-2019", desc: "Created responsive websites" }
  ];

  const handleOpenPDFViewer: () => void = () => {
    setIsPDFViewerOpen(true);
  };
  
  const handleClosePDFViewer: () => void = () => {
    setIsPDFViewerOpen(false);
  };  

  const handleOpenFinder = () => {
    setIsFinderOpen(true);
  };

  const handleCloseFinder = () => {
    setIsFinderOpen(false);
  };


  useEffect(() => {
    const bootTimer = setTimeout(() => {
      setIsBooting(false);
      setActiveWindow("About Me"); 
    }, 3000);

    const bootInterval = setInterval(() => {
      setBootProgress((prev) => {
        if (prev >= 100) {
          clearInterval(bootInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    const clockTimer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString('en-US', { 
        hour: 'numeric', 
        minute: '2-digit',
        hour12: true 
      }));
    }, 1000);
    setTimeout(() => {
      addNotification("👋 Welcome to my portfolio! Click on the dock icons to explore.");
    }, 4000);
    return () => {
      clearTimeout(bootTimer);
      clearInterval(bootInterval);
      clearInterval(clockTimer);
    };
  }, []);

  const addNotification = (message: string) => {
    const id = Date.now();
    setNotifications((prev) => [...prev, { id, message }]);
    setTimeout(() => {
      setNotifications((prev) => prev.filter((n) => n.id !== id));
    }, 3000);
  };

  const DockIcon: React.FC<DockIconProps> = ({ icon: Icon, label, bounce = false, customIconSrc }) => (
    <button 
    onClick={() => {
      if (label === "Finder") {
        handleOpenFinder();
      }else if (label === "Music"){
        setActiveWindow("NetflixClone");
      } else {
        setActiveWindow(label);
      }
    }}
      className="group relative flex flex-col items-center"
    >
      <div 
        className={`w-14 h-14 flex items-center justify-center bg-gray-800/80 backdrop-blur-md rounded-2xl 
                    transition-all duration-200 shadow-lg border border-gray-700 ${bounce ? 'animate-bounce' : ''}
                    group-hover:z-10`}
        style={{
          transformOrigin: 'bottom',
        }}
      >
        <div 
          className="transform transition-transform duration-200 ease-out group-hover:scale-125"
        >
          {customIconSrc ? (
            <Image src={customIconSrc} alt={`${label} icon`} width={48} height={48} className="w-12 h-12" />
          ) : Icon ? (
            <Icon size={32} className="text-gray-200" />
          ) : null}
        </div>
      </div>
  
      <div 
        className="absolute -bottom-1 w-1 h-1 bg-gray-400 rounded-full 
                   opacity-0 group-hover:opacity-100 transition-opacity duration-200" 
      />
      <div 
        className="absolute -bottom-8 opacity-0 group-hover:opacity-100 
                   transition-opacity duration-200 bg-gray-800/90 backdrop-blur-md 
                   text-gray-200 px-3 py-1 rounded-lg text-sm whitespace-nowrap 
                   shadow-xl border border-gray-700"
      >
        {label}
      </div>
    </button>
  );
  

  const Window: React.FC<WindowProps> = ({ title, onClose, children }) => (
    <div 
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                w-[800px] h-[600px] bg-gray-900/95 backdrop-blur-md rounded-xl 
                shadow-2xl border border-gray-700 animate-fadeIn animate-scaleIn"
    >
      <div className="flex items-center h-10 px-4 bg-gray-800/90 
                    backdrop-blur-md rounded-t-xl border-b border-gray-700">
        <div className="flex space-x-2 items-center">
          <button 
            onClick={onClose}
            className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 
                     transition-colors flex items-center justify-center group"
          >
            <X size={8} className="opacity-0 group-hover:opacity-100 text-red-900" />
          </button>
          <button className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors" />
          <button className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors" />
        </div>
        <div className="flex-1 flex justify-center">
          <span className="text-sm text-gray-300">{title}</span>
        </div>
      </div>
      <div className="p-6 h-[calc(100%-2.5rem)] overflow-auto text-gray-200">
        {children}
      </div>
    </div>
  );

  if (isBooting) {
    return (
      <div className="h-screen w-full bg-black flex flex-col items-center justify-center">
        <Image 
          src="svg/apple-icon.svg"
          alt="Apple Logo"
          className="mb-8 animate-pulse"
          width={50} height={50}
        />
        <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
          <div 
            className="h-full bg-white transition-all duration-200 rounded-full"
            style={{ width: `${bootProgress}%` }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen w-full bg-cover bg-center relative overflow-hidden"
         style={{ backgroundImage: `url('png/bg-img3.png')` }}>
          {isFinderOpen && <FinderOverlay onClose={handleCloseFinder} />}
      <div className="fixed top-4 right-4 space-y-2 z-50">
        {notifications.map(notification => (
          <div 
            key={notification.id}
            className="bg-gray-800/90 backdrop-blur-md text-gray-200 px-4 py-2 rounded-lg shadow-lg border border-gray-700
                     animate-slideIn"
          >
            {notification.message}
          </div>
        ))}
      </div>

      {/* Menu Bar */}
      <div className="h-8 bg-gray-800/20 backdrop-blur-sm px-3 flex items-center 
                    justify-between text-gray-200 text-sm">
        <div className="flex items-center space-x-4">
          <Image src="svg/apple-icon.svg" alt="Apple Logo" width={22} height={22} className="h-4 w-4" />
          <span className="font-semibold">Arush</span>
          {/* <span className="opacity-70 hover:opacity-100 cursor-pointer">File</span>
          <span className="opacity-70 hover:opacity-100 cursor-pointer">Edit</span>
          <span className="opacity-70 hover:opacity-100 cursor-pointer">View</span>
          <span className="opacity-70 hover:opacity-100 cursor-pointer">Help</span> */}
        </div>
        <div className="flex items-center space-x-4">
          <Battery size={20} className="opacity-70" />
          <Wifi size={20} className="opacity-70" />
          <Monitor size={20} className="opacity-70" onClick={() => setIsControlCenterOpen(!isControlCenterOpen)}/>
          <Search size={20} className="opacity-70" onClick={() => setIsSpotlightOpen(!isSpotlightOpen)}/>
        
          <span className="font-medium">{currentTime}</span>
        </div>
      </div>

      <div className="grid grid-cols-8 gap-4 p-6">
  {desktopIcons.map((icon) => {
    const { name, iconPath } = icon;
    return (
      <button
        key={name}
        className="flex flex-col items-center group"
        onClick={() => {
          if (name === 'Resume') {
            handleOpenPDFViewer();
          } else {
            setActiveWindow(name);
          }
        }}
      >
        <div className="w-16 h-16 flex items-center justify-center rounded-xl group-hover:bg-gray-700/80 transition-colors">
          <img src={iconPath} alt={`${name} icon`} width={52} height={52} className="w-18 h-18" />
        </div>
        <span className="text-sm text-gray-200 font-bold rounded">{name}</span>
      </button>
    );
  })}
</div>


      {isPDFViewerOpen && (
        <Window title="Resume" onClose={handleClosePDFViewer}>
          <div className="h-full flex justify-center items-center">
            <iframe 
              src={pdfUrl} 
              width="100%" 
              height="100%" 
              className="rounded-lg shadow-lg border border-gray-700"
              title="Resume PDF"
            />
          </div>
        </Window>
      )}

      {activeWindow && (
        <Window title={activeWindow} onClose={() => setActiveWindow(null)}>
          {activeWindow === "About Me" && (
      <div className="space-y-6">
        {/* Profile Section */}
        <div className="flex items-center space-x-6">
          <div className="w-32 h-32 rounded-xl bg-gray-800 flex items-center justify-center border border-gray-700">
            {/* <User size={64} className="text-gray-400" /> */}
            <Image src="/jpg/dp.jpg" alt="Arush Mishra" width={128} height={128} className="object-cover rounded rounded-lg " />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-200">Arush Mishra</h2>
            <p className="text-gray-400">Full Stack Developer</p>
            <div className="flex space-x-3 mt-4">
            <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
                <Github className="text-gray-400 hover:text-gray-200 cursor-pointer" />
              </a>
              <a href="www.linkedin.com/in/arush-mishra" target="_blank" rel="noopener noreferrer">
                <Linkedin className="text-gray-400 hover:text-gray-200 cursor-pointer" />
              </a>
              <a href="https://instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
                <Instagram className="text-gray-400 hover:text-gray-200 cursor-pointer" />
              </a>
            </div>
          </div>
        </div>

        {/* Summary Section */}
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <p className="text-gray-300 leading-relaxed">
            A passionate developer with 3+ years of experience in building modern web applications.
            Specialized in Nextjs, React, Angular, TailwindCSS, Node.js, and Python.
          </p>
        </div>
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 space-y-4">
          <h3 className="text-xl font-semibold text-gray-200">Education</h3>
          <div className="space-y-2">
            <p className="text-gray-400">
              <span className="font-medium text-gray-300">Bachelors:</span> APJ Abdul Kalam Technical University
            </p>
            <p className="text-gray-400">
              <span className="font-medium text-gray-300">Masters:</span> University of North Carolina at Charlotte (UNCC)
            </p>
          </div>
        </div>
        <div className="flex space-x-3 mt-6">
          <button
            onClick={() => setActiveWindow("Projects")}
            className="px-4 py-2 rounded-md border border-gray-600 text-gray-300 bg-gray-800/80 
                      hover:bg-gray-700/90 hover:text-white transition-all duration-200 
                      shadow-lg focus:ring-2 focus:ring-gray-600 focus:ring-offset-2 
                      focus:ring-offset-gray-900"
          >
            Projects
          </button>
          <button
            onClick={() => setActiveWindow("Experience")}
            className="px-4 py-2 rounded-md border border-gray-600 text-gray-300 bg-gray-800/80 
                      hover:bg-gray-700/90 hover:text-white transition-all duration-200 
                      shadow-lg focus:ring-2 focus:ring-gray-600 focus:ring-offset-2 
                      focus:ring-offset-gray-900"
          >
            Experience
          </button>
        </div>
      </div>
    )}  
    {activeWindow === "NetflixClone" && (
  <Window title="Netflix Clone" onClose={() => setActiveWindow(null)}>
    <div className="h-full overflow-auto">
      <Netflix />
    </div>
  </Window>
)}

          {activeWindow === "Projects" && (
            <div className="grid grid-cols-2 gap-6">
              {projects.map((project) => (
                <a key={project.id} 
                href={project.url}
                target="_blank"
                rel = "noopener noreferrer"
                className="p-6 bg-gray-800 rounded-xl shadow-lg border border-gray-700
                  relative overflow-hidden cursor-pointer transition-all duration-300 
                  transform hover:scale-105 hover:shadow-xl hover:shadow-gray-900/50"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white opacity-0 
                        hover:opacity-20 transform scale-150 -rotate-45 
                        transition duration-500 ease-in-out 
                        hover:translate-x-full"></div>

                  <h3 className="font-bold text-xl text-gray-200">{project.title}</h3>
                  <p className="text-gray-400 text-sm mt-1">{project.tech}</p>
                  <p className="text-gray-300 mt-3">{project.desc}</p>
                </a>
              ))}
            </div>
          )}
          {activeWindow === "Experience" && (
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <div key={index} className="p-6 bg-gray-800 rounded-xl shadow-lg border border-gray-700
                relative overflow-hidden cursor-pointer transition-all duration-300 
                transform hover:scale-105 hover:shadow-xl hover:shadow-gray-900/50"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white opacity-0 
                      hover:opacity-20 transform scale-150 -rotate-45 
                      transition duration-500 ease-in-out 
                      hover:translate-x-full"></div>

                  <h3 className="font-bold text-xl text-gray-200">{exp.role}</h3>
                  <p className="text-gray-400">{exp.company} • {exp.period}</p>
                  <p className="text-gray-300 mt-2">{exp.desc}</p>
                </div>
              ))}
            </div>
          )}
          {activeWindow === "Contact" && (
            <div className="space-y-6">
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <h3 className="text-xl font-bold mb-4">Get in touch</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 bg-gray-900 rounded-lg border border-gray-700 
                               focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none
                               text-gray-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-2 bg-gray-900 rounded-lg border border-gray-700 
                               focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none
                               text-gray-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                    <textarea 
                      className="w-full px-4 py-2 bg-gray-900 rounded-lg border border-gray-700 
                               focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none
                               text-gray-200"
                      rows={4}
                    />
                  </div>
                  <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 
                                   transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 
                                   focus:ring-offset-gray-900">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          )}
        </Window>
      )}

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 
                    bg-gray-800/80 backdrop-blur-xl rounded-2xl p-2 
                    flex items-end space-x-4 shadow-2xl border border-gray-700">
        <DockIcon customIconSrc="svg/finder-icon.svg" label="Finder" />
        <DockIcon icon={User} label="About Me" />
        <DockIcon customIconSrc="svg/mail-icon.svg" label="Contact" />
        <DockIcon customIconSrc="svg/safari-icon.svg" label="Browser" />
        <DockIcon customIconSrc="svg/settings-icon.svg" label="Settings" />
        <DockIcon customIconSrc="svg/music-icon.svg" label="Music" />
      </div>
      {isControlCenterOpen && (
        <div className="fixed top-8 right-4 z-50">
          <ControlCenter isVisible={isControlCenterOpen}/>
          </div> 
      )}
                  {isSpotlightOpen && <Spotlight onClose={() => setIsSpotlightOpen(false)} />}


    </div>
  );
};

export default RealisticMacOS;
