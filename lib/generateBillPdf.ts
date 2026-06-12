import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'

export interface BookingDetails {
  bookingId: string
  paymentId: string
  customerName: string
  customerPhone: string
  pickup: string
  drop: string
  date: string
  time: string
  vehicle: string
  tripType: string
  amount: number
  gst: number
  totalAmount: number
  paymentDate: string
}

export function generateBillPdf(details: BookingDetails) {
  const doc = new jsPDF()

  const primaryColor: [number, number, number] = [29, 78, 216]   // Navy blue #5B21B6
  const tealColor: [number, number, number] = [0, 201, 184]      // Teal #F59E0B
  const darkColor: [number, number, number] = [15, 23, 42]       // Slate-900
  const grayColor: [number, number, number] = [100, 116, 139]    // Slate-500
  const lightGray: [number, number, number] = [241, 245, 249]    // Slate-100

  const pageWidth = doc.internal.pageSize.getWidth()

  // ── HEADER BACKGROUND ──
  doc.setFillColor(...primaryColor)
  doc.rect(0, 0, pageWidth, 50, 'F')

  // Teal accent bar
  doc.setFillColor(...tealColor)
  doc.rect(0, 48, pageWidth, 4, 'F')

  // ── LOGO TEXT ──
  doc.setTextColor(255, 255, 255)
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(26)
  doc.text('Urban', 15, 25)

  doc.setTextColor(...tealColor)
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(26)
  doc.text('Miles', 46, 25)

  doc.setTextColor(200, 220, 255)
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(8)
  doc.text('PREMIUM CAB SERVICE', 15, 32)

  // ── INVOICE LABEL (right side) ──
  doc.setTextColor(255, 255, 255)
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(18)
  doc.text('INVOICE', pageWidth - 15, 22, { align: 'right' })
  doc.setFontSize(8)
  doc.setFont('helvetica', 'normal')
  doc.setTextColor(200, 220, 255)
  doc.text(`# ${details.bookingId}`, pageWidth - 15, 30, { align: 'right' })

  // ── PAYMENT SUCCESS BADGE ──
  doc.setFillColor(22, 163, 74)  // green-600
  doc.roundedRect(pageWidth - 55, 35, 42, 10, 2, 2, 'F')
  doc.setTextColor(255, 255, 255)
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(8)
  doc.text('✓  PAYMENT SUCCESSFUL', pageWidth - 34, 41.5, { align: 'center' })

  // ── COMPANY INFO ──
  let y = 62
  doc.setTextColor(...grayColor)
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(8)
  doc.text('Urban Miles Cab Services', 15, y)
  doc.text('Lohegaon, Pune, Maharashtra 411014', 15, y + 5)
  doc.text('Phone: +91 7857870449  |  Email: info@urbanmiles.in', 15, y + 10)

  // Payment date on right
  doc.text(`Payment Date: ${details.paymentDate}`, pageWidth - 15, y, { align: 'right' })
  doc.text(`Payment ID: ${details.paymentId}`, pageWidth - 15, y + 5, { align: 'right' })

  // ── DIVIDER ──
  y = 88
  doc.setDrawColor(...lightGray)
  doc.setLineWidth(0.5)
  doc.line(15, y, pageWidth - 15, y)

  // ── CUSTOMER DETAILS BOX ──
  y = 95
  doc.setFillColor(...lightGray)
  doc.roundedRect(15, y, pageWidth - 30, 28, 3, 3, 'F')

  doc.setTextColor(...grayColor)
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(7)
  doc.text('BILLED TO', 22, y + 8)

  doc.setTextColor(...darkColor)
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(11)
  doc.text(details.customerName, 22, y + 16)

  doc.setFont('helvetica', 'normal')
  doc.setFontSize(9)
  doc.setTextColor(...grayColor)
  doc.text(`+91 ${details.customerPhone}`, 22, y + 22)

  // ── TRIP DETAILS SECTION ──
  y = 132
  doc.setTextColor(...primaryColor)
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(11)
  doc.text('Trip Details', 15, y)

  doc.setDrawColor(...primaryColor)
  doc.setLineWidth(0.8)
  doc.line(15, y + 2, 50, y + 2)

  autoTable(doc, {
    startY: y + 6,
    margin: { left: 15, right: 15 },
    head: [['', '']],
    body: [
      ['Pickup Location', details.pickup],
      ['Drop Location', details.drop],
      ['Trip Date', details.date],
      ['Pickup Time', details.time],
      ['Vehicle Type', details.vehicle],
      ['Trip Type', details.tripType],
    ],
    headStyles: { fillColor: primaryColor, textColor: [255, 255, 255], fontSize: 8 },
    bodyStyles: { fontSize: 9, textColor: [30, 40, 60] },
    alternateRowStyles: { fillColor: [248, 250, 252] },
    columnStyles: {
      0: { fontStyle: 'bold', cellWidth: 60, textColor: grayColor },
      1: { cellWidth: 'auto' },
    },
    showHead: false,
    theme: 'plain',
  })

  // ── FARE BREAKDOWN ──
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const fareTableY = (doc as unknown as { lastAutoTable: { finalY: number } }).lastAutoTable.finalY + 12

  doc.setTextColor(...primaryColor)
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(11)
  doc.text('Fare Breakdown', 15, fareTableY)

  doc.setDrawColor(...primaryColor)
  doc.setLineWidth(0.8)
  doc.line(15, fareTableY + 2, 58, fareTableY + 2)

  const gstAmount = details.gst
  const baseFare = details.amount

  autoTable(doc, {
    startY: fareTableY + 6,
    margin: { left: 15, right: 15 },
    head: [['Description', 'Amount']],
    body: [
      ['Base Fare', `₹${baseFare.toFixed(2)}`],
      ['GST (5%)', `₹${gstAmount.toFixed(2)}`],
    ],
    headStyles: {
      fillColor: primaryColor,
      textColor: [255, 255, 255],
      fontSize: 9,
      fontStyle: 'bold',
    },
    bodyStyles: { fontSize: 9, textColor: [30, 40, 60] },
    alternateRowStyles: { fillColor: [248, 250, 252] },
    columnStyles: {
      0: { cellWidth: 'auto' },
      1: { cellWidth: 40, halign: 'right' },
    },
  })

  // ── TOTAL BOX ──
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const totalY = (doc as unknown as { lastAutoTable: { finalY: number } }).lastAutoTable.finalY + 4
  doc.setFillColor(...primaryColor)
  doc.roundedRect(15, totalY, pageWidth - 30, 14, 2, 2, 'F')
  doc.setTextColor(255, 255, 255)
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(11)
  doc.text('TOTAL AMOUNT PAID', 22, totalY + 9)
  doc.setFontSize(13)
  doc.text(`₹${details.totalAmount.toFixed(2)}`, pageWidth - 22, totalY + 9, { align: 'right' })

  // ── FOOTER ──
  const footerY = totalY + 28
  doc.setFillColor(...lightGray)
  doc.rect(0, footerY, pageWidth, 30, 'F')

  doc.setFillColor(...tealColor)
  doc.rect(0, footerY, pageWidth, 2, 'F')

  doc.setTextColor(...grayColor)
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(8)
  doc.text('Thank you for choosing Urban Miles! We look forward to serving you again.', pageWidth / 2, footerY + 10, { align: 'center' })
  doc.text('For support: +91 7857870449  |  info@urbanmiles.in', pageWidth / 2, footerY + 17, { align: 'center' })

  doc.setTextColor(...primaryColor)
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(7)
  doc.text('www.urbanmiles.in', pageWidth / 2, footerY + 24, { align: 'center' })

  // ── SAVE ──
  doc.save(`UrbanMiles_Bill_${details.bookingId}.pdf`)
}
