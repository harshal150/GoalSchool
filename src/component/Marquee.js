import React from "react";


const Marquee = () => {
  return (
    <div className="marquee-container bg-gray-900 text-blue-600 font-bold text-md">
      <div className="marquee">
        <span>
          Admissions are open for Classes Nursery – XII. For CBSE registration | For Cambridge | For NIOS || CBSE Nursery – V - +91 6364547474 || CBSE VI - XII - 9663783617 || Cambridge - 9663115148 | admissions@east.dpsbangalore.edu.in
        </span>
      </div>
      <style>{`
.marquee-container {
  width: 100%; 
  height: 50px; 
  overflow: hidden; 
  position: relative;
 
  display: flex;
  align-items: center;
  
}


.marquee {
  display: inline-block;
  white-space: nowrap; /* Prevent line breaks */
  animation: marquee 20s linear infinite; /* Marquee animation */
}




@keyframes marquee {
  0% {
    transform: translateX(100%); 
  }
  100% {
    transform: translateX(-100%); 
  }
}
`}</style>
    </div>
  );
};

export default Marquee;
