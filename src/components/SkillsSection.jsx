import React from 'react';

const AppleStyleStandee = () => {
  return (
    <div className="w-[600px] h-[1440px] bg-white text-black p-16 flex flex-col justify-between font-sans">
      
      {/* Top Section */}
      <div className="mt-20">
        <h1 className="text-6xl font-bold tracking-tighter mb-4">Dulana Chathurma</h1>
        <p className="text-2xl text-gray-500 font-light">Software Engineer & Developer</p>
      </div>

      {/* Hero Visual Area - Replace with your image */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-80 h-80 bg-gray-100 rounded-full flex items-center justify-center border border-gray-200">
           {/* Your Profile Picture here */}
           <span className="text-gray-400">Photo/Logo</span>
        </div>
      </div>

      {/* Skills Section - Minimalist Icons */}
      <div className="mb-20">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-8">Expertise</h2>
        <div className="grid grid-cols-3 gap-8">
          {["Java", "Python", "React", "Spring Boot", "MySQL", "ML"].map((skill) => (
            <div key={skill} className="text-xl font-medium tracking-tight">
              {skill}
            </div>
          ))}
        </div>
      </div>

      {/* Stats - Apple style clean layout */}
      <div className="flex justify-between border-t border-gray-200 pt-12">
        <div>
          <div className="text-4xl font-bold tracking-tight">12+</div>
          <div className="text-sm text-gray-500">Projects</div>
        </div>
        <div>
          <div className="text-4xl font-bold tracking-tight">85%</div>
          <div className="text-sm text-gray-500">Proficiency</div>
        </div>
      </div>

      {/* Footer / QR Code */}
      <div className="mt-12 flex justify-center pb-10">
         <div className="w-24 h-24 bg-black"></div> {/* QR Code placeholder */}
      </div>
      
    </div>
  );
};

export default AppleStyleStandee;
