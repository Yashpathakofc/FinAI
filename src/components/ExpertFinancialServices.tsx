import React from 'react';

interface ServiceCardProps {
  icon: JSX.Element | string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-gray-200 mx-6 rounded-lg shadow-md transform transition-transform hover:-translate-y-2 hover:shadow-xl hover:ring-2 hover:ring-blue-500 hover:border hover:border-blue-400">
      <div className="text-4xl text-black mb-4">
        {typeof icon === 'string' ? <img src={icon} alt={title} className="h-16 w-16 md:h-20 md:w-20" /> : icon}
      </div>
      <h3 className="text-xl sm:text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 sm:text-base text-sm">{description}</p>
    </div>
  );
};

const ExpertFinancialServices: React.FC = () => {
  return (
    <section className="py-10 px-6 bg-gray-50">
      <div className="text-center mb-8">
        <h2 className="text-sm font-bold text-pink-600 uppercase">Comprehensive Solutions</h2>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">Expert Financial Services</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-4 sm:mx-6 lg:mx-16">
        <ServiceCard
          icon="./dollar-symbol.png" // Dollar icon
          title="AI Assistance"
          description="Get real-time assistance from Jia, your AI accountant, for all your financial queries and needs."
        />
        <ServiceCard
          icon="./virtual-reality.png" // Virtual Accounting icon
          title="Virtual Accounting"
          description="Simplify your finances with our virtual accounting services that save you time and money."
        />
        <ServiceCard
          icon="./Tax-icon.png" // Tax Solutions icon
          title="Tax Solutions"
          description="Get personalized tax advice and solutions from Jia to maximize your savings and ensure compliance."
        />
        <ServiceCard
          icon="./research.png" // Investment Insights icon
          title="Investment Insights"
          description="Get insights into smart investments to grow your wealth efficiently and securely."
        />
        <ServiceCard
          icon="./messenger.png" // Budgeting Tools icon
          title="Budgeting Tools"
          description="Utilize advanced tools to manage your budget and achieve financial stability."
        />
        <ServiceCard
          icon="./business-planning.png" // Financial Planning icon
          title="Financial Planning"
          description="Plan your financial future with strategies tailored to your goals."
        />
      </div>
    </section>
  );
};

export default ExpertFinancialServices;
