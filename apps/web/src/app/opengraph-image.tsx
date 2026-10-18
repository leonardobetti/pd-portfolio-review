import { ImageResponse } from "@vercel/og";

export const alt = "Product Designer Portfolio Review";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#0a0a0b",
        padding: "72px 80px",
      }}
    >
      <div
        style={{
          display: "flex",
          width: 28,
          height: 28,
          borderRadius: 999,
          background: "#ffffff",
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 24,
          maxWidth: 980,
        }}
      >
        <div
          style={{
            color: "#ffffff",
            fontSize: 72,
            fontWeight: 700,
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
          }}
        >
          Product Designer Portfolio Review
        </div>
        <div
          style={{
            color: "rgba(255,255,255,0.72)",
            fontSize: 32,
            fontWeight: 450,
            letterSpacing: "-0.01em",
            lineHeight: 1.35,
          }}
        >
          A hiring reviewer&apos;s take on your design portfolio
        </div>
      </div>
    </div>,
    {
      ...size,
    },
  );
}
