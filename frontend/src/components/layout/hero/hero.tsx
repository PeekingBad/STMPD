'use client';

import useWindowDimensions from 'utils/hooks/window-dimension';
import HeroDesktop from './hero.desktop';
import HeroMobile from './hero.mobile';

export default function Hero() {
  const { isMobile } = useWindowDimensions();
  return isMobile ? <HeroMobile /> : <HeroDesktop />;
}