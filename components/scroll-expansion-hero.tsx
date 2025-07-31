'use client';

import {
  useEffect,
  useRef,
  useState,
  ReactNode,
  TouchEvent,
  WheelEvent,
} from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
// import { LiquidButton } from './liquid-glass-button';
import { Button } from './ui/button';
// import { Ship } from 'lucide-react';

interface ScrollExpandMediaProps {
  mediaType?: 'video' | 'image';
  mediaSrc: string;
  posterSrc?: string;
  bgImageSrc: string;
  title?: string;
  date?: string;
  scrollToExpand?: string;
  textBlend?: boolean;
  children?: ReactNode;
}

const ScrollExpandMedia = ({
  mediaType = 'video',
  mediaSrc,
  posterSrc,
  bgImageSrc,
  title,
  date,
  scrollToExpand,
  textBlend,
  children,
}: ScrollExpandMediaProps) => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [showContent, setShowContent] = useState<boolean>(false);
  const [mediaFullyExpanded, setMediaFullyExpanded] = useState<boolean>(false);
  const [touchStartY, setTouchStartY] = useState<number>(0);
  const [isMobileState, setIsMobileState] = useState<boolean>(false);

  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setScrollProgress(0);
    setShowContent(false);
    setMediaFullyExpanded(false);
  }, [mediaType]);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      const scrollY = window.scrollY;
      // Calculate progress based on scroll position within the section
      const progress = Math.min(Math.max((scrollY - sectionTop) / (sectionHeight - window.innerHeight), 0), 1);
      setScrollProgress(progress);
      if (progress >= 1) {
        setMediaFullyExpanded(true);
        setShowContent(true);
      } else {
        setMediaFullyExpanded(false);
        if (progress < 0.75) setShowContent(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    // Initial call in case already scrolled
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const checkIfMobile = (): void => {
      setIsMobileState(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const mediaWidth = 300 + scrollProgress * (isMobileState ? 650 : 1250);
  const mediaHeight = 400 + scrollProgress * (isMobileState ? 200 : 400);
  const textTranslateX = scrollProgress * (isMobileState ? 180 : 150);

  const firstWord = title ? title.split(' ')[0] : '';
  const restOfTitle = title ? title.split(' ').slice(1).join(' ') : '';

  const isLocked = scrollProgress < 1;

  return (
    <div
      ref={sectionRef}
      className='transition-colors duration-700 ease-in-out overflow-x-hidden'
      style={{ minHeight: '200vh' }} // Make section tall enough for scroll expansion
    >
      <section
        className='relative flex flex-col items-center justify-start min-h-[200vh]'
      >
        <div ref={sectionRef} style={{ minHeight: '200vh', position: 'relative' }}>
          {/* Spacer: only visible when not locked */}
          {!isLocked && (
            <div style={{ width: '100vw', height: '100vh' }} />
          )}

          <div
            style={{
              position: isLocked ? 'fixed' : 'relative',
              top: isLocked ? 0 : undefined,
              left: isLocked ? 0 : undefined,
              width: '100vw',
              height: '100vh',
              zIndex: 10,
              pointerEvents: 'auto',
            }}
            className='w-full h-full flex flex-col items-center justify-center'
          >
            {/* Expansion content starts here */}
            <motion.div
              className='absolute inset-0 z-0 h-full'
              // initial={{ opacity: 1 }}
              // animate={{ opacity: 1 - scrollProgress }}
              // transition={{ duration: 0.1 }}
            >
              <Image
                src={bgImageSrc}
                alt='Background'
                width={1920}
                height={1080}
                className='w-screen h-screen blur-xs'
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
                priority
              />
              <div className='absolute inset-0 bg-black/10' />
            </motion.div>
            <div className='container mx-auto flex flex-col items-center justify-start relative z-10'>
              <div className='flex flex-col items-center justify-center w-full h-[100dvh] relative p-4'>
                <motion.div
                  className='absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-none rounded-2xl'
                  initial={{ x: 400 }}
                  animate={{ x: 400 - scrollProgress * 400 }}
                  transition={{ duration: 0.1 }}
                  style={{
                    width: `${mediaWidth}px`,
                    height: `${mediaHeight}px`,
                    maxWidth: '95vw',
                    maxHeight: '85vh',
                    boxShadow: '0px 0px 50px rgba(0, 0, 0, 0.3)',
                  }}
                >
                  {mediaType === 'video' ? (
                    mediaSrc.includes('youtube.com') ? (
                      <div className='relative w-full h-full pointer-events-none'>
                        <iframe
                          width='100%'
                          height='100%'
                          src={
                            mediaSrc.includes('embed')
                              ? mediaSrc +
                                (mediaSrc.includes('?') ? '&' : '?') +
                                'autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1'
                              : mediaSrc.replace('watch?v=', 'embed/') +
                                '?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1&playlist=' +
                                  mediaSrc.split('v=')[1]
                          }
                          className='w-full h-full rounded-xl'
                          frameBorder='0'
                          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                          allowFullScreen
                        />
                        <div
                          className='absolute inset-0 z-10'
                          style={{ pointerEvents: 'none' }}
                        ></div>
                        <motion.div
                          className='absolute inset-0 bg-black/30 rounded-xl'
                          initial={{ opacity: 0.7 }}
                          animate={{ opacity: 0.5 - scrollProgress * 0.3 }}
                          transition={{ duration: 0.2 }}
                        />
                      </div>
                    ) : (
                      <div className='relative w-full h-full pointer-events-none'>
                        <video
                          src={mediaSrc}
                          poster={posterSrc}
                          autoPlay
                          muted
                          loop
                          playsInline
                          preload='auto'
                          className='w-full h-full object-cover rounded-xl'
                          controls={false}
                          disablePictureInPicture
                          disableRemotePlayback
                        />
                        <div
                          className='absolute inset-0 z-10'
                          style={{ pointerEvents: 'none' }}
                        ></div>
                        <motion.div
                          className='absolute inset-0 bg-black/30 rounded-xl'
                          initial={{ opacity: 0.7 }}
                          animate={{ opacity: 0.5 - scrollProgress * 0.3 }}
                          transition={{ duration: 0.2 }}
                        />
                      </div>
                    )
                  ) : (
                    <div className='relative w-full h-full'>
                      <Image
                        src={mediaSrc}
                        alt={title || 'Media content'}
                        width={1280}
                        height={720}
                        className='w-full h-full object-cover rounded-xl'
                      />
                      <motion.div
                        className='absolute inset-0 bg-black/30 rounded-xl'
                        initial={{ opacity: 0.7 }}
                        animate={{ opacity: 0.7 - scrollProgress * 0.3 }}
                        transition={{ duration: 0.2 }}
                      />
                    </div>
                  )}
                  <div className='flex flex-col items-center text-center relative z-10 mt-4 transition-none'>
                    {date && (
                      <p
                        className='text-2xl text-[#0000006e]'
                        style={{ transform: `translateX(-${textTranslateX}vw)` }}
                      >
                        {date}
                      </p>
                    )}
                    {scrollToExpand && (
                      <p
                        className='text-[#0000006e] font-medium text-center'
                        style={{ transform: `translateX(${textTranslateX}vw)` }}
                      >
                        {scrollToExpand}
                      </p>
                    )}
                  </div>
                </motion.div>
                <div
                  className={` flex items-center self-start  gap-14  relative z-10 transition-none flex-col ${textBlend ? 'mix-blend-difference' : 'mix-blend-normal'
                    }`}
                >
                  <motion.h2
                    className='text-start w-full firstLogo text-4xl md:text-5xl lg:text-6xl font-bold text-white transition-none'
                    style={{ transform: `translateX(-${textTranslateX}vw)` }}
                  >
                    Cruise Hurghada in Style
                  </motion.h2>
                  <motion.p
                    className='text-start  w-full firstLogo text-xl md:text-xl lg:text-xl font-bold  text-white transition-none'
                    style={{ transform: `translateX(${textTranslateX}vw)` }}
                  >
                    Snorkel with Dolphins • Sunset Cruises • Private Charters
                  </motion.p>
                  <motion.div
                    style={{ transform: `translateX(${textTranslateX}vw)` }}
                    className="relative flex  w-full ">
                    <Button className='bg-[#f08c2e] rounded-3xl  text-2xl w-[250px] p-6'>
                      {/* <Ship className="w-4 h-4" /> */}
                      <span >View Trips</span>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
          {/* End of sticky/fixed expansion content */}
        </div>
      </section>
    </div>
  );
};

export default ScrollExpandMedia;
