const { useState } = React;

const InteractiveCloudDiagram = () => {
  const [activeSection, setActiveSection] = useState(null);

  const sections = {
    citrix: { name: 'Citrix', info: 'Citrix provides virtual app and desktop delivery solutions.' },
    vmware: { name: 'VMware', info: 'VMware offers virtualization and cloud computing software and services.' },
    microsoft: { name: 'Microsoft', info: 'Microsoft provides cloud services through Azure and other platforms.' },
    saas: { name: 'SaaS', info: 'Software as a Service - cloud-based software delivery model.' },
    desktop: { name: 'Desktop', info: 'Virtual desktop infrastructure for remote access.' },
    apps: { name: 'Apps', info: 'Application virtualization and delivery.' },
    software: { name: 'Software', info: 'Various software solutions delivered through the cloud.' },
    home: { name: 'Home', info: 'Access from home environments.' },
    office: { name: 'Office', info: 'Access from office environments.' },
    anywhere: { name: 'Anywhere', info: 'Access from any location with internet connectivity.' },
    igel: { name: 'IGEL Management', info: 'Centralized management for IGEL OS devices.' },
  };

  const cloudServiceColors = ['bg-blue-200', 'bg-green-200', 'bg-red-200', 'bg-yellow-200'];
  const middleTierColors = ['bg-blue-500', 'bg-green-500', 'bg-purple-500'];

  return (
    <div className="relative w-full max-w-4xl">
      <svg viewBox="0 0 800 600" className="w-full h-auto">
        {/* Cloud services */}
        <g transform="translate(0, 20)">
          {['citrix', 'vmware', 'microsoft', 'saas'].map((service, index) => (
            <g key={service} transform={`translate(${index * 200}, 0)`}>
              <rect 
                x="10" y="10" width="180" height="80" rx="40" 
                className={`${cloudServiceColors[index]} stroke-gray-700 stroke-2`}
                onMouseEnter={() => setActiveSection(service)}
                onMouseLeave={() => setActiveSection(null)}
              />
              <text x="100" y="60" textAnchor="middle" className="fill-gray-700 text-sm font-semibold">{sections[service].name}</text>
            </g>
          ))}
        </g>

        {/* Connecting lines */}
        <line x1="400" y1="110" x2="400" y2="180" className="stroke-gray-700 stroke-2" />

        {/* Middle tier */}
        <g transform="translate(0, 200)">
          {['desktop', 'apps', 'software'].map((item, index) => (
            <g key={item} transform={`translate(${250 + index * 150}, 0)`}>
              <rect 
                x="10" y="10" width="120" height="80" 
                className={`${middleTierColors[index]} stroke-gray-700 stroke-2`}
                onMouseEnter={() => setActiveSection(item)}
                onMouseLeave={() => setActiveSection(null)}
              />
              <text x="70" y="60" textAnchor="middle" className="fill-white text-sm font-semibold">{sections[item].name}</text>
            </g>
          ))}
        </g>

        {/* Connecting lines */}
        <line x1="400" y1="290" x2="400" y2="360" className="stroke-gray-700 stroke-2" />

        {/* Bottom tier */}
        <g transform="translate(0, 380)">
          {['home', 'office', 'anywhere'].map((location, index) => (
            <g key={location} transform={`translate(${250 + index * 150}, 0)`}>
              <rect 
                x="10" y="10" width="120" height="80" 
                className="fill-white stroke-gray-700 stroke-2"
                onMouseEnter={() => setActiveSection(location)}
                onMouseLeave={() => setActiveSection(null)}
              />
              <text x="70" y="60" textAnchor="middle" className="fill-gray-700 text-sm font-semibold">{sections[location].name}</text>
            </g>
          ))}
        </g>

        {/* IGEL Management */}
        <g transform="translate(600, 300)">
          <rect 
            x="10" y="10" width="180" height="80" rx="40" 
            className="fill-yellow-300 stroke-gray-700 stroke-2"
            onMouseEnter={() => setActiveSection('igel')}
            onMouseLeave={() => setActiveSection(null)}
          />
          <text x="100" y="60" textAnchor="middle" className="fill-gray-700 text-sm font-semibold">{sections.igel.name}</text>
        </g>

        {/* Connecting dashed lines */}
        <line x1="590" y1="340" x2="400" y2="420" className="stroke-gray-700 stroke-2 stroke-dasharray-2" />
      </svg>

      {activeSection && (
        <div className="absolute top-4 right-4 bg-white border border-gray-300 rounded-lg p-4 max-w-xs shadow-lg">
          <h3 className="text-lg font-bold mb-2">{sections[activeSection].name}</h3>
          <p className="text-sm text-gray-600">{sections[activeSection].info}</p>
        </div>
      )}
    </div>
  );
};

ReactDOM.render(<InteractiveCloudDiagram />, document.getElementById('root'));