import React from 'react'
import printCheck from '../../assets/printPage.png'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
export default function PrintCheck() {
    function printDocument() {
        const input = document.getElementById('divToPrint');
        html2canvas(input)
          .then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF("p", "mm", "a2");
            pdf.addImage(imgData, 'JPEG', 0, 0 , 400 , 300);
            // pdf.output('dataurlnewwindow');
            pdf.save("download.pdf");
          })
        ;
      }
    return (
        <div  style={{ width: "90%", height: "auto", margin: "0 auto", overflow: "hidden" }}>
            <img id='divToPrint' width={"100%"} src={printCheck} alt="check" style={{ transform: "translateX(-50px)" }} />
            <div style={{}}>
                <button
                    style={{
                        width: "276px",
                        height: "55px",
                        background: "#325ECD",
                        borderRadius: "16px",
                        fontWeight: 500,
                        fontSize: "30px",
                        color:"white",
                        border:"none",
                        margin:"20px 0"
                    }}
                onClick={printDocument}
                >Chop etish </button>
            </div>
        </div >
    )
}