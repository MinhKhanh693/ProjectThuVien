import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
// import workerUrl from '@pdfjs-dist/build/pdf.worker.js';
import React from "react";
import file from "./../../../asset/Files/LAYOUT-FULL.pdf";

export function ViewOnlineProductLayout() {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.13.216/build/pdf.worker.min.js">
      <div
        className="viewOnlineProductLayout Container"
        style={{
          border: "1px solid rgba(0, 0, 0, 0.3)",
          height: "570px",
        }}
      >
        <Viewer fileUrl={file} plugins={[defaultLayoutPluginInstance]} />
      </div>
    </Worker>
  );
}
