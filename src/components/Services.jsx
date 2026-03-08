import { PieChart, Calculator, BookOpen, ShieldCheck } from "lucide-react";

function Services() {
  const services = [
    {
      title: "Tax Compliance",
      desc: "Expert handling of BIR Forms (1601C, 2550Q, 1702Q, etc.), VAT, SLSP, and Withholding Taxes.",
      icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "Bookkeeping",
      desc: "Accurate recording of financial transactions and reconciliation for small businesses.",
      icon: <BookOpen className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "Financial Reporting",
      desc: "Preparation of clear, professional financial statements to track your business growth.",
      icon: <PieChart className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "Payroll & Billing",
      desc: "End-to-end payroll processing, billing, and accounts receivable/payable management.",
      icon: <Calculator className="w-8 h-8 text-blue-600" />,
    },
  ];

  return (
    <section id="services" className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Specialized Financial Services
          </h2>
          <p className="text-slate-600">
            Tailored solutions for small businesses, freelancers, and startups
            looking to organize their finances and stay compliant with
            government requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-50 transition-all group"
            >
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
