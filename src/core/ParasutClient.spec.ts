import { describe, test, expect } from "@jest/globals";
import { config } from "dotenv";
import { ParasutClient } from "./ParasutClient";

let client: ParasutClient;

describe("Parasut Client tests.", () => {
    beforeAll(() => {
        config();

        client = new ParasutClient(
            process.env.CLIENT_ID as string,
            process.env.CLIENT_SECRET as string,
            process.env.PARASUT_USERNAME as string,
            process.env.PARASUT_PASSWORD as string,
            process.env.REDIRECT_URI as string,
            Number(process.env.COMPANY_ID)
        );
    });

    test("Token Authentication", () => {
        expect(client).toBeInstanceOf(ParasutClient);
    });

    test("Get sales invoices", async () => {
        const response = await client.GetSalesInvoices({
            "page[size]": 25,
            "page[number]": 1,
        });

        expect(response?.data.shift()?.id).toBeDefined();
    });
});
