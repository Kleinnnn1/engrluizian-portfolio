import ImagePlaceholder from "./ImagePlaceholder";

const projects = [
  {
    name: "Project Name One",
    description: "Mock short description of the project scope and role.",
  },
  {
    name: "Project Name Two",
    description: "Mock short description of the project scope and role.",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-3xl mx-auto px-4 py-14 border-t border-steel/30"
    >
      <h2 className="text-xl font-bold mb-4">Projects</h2>
      <div className="grid sm:grid-cols-2 gap-4">
        {projects.map((project) => (
          <div
            key={project.name}
            className="border border-steel/30 rounded-md p-4"
          >
            <ImagePlaceholder className="h-28 mb-3" label="Project image" />
            <h3 className="font-semibold text-sm">{project.name}</h3>
            <p className="text-xs text-steel">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
