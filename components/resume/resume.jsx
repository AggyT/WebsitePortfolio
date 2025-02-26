import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

// Ensure compatibility with Next.js
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.10.111/pdf.worker.min.js`;

export default function Resume() {
    const [numPages, setNumPages] = useState<number | null>(null);

    return (
        <div>
            <h1>My Resume</h1>
            <Document
                file="/NewResume.pdf"
                onLoadSuccess={({ numPages }) => setNumPages(numPages)}
            >
                {Array.from(new Array(numPages), (_, index) => (
                    <Page key={`page_${index + 1}`} pageNumber={index + 1} />
                ))}
            </Document>
        </div>
    );
}
