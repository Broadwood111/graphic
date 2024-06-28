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

  return (
    <div className="diagram-container">
      <svg viewBox="0 0 800 600" className="diagram">
        {/* Cloud services */}
        <g transform="translate(0, 20)">
          {['citrix', 'vmware', 'microsoft', 'saas'].map((service, index) => (
            <g key={service} transform={`translate(${index * 200}, 0)`}>
              <rect 
                x="10" y="10" width="180" height="80" rx="40" 
                className="cloud-service"
                onMouseEnter={() => setActiveSection(service)}
                onMouseLeave={() => setActiveSection(null)}
              />
              <text x="100" y="60" textAnchor="middle">{sections[service].name}</text>
            </g>
          ))}
        </g>

        {/* Connecting lines */}
        <line x1="400" y1="110" x2="400" y2="180" className="connector" />

        {/* Middle tier */}
        <g transform="translate(0, 200)">
          {['desktop', 'apps', 'software'].map((item, index) => (
            <g key={item} transform={`translate(${250 + index * 150}, 0)`}>
              <rect 
                x="10" y="10" width="120" height="80" 
                className={`middle-tier tier-${index + 1}`}
                onMouseEnter={() => setActiveSection(item)}
                onMouseLeave={() => setActiveSection(null)}
              />
              <text x="70" y="60" textAnchor="middle">{sections[item].name}</text>
            </g>
          ))}
        </g>

        {/* Connecting lines */}
        <line x1="400" y1="290" x2="400" y2="360" className="connector" />

        {/* Bottom tier */}
        <g transform="translate(0, 380)">
          {['home', 'office', 'anywhere'].map((location, index) => (
            <g key={location} transform={`translate(${250 + index * 150}, 0)`}>
              <rect 
                x="10" y="10" width="120" height="80" 
                className="bottom-tier"
                onMouseEnter={() => setActiveSection(location)}
                onMouseLeave={() => setActiveSection(null)}
              />
              <text x="70" y="60" textAnchor="middle">{sections[location].name}</text>
            </g>
          ))}
        </g>

        {/* IGEL Management */}
        <g transform="translate(600, 300)">
          <rect 
            x="10" y="10" width="180" height="80" rx="40" 
            className="igel-management"
            onMouseEnter={() => setActiveSection('igel')}
            onMouseLeave={() => setActiveSection(null)}
          />
          <text x="100" y="60" textAnchor="middle">{sections.igel.name}</text>
        </g>

        {/* Connecting dashed lines */}
        <line x1="590" y1="340" x2="400" y2="420" className="connector dashed" />
      </svg>

      {activeSection && (
        <div className="tooltip">
          <h3>{sections[activeSection].name}</h3>
          <p>{sections[activeSection].info}</p>
        </div>
      )}
    </div>
  );
};

ReactDOM.render(<InteractiveCloudDiagram />, document.getElementById('root'));