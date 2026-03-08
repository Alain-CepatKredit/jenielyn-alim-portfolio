import { Mail, Phone, MapPin } from "lucide-react";

function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-blue-900 text-white overflow-hidden relative"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-[120px] opacity-20 -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 rounded-full blur-[120px] opacity-10 -ml-20 -mb-20"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 relative z-10">
        <div className="space-y-8">
          <h2 className="text-4xl font-extrabold">
            Ready to organize your business finances?
          </h2>
          <p className="text-blue-200 text-lg leading-relaxed">
            Whether you're a student needing help with accounting projects or a
            small business owner looking for a dedicated finance partner, I'm
            here to help.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 bg-blue-800 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                <Mail className="text-blue-200" />
              </div>
              <div>
                <p className="text-sm text-blue-300">Email Me</p>
                <p className="font-bold">alimjenielyn@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 bg-blue-800 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                <Phone className="text-blue-200" />
              </div>
              <div>
                <p className="text-sm text-blue-300">Call Me</p>
                <p className="font-bold">(+63) 920 881 6972</p>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 bg-blue-800 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                <MapPin className="text-blue-200" />
              </div>
              <div>
                <p className="text-sm text-blue-300">Location</p>
                <p className="font-bold">Biñan, Laguna, Philippines</p>
              </div>
            </div>
          </div>
        </div>

        <form
          className="bg-white p-8 rounded-3xl space-y-4 text-slate-900 shadow-2xl"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-600">
                Full Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-600">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                placeholder="john@example.com"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-600">Subject</label>
            <select className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all appearance-none">
              <option>SME Accounting Services</option>
              <option>Freelance Tax Filing</option>
              <option>Student Academic Support</option>
              <option>Other Inquiry</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-600">Message</label>
            <textarea
              rows="4"
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              placeholder="Tell me about your project..."
            ></textarea>
          </div>
          <button className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
