// FlowChart.jsx
export default function TrxNetworkChart() {
  return (
    <div className="w-full md:min-h-[800px] sm:min-h-[600px] min-h-[500px] flex items-center justify-center bg-gradient-to-br">
      {/* Wrapper for responsive rotation */}
      <div className="w-full overflow-x-auto transform rotate-90 lg:rotate-0 origin-center flex justify-center p-10">
        <svg
          viewBox="0 0 1500 650"
          preserveAspectRatio="xMidYMid meet"
          className="w-full h-auto"
        >
          {/* Curved connectors */}
          <path d="M 150 250 Q 250 100 350 150" stroke="#4fd1c5" strokeWidth="2" fill="none"/>
          <path d="M 150 250 Q 250 400 350 350" stroke="#4fd1c5" strokeWidth="2" fill="none"/>
         
          <path d="M 500 250 Q 250 350 350 350" stroke="#4fd1c5" strokeWidth="2" fill="none"/>
          <path d="M 500 550 Q 250 500 350 350" stroke="#4fd1c5" strokeWidth="2" fill="none"/>

          <path d="M 500 250 H 650" stroke="#4fd1c5" strokeWidth="2" fill="none"/>
          <path d="M 650 250 H 800" stroke="#4fd1c5" strokeWidth="2" fill="none"/>
          <path d="M 800 250 Q 900 100 1000 150" stroke="#4fd1c5" strokeWidth="2" fill="none"/>
          <path d="M 800 250 Q 900 400 1000 350" stroke="#4fd1c5" strokeWidth="2" fill="none"/>
          <path d="M 1000 400 H 1150" stroke="#4fd1c5" strokeWidth="2" fill="none"/>
          <path d="M 1150 400 H 1300" stroke="#4fd1c5" strokeWidth="2" fill="none"/>
          <path d="M 1225 300 V 300" stroke="#4fd1c5" strokeWidth="2" fill="none"/>
          
          {/* Nodes */}
          <circle cx="150" cy="250" r="60" fill="#131b2c" stroke="#505461" strokeWidth="8"/>
          <text x="150" y="255" textAnchor="middle" fill="white" fontSize="22" fontFamily="sans-serif">100 TRX</text>

          <circle cx="350" cy="100" r="60" fill="#25d3b0" stroke="#505461" strokeWidth="8"/>
          <circle cx="350" cy="400" r="60" fill="#131b2c" stroke="#505461" strokeWidth="8"/>
          <circle cx="500" cy="550" r="60" fill="#25d3b0" stroke="#505461" strokeWidth="8"/>
          

          <circle cx="500" cy="250" r="60" fill="#131b2c" stroke="#505461" strokeWidth="8"/>
          <text x="500" y="255" textAnchor="middle" fill="white" fontSize="22" fontFamily="sans-serif">100 TRX</text>
          <circle cx="650" cy="250" r="60" fill="#131b2c" stroke="#505461" strokeWidth="8"/>
          <text x="650" y="255" textAnchor="middle" fill="white" fontSize="22" fontFamily="sans-serif">100 TRX</text>
          <circle cx="800" cy="250" r="60" fill="#131b2c" stroke="#505461" strokeWidth="8"/>
          <text x="800" y="255" textAnchor="middle" fill="white" fontSize="22" fontFamily="sans-serif">100 TRX</text>

          <circle cx="1000" cy="100" r="60" fill="#25d3b0" stroke="#505461" strokeWidth="8"/>
          <circle cx="1000" cy="400" r="60" fill="#131b2c" stroke="#505461" strokeWidth="8"/>
 

          <circle cx="1150" cy="400" r="60" fill="#131b2c" stroke="#505461" strokeWidth="8"/>
          <text x="1150" y="405" textAnchor="middle" fill="white" fontSize="22" fontFamily="sans-serif">100 TRX</text>
          <circle cx="1300" cy="400" r="60" fill="#131b2c" stroke="#505461" strokeWidth="8"/>
          <text x="1300" y="405" textAnchor="middle" fill="white" fontSize="22" fontFamily="sans-serif">New</text>

          <text x="1200" y="350" fill="white" fontSize="20" fontFamily="sans-serif">700 TRX</text>
         
        </svg>
      </div>
    </div>
  );
}
