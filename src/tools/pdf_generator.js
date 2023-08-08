import { jsPDF } from "jspdf";
import { returnType } from "../tools/return_type";

class PDFGenerator {
  async generate(nome, endereco, telefone, curso, image, instituicao) {
    // eslint-disable-next-line new-cap
    const doc = new jsPDF({
      orientation: "landscape",
      unit: "mm",
    });

    const margin = 10;

    // tamanho da area da carteirinha
    doc.setDrawColor(0);
    doc.setFillColor(255, 255, 255);
    doc.rect(0 + margin, 0 + margin, 86, 56, "FD");

    // header azul
    doc.setDrawColor(0);
    doc.setFillColor(55, 80, 162);
    doc.rect(1 + margin, 1 + margin, 84, 11, "F");

    // titulo detro do header
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(11).setFont(undefined, "bold");
    doc.text("Carteira de Transporte Intermunicipal", 8 + margin, 8 + margin);

    // imagem
    doc.addImage(
      image,
      returnType(image),
      1 + margin,
      13 + margin,
      21,
      26,
      null,
      "FAST",
      0
    );

    doc.setTextColor(0, 0, 0);
    doc.setFontSize(7).setFont(undefined, "normal");
    doc.text("Nome", 24 + margin, 15 + margin);

    doc.setTextColor(0, 0, 0);
    doc.setFontSize(7).setFont(undefined, "bold");
    doc.text(nome, 24 + margin, 18 + margin);

    doc.setTextColor(0, 0, 0);
    doc.setFontSize(7).setFont(undefined, "normal");
    doc.text("Endereço", 24 + margin, 22 + margin);

    doc.setTextColor(0, 0, 0);
    doc.setFontSize(7).setFont(undefined, "bold");
    doc.text(endereco, 24 + margin, 25 + margin);

    doc.setTextColor(0, 0, 0);
    doc.setFontSize(7).setFont(undefined, "normal");
    doc.text("Telefone", 24 + margin, 29 + margin);

    doc.setTextColor(0, 0, 0);
    doc.setFontSize(7).setFont(undefined, "bold");
    doc.text(telefone, 24 + margin, 32 + margin);

    doc.setTextColor(0, 0, 0);
    doc.setFontSize(7).setFont(undefined, "normal");
    doc.text("Curso", 24 + margin, 36 + margin);

    doc.setTextColor(0, 0, 0);
    doc.setFontSize(7).setFont(undefined, "bold");
    doc.text(curso, 24 + margin, 39 + margin);

    doc.setDrawColor(0);
    doc.setFillColor(55, 80, 162);
    doc.rect(1 + margin, 40 + margin, 84, 15, "F");

    doc.setTextColor(255, 255, 255);
    doc.setFontSize(12).setFont(undefined, "bold");
    doc.text(instituicao ?? "UNIP", 39 + margin, 48 + margin);

    doc.save("Carterinha.pdf");
  }
}

export default new PDFGenerator();
