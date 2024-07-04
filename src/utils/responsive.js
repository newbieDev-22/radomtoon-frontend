export function getResponsiveValue(breakpoints) {
  const width = window.innerWidth;

  if (width < 640) { // sm
    return breakpoints.sm || breakpoints.default;
  } else if (width < 768) { // md
    return breakpoints.md || breakpoints.default;
  } else if (width < 1024) { // lg
    return breakpoints.lg || breakpoints.default;
  } else if (width < 1280) { // xl
    return breakpoints.xl || breakpoints.default;
  } else { // 2xl
    return breakpoints['2xl'] || breakpoints.default;
  }
}
