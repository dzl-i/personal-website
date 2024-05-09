"use client"

import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { WorkflowIcon } from "lucide-react";
import { timeline } from "@/constants/data";
import Image from "next/image";

export const Timeline = () => {
  return (
    <section id="timeline" className="relative z-0">
      <h3 className="sm:text-base text-xs text-gray-500 tracking-wider">PROGRESS OVER THE YEARS</h3>
      <h1 className="sm:text-5xl text-3xl font-extrabold pt-2">Timeline</h1>

      <div className="sm:pt-16 pt-8">
        <VerticalTimeline>
          {timeline.map((item, index) => (
            <VerticalTimelineElement
              key={`${item.title}-${index}`}
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#1d1d1d", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid #232631" }}
              date={item.date}
              iconStyle={{ background: item.iconBg }}
              icon={<div className="flex justify-center items-center w-full h-full">
                <Image
                  src={item.icon}
                  alt={item.place}
                  className="w-[70%] h-[70%] object-contain"
                  width={100}
                  height={100}
                />
              </div>}
              visible={true}
            >
              <h3 className="text-2xl font-bold text-[#006FEE]">{item.title}</h3>
              <h4 className="text-base text-gray-400">
                {item.place}<br className="block" />
                {item.country}
              </h4>
              <p className="text-xl">{item.summary}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  )
}