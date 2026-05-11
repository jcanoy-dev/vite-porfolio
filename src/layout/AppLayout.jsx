import { Outlet } from "react-router";
import AppHeader from "./AppHeader";

const AppLayout = () => {

  return (
    <div className="h-screen xl:flex bg-gray-teal-muted">
      <div className="relative w-full max-w-8xl h-full">
        <div className="absolute inset-0 bg-gray-teal-soft transform rotate-1 z-0 rounded-2xl m-5 lg:m-10 xl:m-20 shadow-lg"></div>
        <div className="relative z-10 p-5 lg:p-10 xl:p-20 h-full">
          <div className="bg-gray-teal-light p-4 rounded-2xl shadow-md overflow-y-auto h-full">
            <AppHeader />
            <div className="md:p-6">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
