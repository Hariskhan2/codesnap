import React, { useState, useEffect, useRef } from "react";
import Editor from "@monaco-editor/react";
import { toPng, toJpeg } from "html-to-image"; // Import only available exports
import NavBar from './NavBar';


const EditorComponent = () => {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [selectedFormat, setSelectedFormat] = useState("png"); // State for format selection
  const livePreviewRef = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      // Rendering HTML in the live preview div
    }, 250);

    return () => clearTimeout(timeout);
  }, [html, css]);

  // Function to handle image download based on selected format
  const handleGenerateImage = () => {
    if (livePreviewRef.current) {
      const downloadImage = (dataUrl, format) => {
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = `preview-image.${format}`; // Set image download name based on format
        link.click();
      };

      // Handle image generation based on format
      switch (selectedFormat) {
        case "jpeg":
          toJpeg(livePreviewRef.current, { quality: 0.95 }) // Adjust quality for jpeg
            .then((dataUrl) => downloadImage(dataUrl, "jpeg"))
            .catch((err) => console.error("Error generating JPEG:", err));
          break;
        case "webp":
          toPng(livePreviewRef.current) // Generate PNG first
            .then((dataUrl) => convertToWebP(dataUrl)) // Convert to WebP using canvas
            .then((webpUrl) => downloadImage(webpUrl, "webp"))
            .catch((err) => console.error("Error generating WEBP:", err));
          break;
        default:
          toPng(livePreviewRef.current)
            .then((dataUrl) => downloadImage(dataUrl, "png"))
            .catch((err) => console.error("Error generating PNG:", err));
          break;
      }
    }
  };

  // Function to convert PNG to WebP using a canvas
  const convertToWebP = (dataUrl) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = dataUrl;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        canvas.toDataURL("image/webp", 0.8, (webpUrl) => {
          resolve(webpUrl);
        });
      };
      img.onerror = (err) => {
        reject(err);
      };
    });
  };

  return (
    <>
      <NavBar selectedFormat={selectedFormat}  setSelectedFormat={setSelectedFormat} handleGenerateImage={handleGenerateImage} />
      <div className="p-6 bg-gray-50 rounded-lg shadow-lg flex flex-row">
      <div className="flex flex-col" style={{ width: "40%" }}>
        <div className="flex flex-col mb-6">
          <h2 className="text-2xl font-semibold mb-4">HTML Editor</h2>
          <div className="border border-gray-300 rounded-lg overflow-hidden">
            <Editor
              height="300px"
              language="html"
              value={html}
              onChange={(value) => setHtml(value)}
              theme="vs-dark"
              options={{
                automaticLayout: true,
                fontSize: 14,
              }}
            />
          </div>
        </div>
        <div className="flex flex-col mb-6">
          <h2 className="text-2xl font-semibold mb-4">CSS Editor</h2>
          <div className="border border-gray-300 rounded-lg overflow-hidden">
            <Editor
              height="300px"
              language="css"
              value={css}
              onChange={(value) => setCss(value)}
              theme="vs-dark"
              options={{
                automaticLayout: true,
                fontSize: 14,
              }}
            />
          </div>
        </div>
      </div>

      <div className="flex-grow" style={{ marginLeft: "20px" }}>
        <h2 className="text-2xl font-semibold mb-4">Live Preview</h2>
        <div
          className="bg-white border rounded-lg shadow-lg"
          style={{ height: "600px", overflow: "auto" }}
        >
          <div
            ref={livePreviewRef}
            className="w-full h-full p-4"
            style={{ backgroundColor: "#fff" }}
          >
            <style>{css}</style>
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </div>

        {/* Dropdown for selecting the image format */}
        

        {/* Button to trigger image generation */}
       
      </div>
    </div>
    </>
    
  );
};

export default EditorComponent;
