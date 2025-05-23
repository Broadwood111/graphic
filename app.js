const { useState } = React;

const steps = [
  { id: 'start', title: 'Start', subtitle: 'zero', content: 'Begin your journey here, ask your customer what their plans are for Windows 11.' },
  { id: '1', title: 'Step 1', content: 'Gather the data: Have your customer run an INTUNE report to find out exactly what the situation is' },
  { id: '2', title: 'Step 2', content: 'Understand HOW they use those devices:\n• What Applications?\n• What Services?\n• What Dependencies?\n• What Resources?\n• Data Location?\n• User mobility?' },
  { id: '3', title: 'Step 3', content: 'Understand The COSTS. The Total Cost of ownership is more than just the device.\n\nRun the Value Assessment from IGEL\'s partner ecoSystems' },
  { id: '4', title: 'Step 4', content: 'Grow the size of your deals!\nUse the data to position a hybrid solution that uses the right tools for the right job.\n1. New Hardware\n2. New Software and Services\n3. New Datacenter solutions\nWhere possible' },
  { id: 'end', title: 'End', subtitle: 'Hero', content: 'Congratulations! You have completed the steps and earned a customer for life.' }
];

const StepDiagram = () => {
  const [activeStep, setActiveStep] = useState(null);

  return (
    <div className="bg-black-900 min-h-screen w-full flex items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        <div className="flex justify-between items-center relative">
          {steps.map((step, index) => (
            <div 
              key={step.id}
              className="relative flex flex-col items-center"
              onMouseEnter={() => setActiveStep(step.id)}
              onMouseLeave={() => setActiveStep(null)}
            >
              <div 
                className={`
                  ${index === 0 || index === steps.length - 1 
                    ? 'bg-yellow-400 text-black rounded-lg p-4 w-24 h-24 flex items-center justify-center' 
                    : 'bg-yellow-400 text-black rounded-full w-20 h-20 flex items-center justify-center'}
                  cursor-pointer transition-transform transform hover:scale-110 z-10
                `}
              >
                <span className="font-bold text-xl">{step.title}</span>
              </div>
              {step.subtitle && (
                <div className="text-yellow-400 text-sm mt-2 text-center">{step.subtitle}</div>
              )}
              {index < steps.length - 1 && (
                <div className="absolute top-1/2 left-full w-full h-2 bg-yellow-400 transform -translate-y-1/2 -z-10"></div>
              )}
              {activeStep === step.id && (
                <div className="absolute top-full mt-4 bg-white text-black p-4 rounded-lg shadow-lg w-64 z-20">
                  <h3 className="font-bold mb-2">{step.title}</h3>
                  <p className="text-sm whitespace-pre-line">{step.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<StepDiagram />, document.getElementById('root'));
