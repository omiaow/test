import fetch from 'node-fetch';
import fs from 'fs';

// const user = {
//     "username": "Mike"
// }

// получаем токен
// fetch('http://94.103.91.4:5000/auth/registration', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(user)
// })
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error('Error:', error));

/** получили следующий токен
 * {
 *    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ik1pa2kiLCJpZCI6NTIyLCJpYXQiOjE3MzI1NTYxMDcsImV4cCI6MTczMjgxNTMwN30.xY5QRZAHrOID0ouCxFlxA3uDh92oRGB6Ggi6bjED1LQ"
 * }
 * используем для получения клиентов
 */

// получаем клиентов
fetch('http://94.103.91.4:5000/clients', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ik1pa2kiLCJpZCI6NTIyLCJpYXQiOjE3MzI1NTYxMDcsImV4cCI6MTczMjgxNTMwN30.xY5QRZAHrOID0ouCxFlxA3uDh92oRGB6Ggi6bjED1LQ'
    }
})
    .then(response => response.json())
    .then(data => fs.writeFileSync('export.json', JSON.stringify(data)))
    .catch(error => console.error('Error:', error));