"use client";

import { TypeAnimation } from 'react-type-animation';

export const TypingAnimation = () => {
  return (
    <TypeAnimation
      sequence={[
        "Proudly crafting software that works",
        1000,
        "Proudly crafting software that works (most of the time...)",
        2000,
        "",
        2000
      ]}
      speed={60}
      wrapper="div"
      className={"sm:text-2xl text-lg"}
      repeat={Infinity}
    />
  )
}
