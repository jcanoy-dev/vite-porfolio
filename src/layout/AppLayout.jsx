import { Outlet } from "react-router";
import AppHeader from "./AppHeader";

const AppLayout = () => {

  return (
    <div className="h-screen xl:flex bg-gray-teal-muted overflow-hidden"> 
      <div className="relative w-full max-w-8xl h-full"> 
        <AppHeader /> 
        
        <div className="absolute bg-gray-teal-soft transform rotate-1 z-0 rounded-2xl 
          top-0 left-0 right-0
          m-5 mt-14 h-[calc(100%-4.5rem)] 
          lg:mx-10 lg:mb-10 lg:mt-15 lg:h-[calc(100%-4.25rem)] 
          shadow-lg">
        </div> 

        {/* Main Content Container: Height calculated to prevent overflow */}
        <div className="relative z-10 px-5 pb-5 h-[calc(100%-3rem)] lg:px-10 lg:pb-10 lg:h-[calc(100%-1.5rem)]"> 
          <div className="bg-gray-teal-light rounded-2xl shadow-md overflow-auto h-full"> 
            <Outlet /> 
          </div> 
        </div> 
      </div> 
    </div>

  );
};

export default AppLayout;
