import Hero from "./components/Hero";
import Services from "./components/Services";
import Experience from "./components/Experience";
import NavBar from "./components/NavBar";
import About from "./components/About";

const App = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navigation */}
      <NavBar />

      <Hero />
      <About />
      <Services />
      <Experience />

      {/* Footer */}
      <footer className="py-12 bg-slate-50 border-t border-slate-200 px-6 text-center">
        <div className="max-w-7xl mx-auto">
          <div className="text-xl font-bold tracking-tight text-blue-900 mb-4">
            JENIELYN <span className="text-blue-600">ALIM</span>
          </div>
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Jenielyn Mae B. Alim. All Rights
            Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
