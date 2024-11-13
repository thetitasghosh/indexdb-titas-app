import React from "react";
import Header from "@/components/Global/Header";
import Footer from "@/components/Global/Footer";
import AppContent from "@/components/Global/AppContent";
const Home = () => {
  return (
    <div className="w-full h-screen bg-neutral-950  flex items-center justify-center">
      <div className="w-[450px] bg-white border h-full flex flex-col items-center justify-center">
        <Header />
        <AppContent />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
