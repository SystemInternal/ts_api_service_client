/* tslint:disable */
/* eslint-disable */
/**
 * System REST API
 *  This page provides documentation for the System REST API.  If you have any questions or need support, please contact us at the email provided.  ## Formatting query parameters  Filters should be formatted as `field:value` and use the pipe operator `|` to specify an OR condition.   If they are numerical, they should be formatted as `field:opvalue`. Examples: - `doi:10.1234/5678|10.8765/4321` - `num_findings:>2`  Sorts should be formatted as `field:direction`. Examples: - `cited_by:desc` - `publish_date:asc`  Searches should be formatted as `field:value`. Examples: - `name:osteoporosis` 
 *
 * The version of the OpenAPI document: 0.1.0
 * Contact: api@system.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from './configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';

export const BASE_PATH = "https://api-prod.system.com".replace(/\/+$/, "");

/**
 *
 * @export
 */
export const COLLECTION_FORMATS = {
    csv: ",",
    ssv: " ",
    tsv: "\t",
    pipes: "|",
};

/**
 *
 * @export
 * @interface RequestArgs
 */
export interface RequestArgs {
    url: string;
    options: AxiosRequestConfig;
}

/**
 *
 * @export
 * @class BaseAPI
 */
export class BaseAPI {
    protected configuration: Configuration | undefined;

    constructor(configuration?: Configuration, protected basePath: string = BASE_PATH, protected axios: AxiosInstance = globalAxios) {
        if (configuration) {
            this.configuration = configuration;
            this.basePath = configuration.basePath ?? basePath;
        }
    }
};

/**
 *
 * @export
 * @class RequiredError
 * @extends {Error}
 */
export class RequiredError extends Error {
    constructor(public field: string, msg?: string) {
        super(msg);
        this.name = "RequiredError"
    }
}

interface ServerMap {
    [key: string]: {
        url: string,
        description: string,
    }[];
}

/**
 *
 * @export
 */
export const operationServerMap: ServerMap = {
}
