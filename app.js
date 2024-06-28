const { useState } = React;

const steps = [
  { id: 'start', title: 'Start', subtitle: 'zero', content: 'Begin your journey here' },
  { id: '1', title: 'Step 1', content: 'Gather the data: Have your customer run an INTUNE report to find out exactly what the situation is' },
  { id: '2', title: 'Step 2', content: 'Understand HOW they use those devices:\n• What Applications?\n• What Services?\n• What Dependencies?\n• What Resources?\n• Data Location?\n• User mobility?' },
  { id: '3', title: 'Step 3', content: 'Understand The COSTS. The Total Cost of ownership is more than just the device.\n\nRun the Value Assessment from IGEL\'s partner ecoSystems' },
  { id: '4', title: 'Step 4', content: 'Grow the size of your deals!\nUse the data to position a hybrid solution that uses the right tools for the right job.\n1. New Hardware\n2. New Software and Services\n3. New Datacenter solutions\nWhere possible' },
  { id: 'end', title: 'End', subtitle: 'Hero', content: 'Congratulations! You\'ve completed all steps.' }
];

const StepDiagram = () => {
  const [activeStep, setActiveStep] = useState(null);

  return (
    <div className="bg-gray-900 p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
      <div className="flex flex-wrap justify-between items-center relative">
        {steps.map((step, index) => (
          <div 
            key={step.id}
            className={`relative ${index === 0 || index === steps.length - 1 ? 'w-1/6' : 'w-1/6'} mb-4`}
            onMouseEnter={() => setActiveStep(step.id)}
            onMouseLeave={() => setActiveStep(null)}
          >
            <div 
              className={`
                ${index === 0 || index === steps.length - 1 ? 'bg-yellow-400 text-black rounded-lg p-2' : 'bg-yellow-400 text-black rounded-full w-16 h-16 flex items-center justify-center'}
                cursor-pointer transition-transform transform hover:scale-110
              `}
            >
              <span className="font-bold">{step.title}</span>
            </div>
            {step.subtitle && (
              <div className="text-yellow-400 text-sm mt-1 text-center">{step.subtitle}</div>
            )}
            {index < steps.length - 1 && (
              <div className="absolute top-1/2 left-full w-full h-0.5 bg-yellow-400 transform -translate-y-1/2"></div>
            )}
            {activeStep === step.id && (
              <div className="absolute z-10 bg-white text-black p-4 rounded-lg shadow-lg mt-2 w-64">
                <h3 className="font-bold mb-2">{step.title}</h3>
                <p className="text-sm whitespace-pre-line">{step.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

ReactDOM.render(<StepDiagram />, document.getElementById('root'));