"use client"
import React from 'react'

const OurSolution = () => {
  return (
   <>
   {/* our solution */}
<section id="ourSolutions" className="ourSolutions contentBlockPart whitebg">
      <div className="greenLingBg greenLightLeft"></div>
      <div className="greenLingBg greenLightRight noAnimate" data-paroller-factor="-0.2" data-paroller-type="foreground"></div>
      <div className="container">
        <div className="centerHeading"> 
          <h2>Our Solutions</h2>
          <p>We help you with the following</p>
        </div>
        <ul className="solutionList">
          <li><a href="#"><span className="sprite solutionIcons blockChainDelp">React </span> <span>React</span></a></li>
          <li><a href="#"><span className="sprite solutionIcons nodehosting">Node Hosting</span> <span>Node Hosting</span></a></li>
          <li><a href="#"><span className="sprite solutionIcons smartContracts">Angular</span> <span>Angular</span></a></li>
          <li><a href="#"><span className="sprite solutionIcons icoDevelopment">CSS 3</span> <span>CSS 3</span></a></li>
          <li><a href="#"><span className="sprite solutionIcons walletService">Java</span> <span>Java</span></a></li>
          <li><a href="#"><span className="sprite solutionIcons miningPool">Drupal</span> <span>Drupal</span></a></li>
          <li><a href="#"><span className="sprite solutionIcons exchangeSoftware">PHP</span> <span>PHP</span></a></li>
        </ul>
      </div>
    </section>
   </>
  )
}

export default OurSolution
