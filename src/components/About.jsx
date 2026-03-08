import { CheckCircle, User, Target, Zap } from "lucide-react";

function About() {
  return (
    <section id="about" className="py-24 bg-slate-50 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                  <div className="text-blue-600 mb-2">
                    <Target size={24} />
                  </div>
                  <h4 className="font-bold">Goal Oriented</h4>
                  <p className="text-xs text-slate-500">
                    Committed to organizational financial success.
                  </p>
                </div>
                <div className="bg-blue-600 p-6 rounded-2xl shadow-lg text-white">
                  <div className="text-blue-100 mb-2">
                    <Zap size={24} />
                  </div>
                  <h4 className="font-bold">Fast Learner</h4>
                  <p className="text-xs text-blue-100">
                    Quickly adapts to new accounting software and BIR
                    regulations.
                  </p>
                </div>
              </div>
              <div className="pt-8 space-y-4">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                  <div className="text-blue-600 mb-2">
                    <CheckCircle size={24} />
                  </div>
                  <h4 className="font-bold">Detail Focused</h4>
                  <p className="text-xs text-slate-500">
                    Ensuring 100% accuracy in bookkeeping and tax filings.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                  <div className="text-blue-600 mb-2">
                    <User size={24} />
                  </div>
                  <h4 className="font-bold">Leader</h4>
                  <p className="text-xs text-slate-500">
                    Former JPIA President with strong communication skills.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 order-1 lg:order-2">
            <h2 className="text-3xl font-bold text-slate-900">About Me</h2>
            <p className="text-slate-600 leading-relaxed">
              I am a dedicated and detail-oriented Accounting graduate with a
              passion for helping businesses navigate the complexities of
              financial management. My academic journey at PUP Biñan, where I
              graduated{" "}
              <span className="font-semibold text-blue-600">Cum Laude</span>,
              provided me with a solid foundation in accounting principles and
              tax laws.
            </p>
            <p className="text-slate-600 leading-relaxed">
              During my time as{" "}
              <span className="font-semibold text-slate-900">
                JPIA President (2023-2024)
              </span>
              , I developed strong leadership and organizational skills, which I
              now apply to streamlining financial records and ensuring tax
              compliance for my clients. I believe that clear financial
              processes are the backbone of any successful business.
            </p>
            <div className="pt-4 grid grid-cols-2 gap-6">
              <div>
                <p className="text-2xl font-bold text-blue-600">1.25</p>
                <p className="text-sm text-slate-500 uppercase font-semibold">
                  GWA Average
                </p>
              </div>
              <div>
                <p className="text-2xl font-bold text-blue-600">100%</p>
                <p className="text-sm text-slate-500 uppercase font-semibold">
                  BIR Compliance
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
