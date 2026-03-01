import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-black">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold text-yellow-400">404</h1>
        <p className="mb-4 text-xl text-gray-300">Oops! Page not found</p>
        <a href="/" className="text-yellow-400 underline hover:text-yellow-300 transition-colors">
          Return to Home
        </a>
      </div>
      
      {/* Copyright notice */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-xs">
        Copyright © 2026 <a href="https://linkedin.com/in/devansh050607" className="text-yellow-400 hover:text-yellow-300 transition-colors">Devansh Singh</a> | GHRISTU, Pune
      </div>
    </div>
  );
};

export default NotFound;
