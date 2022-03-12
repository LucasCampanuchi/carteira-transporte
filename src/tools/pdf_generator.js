import { jsPDF } from 'jspdf'

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
    doc.setFontSize(12).setFont(undefined, 'w900')
    doc.text('Carteira de Transporte Intermunicipal', 10, 8)

    // imagem
    doc.addImage(image, 'JPG', 1, 13, 21, 26)

    doc.setTextColor(0, 0, 0)
    doc.setFontSize(7)
    doc.text('Nome', 24, 15)

    doc.setTextColor(0, 0, 0)
    doc.setFontSize(7).setFont(undefined, 'bold')
    doc.text(nome, 24, 17.5)

    doc.setTextColor(0, 0, 0)
    doc.setFontSize(7).setFont(undefined, 'normal')
    doc.text('Endereço', 24, 22)

    doc.setTextColor(0, 0, 0)
    doc.setFontSize(7).setFont(undefined, 'bold')
    doc.text(endereco, 24, 24.5)

    doc.setTextColor(0, 0, 0)
    doc.setFontSize(7).setFont(undefined, 'normal')
    doc.text('Telefone', 24, 29)

    doc.setTextColor(0, 0, 0)
    doc.setFontSize(7).setFont(undefined, 'bold')
    doc.text(telefone, 24, 31.5)

    doc.setTextColor(0, 0, 0)
    doc.setFontSize(7).setFont(undefined, 'normal')
    doc.text('Curso', 24, 36)

    doc.setTextColor(0, 0, 0)
    doc.setFontSize(7).setFont(undefined, 'bold')
    doc.text(curso, 24, 38.5)

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
