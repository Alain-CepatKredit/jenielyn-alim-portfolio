import { BookOpen } from "lucide-react";

function Education() {
  return (
    <div>
      <div className="flex items-center gap-3 mb-10">
        <BookOpen className="text-blue-600" />
        <h2 className="text-3xl font-bold">Education</h2>
      </div>
      <div className="space-y-10">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h3 className="font-extrabold text-lg">PUP Biñan Campus</h3>
          <p className="text-blue-600 font-bold text-sm">
            BS in Accountancy | 2021 - 2025
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="bg-yellow-50 text-yellow-700 px-3 py-1 rounded-full text-xs font-bold border border-yellow-100">
              Cum Laude
            </span>
            <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold border border-blue-100">
              JPIA President
            </span>
            <span className="bg-slate-50 text-slate-700 px-3 py-1 rounded-full text-xs font-bold border border-slate-100">
              President's Lister
            </span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h3 className="font-extrabold text-lg">
            Biñan Integrated National High School
          </h3>
          <p className="text-blue-600 font-bold text-sm">
            Accountancy & Business Management | 2019 - 2021
          </p>
          <p className="mt-2 text-sm text-slate-600 italic">
            Graduated with High Honors
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h3 className="font-extrabold text-lg">
            Nereo R. Joaquin National High School
          </h3>
          <p className="text-blue-600 font-bold text-sm">
            Class Valedictorian | 2015 - 2019
          </p>
        </div>
      </div>
    </div>
  );
}

export default Education;
