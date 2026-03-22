import { useEffect, useRef, useState } from "react";

interface Props {
  src: string;
  alt: string;
  className?: string;
  threshold?: number;
}

export default function TransparentImage({ src, alt, className = "", threshold = 40 }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.drawImage(img, 0, 0);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      // Sample corner pixels to determine background color
      const corners = [
        [data[0], data[1], data[2]],
        [data[(canvas.width - 1) * 4], data[(canvas.width - 1) * 4 + 1], data[(canvas.width - 1) * 4 + 2]],
        [data[(canvas.height - 1) * canvas.width * 4], data[(canvas.height - 1) * canvas.width * 4 + 1], data[(canvas.height - 1) * canvas.width * 4 + 2]],
      ];
      const bgR = Math.round(corners.reduce((s, c) => s + c[0], 0) / corners.length);
      const bgG = Math.round(corners.reduce((s, c) => s + c[1], 0) / corners.length);
      const bgB = Math.round(corners.reduce((s, c) => s + c[2], 0) / corners.length);

      for (let i = 0; i < data.length; i += 4) {
        const r = data[i], g = data[i + 1], b = data[i + 2];
        const dist = Math.sqrt(
          (r - bgR) ** 2 + (g - bgG) ** 2 + (b - bgB) ** 2
        );
        if (dist < threshold) {
          data[i + 3] = 0; // transparent
        } else if (dist < threshold * 2) {
          data[i + 3] = Math.round(((dist - threshold) / threshold) * 255);
        }
      }
      ctx.putImageData(imageData, 0, 0);
      setLoaded(true);
    };
    img.src = src;
  }, [src, threshold]);

  return (
    <canvas
      ref={canvasRef}
      aria-label={alt}
      role="img"
      className={`${className} ${loaded ? "opacity-100" : "opacity-0"} transition-opacity duration-500`}
    />
  );
}
