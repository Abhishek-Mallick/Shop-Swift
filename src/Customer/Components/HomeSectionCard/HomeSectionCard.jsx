import React from "react";

const HomeSectionCard = () => {
  return (
    <div className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3">
      <div className="h-[13rem] w-[10rem]">
        <img
          className="object-cover object-top w-full h-full"
          src="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/612Rl6GKHoL._AC_UL480_QL65_.jpg"
          alt=""
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-medium text-grey-900">Roadster</h3>
        <p className="mt-2 text-sm text-grey-500">
          Men Solid Round Neck Polyester Grey T-Shirt
        </p>
      </div>
    </div>
  );
};

export default HomeSectionCard;
