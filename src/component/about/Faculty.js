import React, { useRef, useEffect, useState } from "react";
import image1 from "../../assets/About/Managment Team/Principle.avif";
import backgroundImage from "../../assets/About/bg.avif";

const teamMembers = [
  { id: 1, name: "Rajesh Gupta", role: "Principal", image: image1 },
  { id: 2, name: "Sneha Sharma", role: "Vice Principal", image: image1 },
  { id: 3, name: "Amit Verma", role: "Head of Mathematics Department", image: image1 },
  { id: 4, name: "Priya Nair", role: "Head of Science Department", image: image1 },
  { id: 5, name: "Anil Kumar", role: "Physical Education Director", image: image1 },
  { id: 6, name: "Meera Iyer", role: "Head of Humanities Department", image: image1 },
  { id: 7, name: "Rohit Khanna", role: "IT and Computer Science Faculty", image: image1 },
  { id: 8, name: "Deepa Reddy", role: "Arts and Music Coordinator", image: image1 },
];

const Faculty = () => {
  const rowsRef = useRef([]);
  const [visibleRows, setVisibleRows] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.dataset.index, 10);
          if (entry.isIntersecting) {
            setVisibleRows((prev) => [...prev, index]);
          }
        });
      },
      { threshold: 0.3 }
    );

    rowsRef.current.forEach((row) => {
      if (row) observer.observe(row);
    });

    return () => {
      rowsRef.current.forEach((row) => {
        if (row) observer.unobserve(row);
      });
    };
  }, []);

  // Group team members into rows (4 per row)
  const groupedMembers = [];
  for (let i = 0; i < teamMembers.length; i += 4) {
    groupedMembers.push(teamMembers.slice(i, i + 4));
  }

  return (
    <div>
      <section
        id="our-team"
        className="py-12"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundAttachment: "fixed",
          opacity: "0.9",
        }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-500">
            Meet Our Team
          </h2>

          {groupedMembers.map((row, index) => (
            <div
              key={index}
              data-index={index}
              ref={(el) => (rowsRef.current[index] = el)}
              className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 rounded-xl transition-all duration-1000 ease-out ${
                visibleRows.includes(index) ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              {row.map((member) => (
                <div
                  key={member.id}
                  className="bg-white rounded-lg shadow-md p-6 my-6 text-center"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full rounded-2xl mb-4"
                  />
                  <h3 className="text-lg font-bold mb-2">{member.name}</h3>
                  <p className="text-gray-700 text-sm font-semibold">
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Faculty;
