import { test, expect } from '@playwright/test';

let id: any;
let token = '0fc3577c172bbb4ed577ddd04c71b09fe7e066549e66f24cc3decc87fd57cf21';

test.describe('Suite de testes API Gorest', async () => {

    test('GET ALL API Request', async ({ request }) => {
        const response = await request.get('https://gorest.co.in/public/v2/users')

        console.log(response)
        console.log(response.status())
        expect(200).toEqual(response.status());

    });

    test('POST API Request', async ({ request }) => {
        const response = await request.post('https://gorest.co.in/public/v2/users', {
            data: {
                "name": "Repeteco1234eq3wqwqw",
                "email": "letsgo12144e433@gmail.com",
                "gender": "male",
                "status": "active"
            },
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }

        })

        console.log(response)
        console.log(response.status())
        expect(response.status()).toBe(201)
        let responseBody = await response.json()
        id = responseBody.id

    });
    
    test('GET ONE SINGLE API Request', async ({ request }) => {
        const response = await request.get(`https://gorest.co.in/public/v2/users/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },

        })

        console.log(response)
        console.log(response.status())
        expect(response.status()).toBe(200)

    });
    test('PUT API Request', async ({ request }) => {
        const response = await request.put(`https://gorest.co.in/public/v2/users/${id}`, {
            data: {
                "name": "RepetecoPeUT4qaswqqw1",
                "email": "letsgo12e231@gmail.com",
                "gender": "male",
                "status": "active"
            },
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }

        })

        console.log(response)
        console.log(response.status())
        expect(response.status()).toBe(200)

    });

    test('DELETE API Request', async ({ request }) => {
        const response = await request.delete(`https://gorest.co.in/public/v2/users/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
        console.log(response)
        console.log(response.status())
        expect(response.status()).toBe(204);

    });
})
