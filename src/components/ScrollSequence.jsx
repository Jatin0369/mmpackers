import { useRef, useState, useEffect } from "react"; // Removed useMemo (moved logic to Effect)
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

// --- CONFIGURATION ---
const TOTAL_FRAMES = 80; 

const textScenario = [
  {
    id: 1,
    text: "M&M Packers",
    subtext: "Premium Packaging Solutions",
    color: "#FFFFFF", 
    subColor: "#e5e7eb", 
    startFrame: 0,
    endFrame: 15,
    position: "center",
    className: "text-center"
  },
  {
    id: 2,
    text: "Precision Engineered",
    subtext: "Perfect Accuracy",
    color: "#fbbf24", 
    subColor: "#fde68a", 
    startFrame: 20,
    endFrame: 35,
    position: "bottom-left",
    className: "text-left"
  },
  {
    id: 3,
    text: "Eco-Friendly",
    subtext: "100% Recyclable",
    color: "#4ade80", 
    subColor: "#86efac", 
    startFrame: 40,
    endFrame: 55,
    position: "top-right",
    className: "text-right"
  },
  {
    id: 4,
    text: "Ready to Ship",
    subtext: "Global Delivery",
    color: "#60a5fa", 
    subColor: "#93c5fd", 
    startFrame: 60,
    endFrame: 75,
    position: "center",
    className: "text-center"
  }
];

