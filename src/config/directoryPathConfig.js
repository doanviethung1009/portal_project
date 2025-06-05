import path from "path"
import fs from "fs"
import {fileURLToPath} from "url"

// Go up one folder	                path.join(__dirname, '..')
// Go up two folders	            path.join(__dirname, '..', '..')
// Go to child folder	            path.join(__dirname, 'child')
// Go up then into another folder	path.join(__dirname, '..', 'views')
// Go to nested child folders	    path.join(__dirname, 'public', 'img', 'logo.png')
// scan file in the folder          fs.readdirSync(formatsDir).forEach(file => {} )

// Tạo lại __filename và __dirname
export const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);

export const folder = path.join(__dirname, "..", "formats");

 // fs.readdirSync(formatsDir).forEach(file => {
    //     const routeName = path.basename(file, 'Format.js');
    //     const formatHandler = path.join(formatsDir, file);

    //     formatModules[routeName] = formatHandler;
    //     console.log(">>> check ", formatHandler)

    //     api.get(`/${routeName}`, formatCall(formatHandler))
    // })

    
// export __dirname = 