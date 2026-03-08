import JenImg from "../assets/jen.jpg";
import { Award, ArrowRight } from "lucide-react";

function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 lg:pt-48 lg:pb-32 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold tracking-wide uppercase">
            Freelance Accountant & Tax Associate
          </div>
          <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
            Empowering Businesses with{" "}
            <span className="text-blue-600">Precise Finance.</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
            Fresh BS Accountancy Graduate (Cum Laude) from PUP Biñan.
            Specialized in streamlining financial records, BIR compliance, and
            payroll management for SMEs and startups.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all text-center flex items-center justify-center gap-2"
            >
              Hire Me Now <ArrowRight size={18} />
            </a>
            <a
              href="#services"
              className="px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 rounded-xl font-bold hover:bg-slate-50 transition-all text-center"
            >
              View Services
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="w-full aspect-square rounded-3xl bg-blue-600 overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
            <div className="absolute inset-0 bg-linear-to-tr from-blue-900/20 to-transparent"></div>
            {/* Note: In a real app, replace with the uploaded image source */}
            <div className="w-full h-full flex items-center justify-center bg-slate-200 text-slate-400 italic">
              <img src={JenImg} />
            </div>
          </div>
          {/* Achievement Badges */}
          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce shadow-blue-100">
            <div className="bg-yellow-100 p-2 rounded-lg text-yellow-600">
              <Award size={24} />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase">
                Honors
              </p>
              <p className="font-extrabold text-slate-900">Cum Laude</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
