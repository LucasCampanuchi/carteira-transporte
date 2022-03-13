import { jsPDF } from 'jspdf'
import { returnType } from '../tools/return_type'

class PDFGenerator {
  async generate (nome, endereco, telefone, curso, image) {
    // eslint-disable-next-line new-cap
    const doc = new jsPDF({
      orientation: 'landscape',
      unit: 'mm'
    })

    // tamanho da area da carteirinha
    doc.setDrawColor(0)
    doc.setFillColor(255, 255, 255)
    doc.rect(0, 0, 86, 56, 'FD')

    // header azul
    doc.setDrawColor(0)
    doc.setFillColor(55, 80, 162)
    doc.rect(1, 1, 84, 11, 'F')

    // titulo detro do header
    doc.setTextColor(255, 255, 255)
    doc.setFontSize(11).setFont(undefined, 'bold')
    doc.text('Carteira de Transporte Intermunicipal', 8, 8)

    // imagem
    doc.addImage(image, returnType(image), 1, 13, 21, 26, null, 'FAST', 0)

    doc.setTextColor(0, 0, 0)
    doc.setFontSize(7).setFont(undefined, 'normal')
    doc.text('Nome', 24, 15)

    doc.setTextColor(0, 0, 0)
    doc.setFontSize(7).setFont(undefined, 'bold')
    doc.text(nome, 24, 18)

    doc.setTextColor(0, 0, 0)
    doc.setFontSize(7).setFont(undefined, 'normal')
    doc.text('Endereço', 24, 22)

    doc.setTextColor(0, 0, 0)
    doc.setFontSize(7).setFont(undefined, 'bold')
    doc.text(endereco, 24, 25)

    doc.setTextColor(0, 0, 0)
    doc.setFontSize(7).setFont(undefined, 'normal')
    doc.text('Telefone', 24, 29)

    doc.setTextColor(0, 0, 0)
    doc.setFontSize(7).setFont(undefined, 'bold')
    doc.text(telefone, 24, 32)

    doc.setTextColor(0, 0, 0)
    doc.setFontSize(7).setFont(undefined, 'normal')
    doc.text('Curso', 24, 36)

    doc.setTextColor(0, 0, 0)
    doc.setFontSize(7).setFont(undefined, 'bold')
    doc.text(curso, 24, 39)

    doc.setDrawColor(0)
    doc.setFillColor(55, 80, 162)
    doc.rect(1, 40, 84, 15, 'F')

    doc.setTextColor(255, 255, 255)
    doc.setFontSize(12).setFont(undefined, 'bold')
    doc.text('UNIP', 39, 48)

    doc.save('a4.pdf')
  }
}

export default new PDFGenerator()
