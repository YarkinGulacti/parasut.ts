import axios from "axios";
import { ParasutEndpoints, HTTPMethods } from "../lib/Endpoints";
import { TokenAuthenticationResponse } from "../lib/types/response/TokenAuthentication.response";

export class ParasutClient {
    private authentication:
        | (TokenAuthenticationResponse & {
              expire_date: Date;
          })
        | undefined;

    constructor(
        private client_id: string,
        private client_secret: string,
        private username: string,
        private password: string,
        private redirect_uri: string
    ) {
        try {
            this.tokenAuthentication(
                this.client_id,
                this.client_secret,
                this.username,
                this.password,
                this.redirect_uri
            )
                .then((token) => {
                    this.authentication = {
                        ...token,
                        expire_date: new Date(
                            new Date().getTime() + token.expires_in
                        ),
                    };
                })
                .catch((error) => {
                    throw error;
                });
        } catch (error) {
            throw error;
        }
    }

    private buildQueryParameters(params: any): string {
        let queryParameters = [];

        for (const key of Object.keys(params)) {
            queryParameters.push(`${key}=${params[key] as string}`);
        }

        return `?${queryParameters.join("&")}`;
    }

    private async buildRequest<T>(
        baseUrl: string,
        endpoint: ParasutEndpoints,
        method: HTTPMethods,
        params?: any,
        body?: any,
        headers?: any
    ) {
        const query = this.buildQueryParameters(params);
        const url = `${baseUrl}${endpoint}${query}`;
        const response = await axios[method](url, body, {
            headers: headers,
        });

        return response.data as T;
    }

    private async tokenAuthentication(
        client_id: string,
        client_secret: string,
        username: string,
        password: string,
        redirect_uri: string
    ) {
        try {
            return await this.buildRequest<TokenAuthenticationResponse>(
                ParasutEndpoints.BASE_URL,
                ParasutEndpoints.TOKEN_URL,
                HTTPMethods.POST,
                {
                    grant_type: "password",
                    client_id,
                    client_secret,
                    username,
                    password,
                    redirect_uri,
                }
            );
        } catch (error) {
            throw error;
        }
    }
}
