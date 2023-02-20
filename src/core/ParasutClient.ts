import axios from "axios";
import { ParasutService } from "../lib/ParasutService";
import { ParasutEndpoints, HTTPMethods } from "../lib/Endpoints";
import { TokenAuthenticationResponse } from "../lib/types/response/TokenAuthentication.response";
import { GetSalesInvoicesParams } from "../lib/types/request/params/GetSalesInvoices.params";
import { GetContactsParams } from "../lib/types/request/params/GetContacts.params";
import { GetCategoriesParams } from "../lib/types/request/params/GetCategories.params";

//TODO: error management fixes
export class ParasutClient {
    private authentication:
        | (TokenAuthenticationResponse & {
              expire_date: Date;
          })
        | undefined;
    private ParasutService: ParasutService;

    constructor(
        private client_id: string,
        private client_secret: string,
        private username: string,
        private password: string,
        private redirect_uri: string,
        private company_id: number,
    ) {
        this.ParasutService = new ParasutService(this.company_id);

        this.tokenAuthentication(this.client_id, this.client_secret, this.username, this.password, this.redirect_uri)
            .then((token) => {
                this.authentication = {
                    ...token,
                    expire_date: new Date(new Date().getTime() + token.expires_in),
                };
            })
            .catch((e) => {
                throw e;
            });
    }

    // private buildQueryParameters(params: any): string {
    //     let queryParameters = [];

    //     for (const key of Object.keys(params)) {
    //         queryParameters.push(`${key}=${params[key] as string}`);
    //     }

    //     return `?${queryParameters.join("&")}`;
    // }

    private async buildRequest<T>(
        baseUrl: string,
        endpoint: ParasutEndpoints,
        method: HTTPMethods,
        params?: any,
        body?: any,
        headers?: any,
    ) {
        const url = `${baseUrl}${endpoint}`;
        const config = {
            method,
            url,
            body,
            headers,
            params,
        };

        return await axios<T>(config)
            .then((r) => r.data)
            .catch((e) => {
                throw e;
            });
    }

    private async tokenAuthentication(
        client_id: string,
        client_secret: string,
        username: string,
        password: string,
        redirect_uri: string,
    ) {
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
            },
        )
            .then((r) => r)
            .catch((e) => {
                throw e;
            });
    }

    public async GetSalesInvoices(params?: GetSalesInvoicesParams) {
        // if (!this.checkIfTokenIsValid()) {
        const token = await this.tokenAuthentication(
            this.client_id,
            this.client_secret,
            this.username,
            this.password,
            this.redirect_uri,
        )
            .then((r) => r)
            .catch((e) => {
                throw e;
            });
        this.authentication = {
            ...token,
            expire_date: new Date(new Date().getTime() + token.expires_in),
        };
        // }

        const paramsObj = {
            ...params,
            access_token: this.authentication?.access_token as string,
        };

        return await this.ParasutService.GetSalesInvoices(paramsObj)
            .then((r) => r)
            .catch((e) => {
                throw e;
            });
    }

    public async GetContacts(params?: GetContactsParams) {
        // if (!this.checkIfTokenIsValid()) {
        const token = await this.tokenAuthentication(
            this.client_id,
            this.client_secret,
            this.username,
            this.password,
            this.redirect_uri,
        )
            .then((r) => r)
            .catch((e) => {
                throw e;
            });
        this.authentication = {
            ...token,
            expire_date: new Date(new Date().getTime() + token.expires_in),
        };
        // }

        const paramsObj = {
            ...params,
            access_token: this.authentication?.access_token as string,
        };

        return await this.ParasutService.GetContacts(paramsObj)
            .then((r) => r)
            .catch((e) => {
                throw e;
            });
    }

    public async GetCategories(params?: GetCategoriesParams) {
        // if (!this.checkIfTokenIsValid()) {
        const token = await this.tokenAuthentication(
            this.client_id,
            this.client_secret,
            this.username,
            this.password,
            this.redirect_uri,
        );
        this.authentication = {
            ...token,
            expire_date: new Date(new Date().getTime() + token.expires_in),
        };
        // }

        const paramsObj = {
            ...params,
            access_token: this.authentication?.access_token as string,
        };

        return await this.ParasutService.GetCategories(paramsObj)
            .then((r) => r)
            .catch((e) => {
                throw e;
            });
    }
}
