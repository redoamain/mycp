// src/app/maintenance/opengraph-image.tsx
import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Citiplumb Maintenance";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px",
      }}
    >
      {/* Logo */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          marginBottom: "32px",
        }}
      >
        <div
          style={{
            width: "80px",
            height: "80px",
            background: "white",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ fontSize: "48px" }}>🚰</span>
        </div>
        <span
          style={{
            fontSize: "48px",
            fontWeight: "bold",
            color: "white",
          }}
        >
          citiplumb
        </span>
      </div>

      {/* Title */}
      <h1
        style={{
          fontSize: "56px",
          fontWeight: "bold",
          color: "white",
          textAlign: "center",
          marginBottom: "24px",
        }}
      >
        Sedang dalam Pemeliharaan
      </h1>

      {/* Message */}
      <p
        style={{
          fontSize: "24px",
          color: "#bfdbfe",
          textAlign: "center",
          maxWidth: "800px",
        }}
      >
        Kami sedang meningkatkan sistem untuk memberikan pelayanan terbaik. Akan
        segera kembali!
      </p>

      {/* Icon */}
      <div
        style={{
          marginTop: "48px",
          fontSize: "64px",
        }}
      >
        🔧
      </div>
    </div>,
    {
      ...size,
    },
  );
}
