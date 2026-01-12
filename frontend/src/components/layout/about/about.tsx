'use client';

import useWindowDimensions from 'utils/hooks/window-dimension';
import AboutMobile from './about.mobile';
import AboutDesktop from './about.desktop';


export default function Hero() {
  const { isMobile } = useWindowDimensions();
  return isMobile ? <AboutMobile /> : <AboutDesktop />;
}