"use client";

import { useEffect, useMemo, useState } from "react";

export type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

interface BreakpointConfig {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  "2xl": number;
}

const defaultBreakpoints: BreakpointConfig = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1800,
  "2xl": 1801,
};

export const useBreakpoint = (
  customBreakpoints?: Partial<BreakpointConfig>,
) => {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>("xs");

  const breakpoints = useMemo(() => {
    return { ...defaultBreakpoints, ...customBreakpoints };
  }, [customBreakpoints]);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= breakpoints["2xl"]) {
        setBreakpoint("2xl");
      } else if (width >= breakpoints.xl) {
        setBreakpoint("xl");
      } else if (width >= breakpoints.lg) {
        setBreakpoint("lg");
      } else if (width >= breakpoints.md) {
        setBreakpoint("md");
      } else if (width >= breakpoints.sm) {
        setBreakpoint("sm");
      } else {
        setBreakpoint("xs");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoints]);

  const isDesktop = useMemo(() => {
    return ["lg", "xl", "2xl"].includes(breakpoint);
  }, [breakpoint]);

  const isMobile = useMemo(() => {
    return ["xs", "sm"].includes(breakpoint);
  }, [breakpoint]);

  const isSwiper = useMemo(() => {
    return ["xs", "sm", "md", "lg", "xl"].includes(breakpoint);
  }, [breakpoint]);

  return { breakpoint, isDesktop, isMobile, isSwiper };
};
