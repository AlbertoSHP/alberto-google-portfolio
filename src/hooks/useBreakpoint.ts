import { useEffect, useState } from "react";
import { breakpoints } from "../shared/styles/breakpoints";

export const useBreakpoint = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    isSmallMobile: width < breakpoints.xs,
    isLargeMobile: width >= breakpoints.xs && width < breakpoints.sm,
    isMobile: width < breakpoints.sm,
    isTablet: width >= breakpoints.sm && width < breakpoints.md,
    isDesktop: width >= breakpoints.md,
  };
}