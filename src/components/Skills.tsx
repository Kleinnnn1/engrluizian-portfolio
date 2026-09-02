const skills = [
  "AutoCAD",
  "Structural Analysis",
  "Site Supervision",
  "Cost Estimation",
  "SketchUp",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="max-w-3xl mx-auto px-4 py-14 border-t border-steel/30"
    >
      <h2 className="text-xl font-bold mb-4">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="text-xs px-3 py-1 border border-steel/40 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
