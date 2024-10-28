import React, { useState } from "react";
import psy from "../../public/howItWorksPsy.svg";

const professionals = [
  {
    title: "Psychiatrists",
    image: psy,
    description:
      "Zehenify streamlines E-prescription, tracks patient progress with data-driven insights, and organizes treatment plans efficiently. Simplify prescription management and telehealth for improved patient outcomes."},
  {
    title: "Clinical Psychologists",
    image: psy,
    description:
      "With customizable assessments and analytics, Zehenify enables clinical psychologists to monitor client progress effortlessly and tailor their approaches accordingly. Focus on therapy while we manage the administrative tasks.",
  },
  {
    title: "Therapists",
    image: psy,
    description:
      "Zehenify's built-in therapy tools and predefined assessments allow therapists to streamline sessions and personalize care. Track client progress and enhance treatment effectiveness through insightful notes.",
  },
  {
    title: "Counselors",
    image: psy,
    description:
      "Zehenify provides counselors with intuitive tools to manage appointments and monitor client improvements. Leverage our assessment features to deliver tailored guidance based on individual needs, all from one platform.",
  },
];

export default function WhoIsItFor() {
  const [selectedProfessional, setSelectedProfessional] = useState(
    professionals[0]
  );

  return (
    <div className="bg-[#F8F8F8] mt-20">
      <div className="flex flex-col md:flex-row gap-8 p-16 max-w-5xl mx-auto">
        <div className="md:w-1/2 h-full ">
          <h2 className="text-sm font-semibold text-[#140F0F]">
            WHO IS IT FOR
          </h2>
          <div className="flex flex-col items-stretch h-72">
            {professionals.map((prof) => (
              <button
                key={prof.title}
                className={`w-full flex-1 text-left py-4 text-2xl rounded flex items-center justify-start ${
                  selectedProfessional.title === prof.title
                    ? "underline-offset-2 underline font-semibold text-teal-700"
                    : "text-[#22222299]"
                }`}
                onClick={() => setSelectedProfessional(prof)}
              >
                <span
                  className={`mr-2 transition-transform duration-200 ${
                    selectedProfessional.title === prof.title
                      ? "rotate-0"
                      : "-rotate-90"
                  }`}
                >
                  →
                </span>
                {prof.title}
              </button>
            ))}
          </div>
        </div>
        <div className="md:w-5/12 ">
          <div className="mb-4 relative">
            <img
              src={selectedProfessional.image.src}
              alt={selectedProfessional.title}
              className="w-full object-cover rounded-lg"
            />
          </div>
          <p className="text-sm text-gray-600">
            {selectedProfessional.description}
          </p>
        </div>
      </div>
    </div>
  );
}
