import { FaRobot, FaFilePdf, FaPalette } from "react-icons/fa";

function Features() {
  const features = [
    {
      icon: <FaRobot className="text-5xl text-blue-600" />,
      title: "AI Resume",
      description: "Generate professional resumes using AI."
    },
    {
      icon: <FaFilePdf className="text-5xl text-green-600" />,
      title: "PDF Download",
      description: "Download your resume instantly as a PDF."
    },
    {
      icon: <FaPalette className="text-5xl text-purple-600" />,
      title: "Modern Templates",
      description: "Choose from ATS-friendly resume templates."
    }
  ];

  return (
    <section className="py-20 bg-white">

      <h2 className="text-4xl font-bold text-center mb-12">
        Why Choose Our Resume Builder?
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">

        {features.map((item, index) => (
          <div
            key={index}
            className="shadow-lg rounded-xl p-8 text-center hover:scale-105 transition duration-300"
          >
            <div className="flex justify-center mb-5">
              {item.icon}
            </div>

            <h3 className="text-2xl font-semibold mb-3">
              {item.title}
            </h3>

            <p className="text-gray-600">
              {item.description}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Features;