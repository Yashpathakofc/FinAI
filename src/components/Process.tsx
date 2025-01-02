import React from "react";

interface ProcessStepProps {
  title: string;
  icon: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ title, icon }) => {
  return (
    <div className="flex flex-col items-center mb-8 md:mb-0">
      <div className="w-24 h-24 md:w-36 md:h-36 flex items-center justify-center border-4 border-dashed border-red-500 rounded-full mb-4 md:mb-8">
        <img src={icon} alt={title} className="w-12 h-12 md:w-16 md:h-16" />
      </div>
      <h3 className="text-lg md:text-2xl font-semibold text-gray-800">{title}</h3>
    </div>
  );
};

const Process: React.FC = () => {
  const steps = [
    {
      title: "Consultation",
      icon: "./pipeline.png", // Replace with the correct icon path
    },
    {
      title: "Analysis",
      icon: "./analysis (2).png", // Replace with the correct icon path
    },
    {
      title: "Implementation",
      icon: "./clipboard.png", // Replace with the correct icon path
    },
    {
      title: "Feedback",
      icon: "./feedback.png", // Replace with the correct icon path
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="text-center mb-16">
        <h2 className="text-lg font-bold text-pink-600 uppercase">Our Process</h2>
        <h1 className="text-3xl md:text-5xl text-gray-800">Streamlined and Transparent</h1>
      </div>

      {/* Process Steps */}
      <div className="flex flex-col md:flex-row items-center justify-center space-x-0 md:space-x-16 space-y-8 md:space-y-0">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <ProcessStep title={step.title} icon={step.icon} />
            {index < steps.length - 1 && (
              <div className="text-red-500 text-4xl md:text-5xl -mt-6 md:-mt-12">
                <span>&#10142;</span> {/* Arrow icon */}
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Process;
