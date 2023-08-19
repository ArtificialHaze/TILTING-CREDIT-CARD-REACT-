import React from "react";
import { Tilt } from "react-tilt";

const CreditCard = () => {
  return (
    <Tilt className="w-[425px] h-[270px] bg-gradient-to-tr flex content-center items-center justify-center from-[#9c2cf3] tp-[#3a49f9]">
      <div className="p-8 w-full h-full">
        <div className="relative w-full h-full">
          <img
            src="MasterCard"
            className="absolute"
            width={70}
            height={24}
            alt="MasterCard"
          />
          <img
            src="Chip"
            className="absolute right-0 bottom-0 top-0 my-auto"
            width={60}
            height={30}
            alt="Chip"
          />
          <div className="flex flex-col w-full h-full justify-end gap-4">
            <p className="text-2xl text-white font-bold">3333 4444 1234 4321</p>
            <div className="flex gap-28">
              <p className="text-lg uppercase text-white font-bold">
                Jonathan Smith
              </p>
              <p className="text-lg uppercase text-white font-bold">11/25</p>
            </div>
          </div>
        </div>
      </div>
    </Tilt>
  );
};

export default CreditCard;
