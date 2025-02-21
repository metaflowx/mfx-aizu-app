import React from 'react'
import "./circular.css"

export default function CircularRoation() {
  return (
    <div>
      <div className="solar-system">
  <div id="sun">
    <img  src="/images/tokenomics/tokengif.gif" style={{width:"100%"}} />
  </div>

  <div className="orbit mercury-orbit"></div>
  <div className="mercury-spin">
    <div id="mercury">
        <img src="/icons/avalanche.png" />
    </div>
  </div>

  <div className="orbit venus-orbit"></div>
  <div className="venus-spin">
    <div id="venus">
    <img src="/icons/binance.png" />
    </div>
  </div>

  <div className="orbit earth-orbit"></div>
  <div className="earth-spin">
    <div className="orbit moon-orbit"></div>
    <div className="moon-spin">
      <div id="moon">
      <img src="/icons/bitcoin.png" />
      </div>
    </div>

    <img id="earth" src="/icons/optimism.png" />
  </div>

  <div className="orbit mars-orbit"></div>
  <div className="mars-spin">
    <div id="mars">
    <img src="/icons/ethereum.png" />
  

    </div>
   
  </div>

  <div className="orbit mars-orbitPol"></div>
  <div className="mars-spin1">
   
    <div id="mars1">
    <img src="/icons/polygon.png" />
  

    </div>
  </div>
  
</div>
    </div>
  )
}
