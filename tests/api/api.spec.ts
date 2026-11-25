import { test, expect } from "@playwright/test";
import { data_api } from "../../data/data_api.json";

let id: any;
let token = process.env.TOKEN;

test.describe("Suite de testes API Gorest", async () => {
  test("GET ALL API Request", async ({ request }) => {
    const response = await request.get("https://gorest.co.in/public/v2/users");

    console.log(await response.json());
    console.log(await response);
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
      },
    );

    console.log(await response.json());
    console.log(await response);
    expect(response.status()).toBe(201);
    let responseBody = await response.json();
    id = responseBody.id;
    console.log("ID obtained: " + id);
  });

  test("GET ONE SINGLE API Request", async ({ request }) => {
    const response = await request.get(
      `https://gorest.co.in/public/v2/users/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      },
    );

    console.log(await response.json());
    console.log(await response);
    console.log("ID obtained: " + id);
    expect(response.status()).toBe(200);
  });
  test("PUT API Request", async ({ request }) => {
    const response = await request.put(
      `https://gorest.co.in/public/v2/users/${id}`,
      {
        data: {
          name: "RepetecoPUT",
          email: "PUT@gmail.com",
          gender: "female",
          status: "active",
        },
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      },
    );

    console.log(await response.json());
    console.log(await response);
    console.log("ID obtained: " + id);

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
      },
    );
    console.log("ID used: " + id);
    console.log(await response);
    expect(response.status()).toBe(204);
  });
});
