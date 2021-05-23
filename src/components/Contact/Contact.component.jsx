import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import cv from "./TSCV.pdf";
import "./Contact.styles.scss";
import Spinner from "../Spinner/Spinner.component";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Contact = () => {
  return (
    <div className="contact">
      <Document className="pdf-box" loading={<Spinner />} file={cv}>
        <Page
          className="pdf-page"
          height={1200}
          loading={<Spinner />}
          pageNumber={1}
          renderAnnotationLayer={false}
        />
      </Document>
    </div>
  );
};

export default Contact;
