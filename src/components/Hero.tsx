import ImagePlaceholder from "./ImagePlaceholder";

const tiles = [
  { id: "about", label: "About Me", span: "row-span-2" },
  { id: "projects", label: "Projects", span: "" },
  { id: "skills", label: "Skills", span: "" },
  { id: "experience", label: "Experience", span: "row-span-2" },
  { id: "education", label: "Education", span: "" },
  { id: "contact", label: "Contact", span: "" },
];

export default function Hero() {
  return (
    <section className="max-w-5xl mx-auto px-4 pt-10 pb-6">
      <h1 className="text-2xl font-bold mb-1">Engr. Your Name</h1>
      <p className="text-sm text-steel mb-6">
        Civil Engineer — click a tile to jump to a section
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 auto-rows-[140px]">
        {tiles.map((tile) => (
          <a
            key={tile.id}
            href={`#${tile.id}`}
            className={`relative rounded-md overflow-hidden flex items-end p-3 ${tile.span}`}
          >
            <ImagePlaceholder className="absolute inset-0" label="" />
            <span className="relative z-10 bg-ink/85 text-white text-xs font-semibold px-2 py-1 rounded">
              {tile.label}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