const BoxSequence = () => {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const textsRef = useRef([]); 
  
  // STATE MANAGEMENT
  const [images, setImages] = useState([]);
  const [progress, setProgress] = useState(0);
  const [loadTriggered, setLoadTriggered] = useState(false); // New flag
  const [isLoading, setIsLoading] = useState(true);
  
  const loadedModeRef = useRef("desktop"); 

  // 1. LAZY LOAD TRIGGER
  // We use a simple IntersectionObserver to detect when the user scrolls close.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setLoadTriggered(true); // Start the heavy lifting
          observer.disconnect(); // Stop watching once triggered
        }
      },
      { rootMargin: "200px" } // Start loading when 200px away from the section
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);


  // 2. IMAGE LOADER (Runs only after loadTriggered is true)
  useEffect(() => {
    if (!loadTriggered || typeof window === "undefined") return;

    const screenWidth = window.innerWidth;
    const isMobile = screenWidth < 768;
    loadedModeRef.current = isMobile ? "mobile" : "desktop";

    console.log(`[LazyLoad] Starting download... Mode: ${loadedModeRef.current}`);

    const imgArray = [];
    let loadedCount = 0;
    
    const basePath = isMobile ? "/box/mobile/" : "/box/desktop/";
    const step = isMobile ? 2 : 1;
    const totalImagesToLoad = Math.ceil(TOTAL_FRAMES / step);

    // Helper to finish loading
    const checkCompletion = () => {
        loadedCount++;
        const currentProgress = Math.floor((loadedCount / totalImagesToLoad) * 100);
        
        // Update UI
        if (currentProgress % 10 === 0 || loadedCount === totalImagesToLoad) {
            setProgress(currentProgress);
        }
        
        // Finalize
        if (loadedCount === totalImagesToLoad) {
            setImages(imgArray); // Save images to state
            setIsLoading(false); // Enable GSAP
        }
    };

    for (let i = 0; i < TOTAL_FRAMES; i += step) {
      const img = new Image();
      img.src = `${basePath}box_${i.toString().padStart(3, "0")}.webp`;
      img.onload = checkCompletion;
      img.onerror = () => {
          console.warn(`Failed: ${img.src}`);
          checkCompletion();
      };
      // Important: Add to array immediately to preserve order
      imgArray.push(img); 
    }

    // Cleanup not needed for Image objects themselves, but good practice
    return () => {
        imgArray.forEach(img => img.src = "");
    };
  }, [loadTriggered]);


  // 3. GSAP ANIMATION (Waits for isLoading to be false)
  useGSAP(() => {
    if (isLoading || !canvasRef.current || images.length === 0) return; 

    // Setup Lenis (Smooth Scroll)
    const lenis = new Lenis({ lerp: 0.05, smoothWheel: true });
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const updateCanvasSize = () => {
        const isMobileMode = loadedModeRef.current === "mobile";
        const dpr = isMobileMode ? Math.min(window.devicePixelRatio, 2.0) : window.devicePixelRatio;
        canvas.width = document.documentElement.clientWidth * dpr;
        canvas.height = window.innerHeight * dpr;
        context.scale(dpr, dpr);
    };
    updateCanvasSize(); 

    const render = (frameIndex) => {
      if (!context || !canvas) return;
      const isMobileMode = loadedModeRef.current === "mobile";

      let index = Math.round(frameIndex);
      if (isMobileMode) index = Math.round(frameIndex / 2);

      index = Math.max(0, Math.min(index, images.length - 1));
      const img = images[index];
      
      if (!img || !img.complete || img.naturalWidth === 0) return;

      const cw = document.documentElement.clientWidth; 
      const ch = window.innerHeight;
      const { width: iw, height: ih } = img;

      const ratio = Math.max(cw / iw, ch / ih);
      const nw = iw * ratio;
      const nh = ih * ratio;
      const x = (cw - nw) / 2;
      const y = (ch - nh) / 2;

      context.clearRect(0, 0, cw, ch);
      context.drawImage(img, x, y, nw, nh);
    };

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=500%", 
        scrub: 1.5,
        pin: true,
        onUpdate: (self) => {
             if (loadedModeRef.current === "desktop" && canvas) {
                 const velocity = Math.abs(self.getVelocity());
                 const blur = Math.min(velocity / 2000, 3); 
                 canvas.style.filter = `blur(${blur}px)`;
             }
        }
      }
    });

    const seq = { frame: 0 };
    tl.to(seq, {
      frame: TOTAL_FRAMES - 1,
      duration: TOTAL_FRAMES,
      ease: "none",
      onUpdate: () => render(seq.frame)
    }, 0);

    textScenario.forEach((item, index) => {
      const element = textsRef.current[index];
      if(!element) return;
      tl.fromTo(element, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 5, ease: "power2.out" }, item.startFrame);
      tl.to(element, { opacity: 0, y: -30, duration: 5, ease: "power2.in" }, item.endFrame);
    });

    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (canvas) {
            updateCanvasSize();
            render(seq.frame);
        }
      }, 150);
    };

    window.addEventListener("resize", handleResize);
    render(0); 

    return () => {
      window.removeEventListener("resize", handleResize);
      lenis.destroy();
    };
  }, [isLoading, images]);

  const getPositionClasses = (pos) => {
    switch(pos) {
      case "center": return "inset-0 flex items-center justify-center";
      case "top-left": return "top-20 left-10 md:left-20";
      case "top-right": return "top-20 right-10 md:right-20";
      case "bottom-left": return "bottom-20 left-10 md:left-20";
      case "bottom-right": return "bottom-20 right-10 md:right-20";
      default: return "inset-0 flex items-center justify-center";
    }
  };

  return (
    // 'min-h-screen' ensures the observer can see it before it loads
    <section ref={sectionRef} className="relative w-full bg-black overflow-hidden h-screen min-h-screen">
      
      {/* CONTAINED LOADER 
         - Changed 'fixed inset-0' (Full Screen) to 'absolute inset-0' (Inside Box)
         - This allows the user to scroll past if they want to.
      */}
      {isLoading && (
        <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-zinc-900 text-white">
          
          {/* If trigger hasn't happened, show nothing or a static placeholder */}
          {!loadTriggered ? (
             <div className="text-zinc-600 animate-pulse text-sm">Waiting for scroll...</div>
          ) : (
            <>
              <p className="mb-4 text-xs tracking-widest uppercase text-gray-400">Loading 3D View</p>
              <div className="h-[2px] w-48 bg-gray-800 rounded-full overflow-hidden">
                <div 
                    className="h-full bg-white transition-all duration-300 ease-out" 
                    style={{ width: `${progress}%` }} 
                />
              </div>
              <p className="mt-2 text-[10px] font-mono text-gray-500">{progress}%</p>
            </>
          )}
        </div>
      )}

      {/* CANVAS */}
      <canvas ref={canvasRef} className="absolute inset-0 block w-full h-full object-cover" />

      {/* TEXT LAYER */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {textScenario.map((item, index) => (
          <div key={item.id} ref={(el) => (textsRef.current[index] = el)} className={`absolute ${getPositionClasses(item.position)} opacity-0 p-6`}>
            <div className={`max-w-lg ${item.className}`}>
              <h2 style={{ color: item.color }} className="text-4xl md:text-7xl font-black uppercase italic tracking-tighter drop-shadow-2xl leading-none">{item.text}</h2>
              <p style={{ color: item.subColor }} className="text-sm md:text-xl font-mono mt-3 uppercase tracking-widest drop-shadow-lg font-bold">{item.subtext}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BoxSequence;