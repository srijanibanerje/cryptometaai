import React from 'react';

const Realtimedata = () => {
  const features = [
    {
      title: "Live Prices & Charts",
      emoji: "⚡",
      desc: "Get real-time market data across top coins and trading pairs with dynamic charts — always stay up to date without refreshing.",
    },
    {
      title: "Custom Alerts & Notifications",
      emoji: "🔔",
      desc: "Set instant alerts for price spikes, volume shifts, or major market news — never miss a critical move.",
    },
  ];

  return (
    <>
      <div className='text-white' style={{ backgroundColor: 'black' }}>
        <div className="container py-5">
          <div className='text-center display-4' style={{ fontWeight: "400" }}>
            Real-Time Data & Alerts
          </div>
          <div className="text-center mb-5 mt-3" style={{ fontSize: "19px" }}>
            “Stay ahead with live updates & smart triggers.”
          </div>

          <div className="row justify-content-center">
            {features.map((feature, index) => (
              <div className="col-md-5 mb-4" key={index}>
                <div className="card h-100 text-center p-4 border-0" style={{ backgroundColor: "#1a1a1a", borderRadius: "12px" }}>
                  <div style={{ fontSize: "40px" }}>{feature.emoji}</div>
                  <h5 className="mt-3 mb-2 text-white">{feature.title}</h5>
                  <p className="text-white" style={{ fontSize: "15px" }}>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
};

export default Realtimedata;
