import * as Papa from 'papaparse'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function exportData(data: any = {}): void {
    const csv = Papa.unparse(data)
    const downloadLink = document.createElement('a')
    const blob = new Blob(['\ufeff', csv])
    const url = URL.createObjectURL(blob)

    downloadLink.href = url
    downloadLink.download = 'Report.csv'
    document.body.appendChild(downloadLink)
    downloadLink.click()
    document.body.removeChild(downloadLink)
}
