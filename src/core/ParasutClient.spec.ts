import { describe, test, expect } from "@jest/globals";
import { config } from "dotenv";
import { ParasutClient } from "./ParasutClient";

describe("Parasut Client tests.", () => {
    beforeAll(() => {
        config();
    });

    test("Token Authentication", () => {
        try {
            const client = new ParasutClient(
                process.env.CLIENT_ID as string,
                process.env.CLIENT_SECRET as string,
                process.env.PARASUT_USERNAME as string,
                process.env.PARASUT_PASSWORD as string,
                process.env.REDIRECT_URI as string
            );

            expect(client).toBeInstanceOf(ParasutClient);
        } catch (error) {
            expect(error).toBeUndefined();
        }
    });
});
