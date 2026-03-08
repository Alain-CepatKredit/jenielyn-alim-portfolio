import { CheckCircle, Briefcase } from "lucide-react";
function Work() {
  return (
    <div>
      <div className="flex items-center gap-3 mb-10">
        <Briefcase className="text-blue-600" />
        <h2 className="text-3xl font-bold">Work Experience</h2>
      </div>
      <div className="space-y-8 border-l-2 border-blue-200 pl-8 ml-3 relative">
        <div className="relative">
          <div className="absolute -left-10 top-1 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-sm"></div>
          <p className="text-sm font-bold text-blue-600 mb-1">
            Jan 2025 - Present
          </p>
          <h3 className="text-xl font-extrabold">Finance Associate</h3>
          <p className="text-slate-500 font-medium mb-4 italic">
            TPS Shared Services Inc.
          </p>
          <ul className="space-y-2 text-slate-600 text-sm">
            <li className="flex items-start gap-2">
              <CheckCircle className="text-green-500 shrink-0 mt-1" size={14} />
              Processed payroll and handled BIR compliance (1601C, 2550Q,
              1601EQ, etc.)
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="text-green-500 shrink-0 mt-1" size={14} />
              Streamlined financial records and established clear accounting
              processes.
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="text-green-500 shrink-0 mt-1" size={14} />
              Managed billing, collections, and petty cash systems.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Work;
