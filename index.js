const path = require('path');
const { readFileSync } = require('fs');
const http = require('http');

const home = readFileSync('./public/index.html')
const about = readFileSync('./public/about.html')
const contact = readFileSync('./public/contact.html')

const server = http.createServer((request, response) => {
   const url = req.url
   let contentType = getContentType(filePath) || 'text/html'
  //create web server
  if (url == '/') {
    //check the URL of the current request
    res.writeHead(200, {
      'Content-Type': contentType
    })
    res.write(home)
    res.end()
  } else if (url == '/home') {
    res.writeHead(302, { Location: '/' })
    res.write(home)
    res.end()
  } else if (url == '/about') {
    res.writeHead(200, {
      'Content-Type': contentType
    })
    res.write(about)
    res.end()
  } else if (url == '/contact') {
    res.writeHead(200, {
      'Content-Type': contentType
    })
    res.write(contact)
    res.end()
  }
  // 404
  else {
    res.writeHead(404, { 'Content-Type': contentType })
    res.write('<h1>page not found</h1>')
    res.end()
   }
});

const getContentType = (filePath) => {
    let extname = path.extname(filePath)
    if (extname === '.js') {
        return 'text/javascript'
    }
    if (extname === '.css') {
        return 'text/css'
    }
    if (extname === '.jpg') {
        return 'image/jpg'
    }
    if (extname === '.png') {
        return 'image/png'
    }
}



//  if(request.url === '/'){
//     let filePath = path.join(__dirname, 'public', request.url === '/' ? 'index.html': request.url)
//     let contentType = getContentType(filePath) || 'text/html'
//     let emptyPagePath = path.join(__dirname, 'public', '404.html')
//     fs.readFile(filePath, 'utf-8', (err, content) => {
//        if (err) {
//           if (err.code === 'ENOENT') {
//             fs.readFile(emptyPagePath, 'utf-8', (err, content) => {
//                 response.writeHead(200, {'Content-Type': contentType})
//                 response.end(content)
//             })
//           }else {
//             response.writeHead(500)
//             response.end('A sever error has occured')
//           }
//        }

//        if (!err) {
//          response.writeHead(200, {'Content-Type': contentType})
//          response.end(content)
//        }
//     })

const port = 8000;

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
