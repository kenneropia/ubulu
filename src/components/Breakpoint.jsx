import React from "react"

const BreakPoint = () => {
  const ENV = import.meta.env.PROD

  if (ENV) return null
  return (
    <div className="fixed z-50 h-12 py-2 font-semibold text-center text-blue-700 bg-blue-100 rounded-full w-14 bottom-2 right-2">
      <span className="block xs:hidden">xs</span>
      <span className="hidden xs:block sm:hidden">xs</span>
      <span className="hidden sm:block md:hidden">sm</span>
      <span className="hidden md:block lg:hidden">md</span>
      <span className="hidden lg:block xl:hidden">lg</span>
      <span className="hidden xl:block 2xl:hidden">xl</span>
      <span className="hidden 2xl:block">2xl</span>
    </div>
  );
};

export default BreakPoint;
