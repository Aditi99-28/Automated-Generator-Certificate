import jsPDF from "jspdf";
import { Button } from "@mui/material";

const GeneratePDF = ({ formData }) => {
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.text("Certificate of Completion", 50, 30);
    doc.setFontSize(16);
    doc.text(`This certifies that`, 50, 50);
    doc.text(formData.name, 50, 60);
    doc.text(`has successfully completed`, 50, 70);
    doc.text(formData.course, 50, 80);
    doc.text(`on ${formData.date}`, 50, 90);
    doc.save(`${formData.name}-certificate.pdf`);
  };

  return (
    <Button variant="contained" color="secondary" onClick={generatePDF}>
      Download PDF
    </Button>
  );
};

export default GeneratePDF;
