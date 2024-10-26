import React from "react";
import HomeSlider from "../../Components/HomeSlider";
import OurSolution from "../../Components/OurSolution";
import OurTeam from "../../Components/OurTeam";
import ContactForm from "../../Components/ContactForm";


const Home = () => {
  return (
    <>
      {/* <MainSlider /> */}
      {/* <Welcome /> */}
      <div className="new-main-body">
        <div className="new-welcome-bg">
         <HomeSlider />
         <OurSolution />
         <section id="proofOfConcept" className="proofOfConcept contentBlockPart">
      <div className="container posRelative">
        <div className="whiteLineBg middleImg noAnimate" data-paroller-factor="-0.1" data-paroller-type="foreground">Whitepapers</div>
        <div className="centerHeading">
          <h2>Excellence Across All Industries.</h2>
          <p>Industry-Specific Solutions</p>
        </div>
        <div className="proofConceptDetails customTab">
          
          <ul className="tabNavigation">
            <li><a href="#"><span className="sprite finance tabIcons">Finance</span> <span className="tabText">Finance</span></a></li>
            <li><a href="#"><span className="sprite eduction tabIcons">Education</span> <span className="tabText">Education</span></a></li>
            <li><a href="#"><span className="sprite government tabIcons">Government</span> <span className="tabText">Government</span></a></li>
            <li><a href="#"><span className="sprite privateSector tabIcons">Private Sector</span> <span className="tabText">Private Sector</span></a></li>
            <li><a href="#"><span className="sprite healthCare tabIcons">Healthcare</span> <span className="tabText">Healthcare</span></a></li>
            <li><a href="#"><span className="sprite foodBeverages tabIcons">Food & Beverages</span> <span className="tabText">Food & Beverages</span></a></li>
          </ul>
        </div>
      </div>
    </section>
    <section id="pcProtocol" className="pcProtocol contentBlockPart">
      <div className="container posRelative">
        <div className="bigBlueBg leftImg noAnimate" data-paroller-factor="-0.1" data-paroller-type="foreground">About Us</div>
        <div className="bigBlueBg rightImg noAnimate" data-paroller-factor="0.1" data-paroller-type="foreground">PC Protocol</div>
        <div className="centerHeading">
          <h2>About Us</h2>
          <p>Pixel Pro Technology</p>
        </div>
       
        <div className="colsBlockRow gutter50 cf">
          <div className="colsBlock width50p center alignRight">
            <div className="pcProtocolImgWrap"> <span className="pcPorotoColBox box1" data-paroller-factor="-0.01" data-paroller-type="foreground" data-paroller-direction="horizontal">PC Protocol</span> <span className="pcPorotoColBox box2" data-paroller-factor="-0.01" data-paroller-type="foreground">PC Protocol</span> <span className="pcPorotoColBox box3" data-paroller-factor="0.02" data-paroller-type="foreground" data-paroller-direction="horizontal">PC Protocol</span> <span className="pcPorotoColBox box4" data-paroller-factor="-0.01" data-paroller-type="foreground" data-paroller-direction="horizontal">PC Protocol</span> <span className="pcPorotoColBox box5" data-paroller-factor="0.01" data-paroller-type="foreground" data-paroller-direction="horizontal">PC Protocol</span> <span className="pcPorotoColBox box6" data-paroller-factor="0.02" data-paroller-type="foreground">PC Protocol</span> </div>
            <div className="originalImg"><img src="/images/pc-protocol-img.png" width="414"  height="285" alt="PC Protocol" /></div>
          </div>
          <div className="colsBlock width50p">
            <h3>About Pixel Pro Technology  </h3>
            <p>   At Pixel Pro Technology, we pride ourselves on being at the forefront of the IT industry, delivering a comprehensive suite of services designed to cater to the unique requirements of our diverse clientele.  </p> <p>Our commitment to excellence, innovation, and customer satisfaction sets us apart as a leading technology solutions provider.</p> 
          </div>
        </div>
      </div>
    </section>
    <OurTeam />
    
<ContactForm />


        </div>
      </div>
    </>
  );
};

export default Home;
