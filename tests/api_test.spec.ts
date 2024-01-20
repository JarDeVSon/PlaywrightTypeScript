import { test, expect } from "@playwright/test";
import { data_api } from "../fixtures/data_api.json";

let id: any;
let token = "6d8e9e0e14b23014559a578911caac800b1a7eb67235cf81c04fdf1639b4d0ab";

test.describe("Suite de testes API Gorest", async () => {
  test("GET ALL API Request", async ({ request }) => {
    const response = await request.get("https://gorest.co.in/public/v2/users");

    console.log(response);
    console.log("Status obtido: " + response.status());
    expect(response.status()).toBe(200);
  });

  test("POST API Request", async ({ request }) => {
    const response = await request.post(
      "https://gorest.co.in/public/v2/users",
      {
        data: data_api,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log(response);
    console.log("Status obtido: " + response.status());
    expect(response.status()).toBe(201);
    let responseBody = await response.json();
    id = responseBody.id;
    console.log("ID obtido: " + id);
  });

  test("GET ONE SINGLE API Request", async ({ request }) => {
    const response = await request.get(
      `https://gorest.co.in/public/v2/users/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log(response);
    console.log("Status obtido: " + response.status());
    expect(response.status()).toBe(200);
  });
  test("PUT API Request", async ({ request }) => {
    const response = await request.put(
      `https://gorest.co.in/public/v2/users/${id}`,
      {
        data: {
          name: "RepetecojPeUT4qaswqqw1",
          email: "letsgo12ke231@gmail.com",
          gender: "male",
          status: "active",
        },
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log(response);
    console.log("Status obtido: " + response.status());
    expect(response.status()).toBe(200);
  });

  test("DELETE API Request", async ({ request }) => {
    const response = await request.delete(
      `https://gorest.co.in/public/v2/users/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response);
    console.log("Status obtido: " + response.status());
    expect(response.status()).toBe(204);
  });
});
