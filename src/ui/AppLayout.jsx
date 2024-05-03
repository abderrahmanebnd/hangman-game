import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div
      className="
      min-h-screen
      w-full
      bg-mobile-bg
      sm:bg-tablet-bg
      lg:bg-desktop-bg
      bg-center
      bg-cover
      "
    >
      <Outlet />
    </div>
  );
}

export default AppLayout;
