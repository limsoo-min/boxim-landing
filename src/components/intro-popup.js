import { useState } from "react";
import Text from "./text";

const IntroPopup = ({ title, content, url }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="relative h-96 flex flex-col rounded-[12px] overflow-hidden bg-no-repeat bg-center bg-cover cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <div
        style={{ backgroundImage: `url(${url})` }}
        className={`absolute inset-0 bg-no-repeat bg-center bg-cover animate duration-300 ease-in-out ${
          open ? "blur-lg scale-125" : ""
        }`}
      />
      <div
        className={`flex-1 flex flex-col gap-3 z-1 rounded-[12px] p-6 animate duration-300 ease-in-out`}
      >
        <Text.Header4
          className={`text-white animate duration-300 ease-in-out ${
            open ? "[&]:text-[16px] [&]:leading-[20px]" : ""
          }`}
        >
          {title}
        </Text.Header4>
        <Text.Header6
          className={`font-normal text-white opacity-0 h-0 animate duration-300 ease-in-out ${
            open ? "opacity-100 h-60" : ""
          }`}
        >
          {content}
        </Text.Header6>
        <Button
          className={`animate duration-300 ease-in-out ${
            open ? "rotate-45" : ""
          }`}
        />
      </div>
    </div>
  );
};

export default IntroPopup;

const Button = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={className}
    width={24}
    height={24}
  >
    <path fill="none" d="M0 0h24v24H0z"></path>
    <path
      d="M12 23.2C5.8 23.2.8 18.2.8 12S5.8.8 12 .8s11.2 5 11.2 11.2-5 11.2-11.2 11.2zm0-21c-5.4 0-9.8 4.4-9.8 9.8s4.4 9.8 9.8 9.8 9.8-4.4 9.8-9.8-4.4-9.8-9.8-9.8z"
      fill="white"
    />
    <g fill="white">
      <path d="M17 12.8H7c-.4 0-.8-.3-.8-.8s.3-.8.8-.8h10c.4 0 .8.3.8.8s-.4.8-.8.8z"></path>
      <path d="M12 17.8c-.4 0-.8-.3-.8-.8V7c0-.4.3-.8.8-.8s.8.3.8.8v10c-.1.4-.4.8-.8.8z"></path>
    </g>
  </svg>
);
