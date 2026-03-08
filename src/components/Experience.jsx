import Education from "./Experience/Education";
import Work from "./Experience/Work";

function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
        <Work />
        <Education />
      </div>
    </section>
  );
}

export default Experience;
