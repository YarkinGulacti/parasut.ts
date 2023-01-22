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

        expect(response?.data?.shift()?.id).toBeDefined();
    });

    test("Get sales invoices detailed test", async () => {
        const response = await client.GetSalesInvoices({
            "page[size]": 25,
            "page[number]": 1,
        });

        const firstRecord = response.data?.shift();

        if (firstRecord) {
            expect(firstRecord?.attributes?.billing_postal_code).toBeDefined();
            expect(firstRecord?.attributes?.contact_type).toBeDefined();
            expect(firstRecord?.attributes?.days_overdue).toBeDefined();
            expect(firstRecord?.attributes?.days_till_due_date).toBeDefined();
            expect(firstRecord?.attributes?.is_recurred_item).toBeDefined();
            expect(
                firstRecord?.attributes?.item_type_before_cancellation
            ).toBeDefined();
            expect(firstRecord?.attributes?.net_total_in_trl).toBeDefined();
            expect(firstRecord?.attributes?.payer_tax_numbers).toBeDefined();
            expect(firstRecord?.attributes?.print_note).toBeDefined();
            expect(firstRecord?.attributes?.print_url).toBeDefined();
            expect(firstRecord?.attributes?.printed_at).toBeDefined();
            expect(firstRecord?.attributes?.sharing_preview_path).toBeDefined();
            expect(firstRecord?.attributes?.sharing_preview_url).toBeDefined();
            expect(firstRecord?.attributes?.sharings_count).toBeDefined();
            expect(firstRecord?.attributes?.shipment_date).toBeDefined();
            expect(firstRecord?.attributes?.shipment_document_no).toBeDefined();
            expect(firstRecord?.attributes?.total_paid).toBeDefined();
        }
    });
});
