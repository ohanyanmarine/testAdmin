import { useEffect } from "react";
import DrawerLeft from "./Drawer";
export default () => {
  useEffect(() => {
    const access = localStorage.getItem("access");
    if (!access) {
      window.location = "/login";
    }
  }, []);
  return (
    <div>
      <DrawerLeft />
    </div>
  );
};
