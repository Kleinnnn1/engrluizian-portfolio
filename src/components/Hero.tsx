import ImagePlaceholder from "./ImagePlaceholder";
import {
  User,
  FolderKanban,
  Wrench,
  Briefcase,
  GraduationCap,
  Mail,
} from "lucide-react";
import educationImage from "../assets/education.jpg";
import luizImage from "../assets/luiz.jpg";
import projectsImage from "../assets/projects.png";
import skillsImage from "../assets/skills.png";
import contactImage from "../assets/contact.png";
import experienceImage from "../assets/experience.png";

const tiles = [
  {
    id: "about",
    label: "About Me",
    span: "row-span-2",
    icon: User,
    tint: "from-slate-900/20 to-slate-900/80",
    image: luizImage,
  },
  {
    id: "projects",
    label: "Projects",
    span: "",
    icon: FolderKanban,
    tint: "from-amber-900/10 to-amber-950/80",
    image: projectsImage,
  },
  {
    id: "skills",
    label: "Skills",
    span: "",
    icon: Wrench,
    tint: "from-emerald-900/10 to-emerald-950/80",
    image: skillsImage,
  },
  {
    id: "experience",
    label: "Experience",
    span: "row-span-2",
    icon: Briefcase,
    tint: "from-stone-900/20 to-stone-950/85",
    image: experienceImage,
  },
  {
    id: "education",
    label: "Education",
    span: "",
    icon: GraduationCap,
    tint: "from-sky-900/10 to-sky-950/80",
    image: educationImage,
  },
  {
    id: "contact",
    label: "Contact",
    span: "",
    icon: Mail,
    tint: "from-rose-900/10 to-rose-950/80",
    image: contactImage,
  },
];

export default function Hero() {
  return (
    <section className="max-w-5xl mx-auto px-4 pt-12 pb-8">
      <p className="text-xs font-semibold tracking-widest uppercase text-amber-600 mb-2">
        Portfolio
      </p>

      <h1 className="text-3xl font-bold mb-10 text-ink tracking-tight">
        Engr. Luiz Ian Galarrita
      </h1>

      {/* <p className="text-sm text-steel mb-8">
        Civil Engineer{" "}
        <span className="text-steel/60">
          — click a tile to jump to a section
        </span>
      </p> */}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[140px]">
        {tiles.map(({ id, label, span, icon: Icon, tint, image }) => (
          <a
            key={id}
            href={`#${id}`}
            className={`group relative rounded-xl overflow-hidden flex items-end p-4
              shadow-sm ring-1 ring-black/5
              transition-all duration-300 ease-out
              hover:shadow-xl hover:-translate-y-0.5 hover:ring-black/10
              ${span}`}
          >
            {image ? (
              <img
                src={image}
                alt={label}
                className="absolute inset-0 w-full h-full object-cover scale-105 transition-transform duration-500 group-hover:scale-110"
              />
            ) : (
              <ImagePlaceholder
                className="absolute inset-0 scale-105 transition-transform duration-500 group-hover:scale-110"
                label=""
              />
            )}

            {/* Gradient scrim for legibility + mood */}
            <div
              className={`absolute inset-0 bg-gradient-to-t ${tint} opacity-90 transition-opacity duration-300 group-hover:opacity-100`}
            />

            {/* Icon */}
            <Icon
              className="absolute top-3 right-3 w-4 h-4 text-white/70 transition-transform duration-300 group-hover:scale-110 group-hover:text-white"
              strokeWidth={1.75}
            />

            {/* Label */}
            <span className="relative z-10 text-white text-sm font-semibold tracking-wide drop-shadow-sm">
              {label}

              <span className="block h-0.5 w-0 bg-amber-400 mt-1 transition-all duration-300 group-hover:w-full" />
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
