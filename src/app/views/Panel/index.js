import { useEffect } from "react";
import MiniDrawer from "./Drawer";
export default () => {
  useEffect(() => {
    const access = localStorage.getItem("access");
    if (!access) {
      window.location = "/login";
    }
  }, []);
  return (
    <div>
      <MiniDrawer />
    </div>
  );
};
