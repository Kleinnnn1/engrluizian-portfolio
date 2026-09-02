const jobs = [
  {
    title: "Job Title — Company",
    period: "2023 — Present",
    description: "Mock description of responsibilities and scope.",
  },
  {
    title: "Job Title — Company",
    period: "2021 — 2023",
    description: "Mock description of responsibilities and scope.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="max-w-3xl mx-auto px-4 py-14 border-t border-steel/30"
    >
      <h2 className="text-xl font-bold mb-4">Experience</h2>
      <div className="space-y-4">
        {jobs.map((job) => (
          <div key={job.title + job.period}>
            <h3 className="font-semibold text-sm">{job.title}</h3>
            <p className="text-xs text-steel mb-1">{job.period}</p>
            <p className="text-sm text-steel">{job.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
