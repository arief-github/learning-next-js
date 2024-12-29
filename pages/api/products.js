import fs from 'fs'
import path from 'path'

export default async function handler(req, res) {
    const dataPath = path.join(process.cwd(), 'data', 'products.json')
    const fileContents = fs.readFileSync(dataPath, 'utf-8')
    const products = JSON.parse(fileContents)

    res.status(200).json(products)
}