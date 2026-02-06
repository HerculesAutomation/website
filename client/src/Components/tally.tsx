import { useEffect } from "react";

export default function TallyEmbed() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <iframe
        data-tally-src="https://tally.so/embed/VLJRpE?hideTitle=1&transparentBackground=1&dynamicHeight=1"
        loading="lazy"
        width="100%"
        height="600"
        style={{
            border: "none",
            outline: "none",
            background: "transparent",
        }}
        title="Submit Inquiry"
    />
  );
}
