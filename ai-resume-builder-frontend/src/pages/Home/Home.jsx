// function Home() {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-blue-50">
//       <h1 className="text-5xl font-bold text-blue-700">
//         Welcome to AI Resume Builder 🚀
//       </h1>
//     </div>
//   );
// }

// export default Home;



import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Features from "../../components/Features/Features";
import Templates from "../../components/Templates/Templates";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Templates />
    </>
  );
}

export default Home;