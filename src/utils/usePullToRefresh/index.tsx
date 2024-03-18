import { useEffect } from "react";
import PullToRefresh from "pulltorefreshjs";

export const usePullToRefresh = () => {
  useEffect(() => {
    const standalone = window.matchMedia("(display-mode: standalone)").matches;
    if (!standalone) return;

    PullToRefresh.init({
      mainElement: "body",
      onRefresh() {
        window.location.reload();
      },
    });

    return () => {
      PullToRefresh.destroyAll();
    };
  }, []);

  return null;
};
