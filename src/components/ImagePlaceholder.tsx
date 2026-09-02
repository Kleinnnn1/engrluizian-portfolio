interface ImagePlaceholderProps {
  className?: string;
  label?: string;
}

export default function ImagePlaceholder({
  className = "",
  label = "Image",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`flex items-center justify-center bg-white border border-dashed border-steel/40 text-steel/60 text-xs ${className}`}
    >
      {label}
    </div>
  );
}
