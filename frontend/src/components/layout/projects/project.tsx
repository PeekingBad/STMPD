'use client';

import useWindowDimensions from 'utils/hooks/window-dimension';
import ProjectsDesktop from './projects.desktop';
import ProjectsMobile from './projects.mobile';

export default function Projects() {
  const { isMobile } = useWindowDimensions();
  return isMobile ? <ProjectsMobile /> : <ProjectsDesktop />;
}