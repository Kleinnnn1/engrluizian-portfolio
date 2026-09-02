import ImagePlaceholder from "./ImagePlaceholder";

export default function About() {
  return (
    <section
      id="about"
      className="max-w-3xl mx-auto px-4 py-14 border-t border-steel/30"
    >
      <h2 className="text-xl font-bold mb-4">About Me</h2>
      <div className="grid sm:grid-cols-3 gap-6 items-start">
        <ImagePlaceholder
          className="h-40 sm:col-span-1"
          label="Profile photo"
        />
        <p className="text-steel leading-relaxed sm:col-span-2">
          Mock bio text. A short paragraph introducing the engineer's
          background, area of specialization (structural, geotechnical,
          construction management, etc.), years of experience, and what drives
          their approach to civil engineering work. Replace with real content
          later.
        </p>
      </div>
    </section>
  );
}
