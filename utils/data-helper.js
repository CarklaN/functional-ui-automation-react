import fs from 'fs'

/**
 * Reads a CSV file and converts it to an array of JS objects.
 * Each row in the CSV becomes an object where column headers are used as keys.
 *
 * @description This function parses semicolon-separated CSV files and maps each data row
 * to an object using the first row as column headers.
 *
 * @param {string} localeData - The file path to the CSV file to be processed
 *
 * @returns {Array<Object>} An array of objects where each object represents a CSV row
 * with properties corresponding to the CSV column headers
 *
 */
export function mapDataFromCSV(dataPath) {
    const response = []
    const data = fs.readFileSync(dataPath, 'utf8')
    const rows = data.split('\n')
    let heading = rows[0].replace(/\r/g, '').split(';')
    const dataRows = rows.slice(1)
    dataRows.forEach(row => {
        const values = row.replace(/\r/g, '').split(';')
        const rowData = {}
        heading.forEach((key, index) => {
            rowData[key] = values[index]
        })
        response.push(rowData)
    })
    return response
}
