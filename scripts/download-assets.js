import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


async function downloadAssets() {
    const publicPath = path.join(__dirname, "../public");
    const assetsPath = path.join(publicPath, "_next");

    const files = fs.readdirSync(assetsPath).filter(file => file.endsWith(".html"));
    console.log({ files })
    for (const file of files) {
        const content = fs.readFileSync(path.join(assetsPath, file), 'utf-8');
        const url = content.match(/http.+/g)?.[0];
        if (!url) continue;
        console.log(url)
        const res = await fetch(url, {
            method: "GET",
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
            },
        });

        const buffer = await res.arrayBuffer();

        fs.writeFileSync(path.join(assetsPath, file.replace(".html", ".png")), Buffer.from(buffer));

    }

}

// downloadAssets()

async function deleteHTMLfiles() {
    const publicPath = path.join(__dirname, "../public");
    const assetsPath = path.join(publicPath, "_next");

    const files = fs.readdirSync(assetsPath).filter(file => file.endsWith(".html"));
    console.log({ files })
    for (const file of files) {
        fs.unlinkSync(path.join(assetsPath, file));
    }

}

deleteHTMLfiles()