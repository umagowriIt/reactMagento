import { useEffect } from "react";

export function useDynamicTheme(theme: string) {

  useEffect(() => {
    // Remove any existing theme link
    const existing = document.getElementById("dynamic-theme") as HTMLLinkElement | null;
    if (existing) {
      existing.parentNode?.removeChild(existing);
    }

    // Create new link
    const link = document.createElement("link");
    link.id = "dynamic-theme";
    link.rel = "stylesheet";
    link.href = `/themes/theme_${theme}.css`;
    document.head.appendChild(link);

    return () => {
      link.parentNode?.removeChild(link);
    };
  }, [theme]);

}