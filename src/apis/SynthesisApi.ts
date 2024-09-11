/* tslint:disable */
/* eslint-disable */
/**
 * System REST API
 *  This page provides documentation for the System REST API.  If you have any questions or need support, please contact us at the email provided.  ## Formatting query parameters  Filters should be formatted as `field:value` and use the logical OR operator `||` to specify an OR condition. (We\'ve deprecated the pipe operator for OR conditions.)   If they are numerical, they should be formatted as `field:opvalue`. Examples: - `doi:10.1234/5678||10.8765/4321` - `num_findings:>2`  Sorts should be formatted as `field:direction`. Examples: - `cited_by:desc` - `publish_date:asc`  Searches should be formatted as `field:value`. Examples: - `name:osteoporosis` 
 *
 * The version of the OpenAPI document: 0.1.0
 * Contact: api@system.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  HTTPValidationError,
  ListResponseMechanisticFinding,
  ListResponseStatement,
  ListResponseStatisticalFinding,
  ListResponseStudy,
  PubmedSearchSynthesisInput,
  PubmedSearchSynthesisJob,
  PubmedSearchTranslationInput,
  SuggestedPubmedSearch,
  Synthesis,
} from '../models/index';
import {
    HTTPValidationErrorFromJSON,
    HTTPValidationErrorToJSON,
    ListResponseMechanisticFindingFromJSON,
    ListResponseMechanisticFindingToJSON,
    ListResponseStatementFromJSON,
    ListResponseStatementToJSON,
    ListResponseStatisticalFindingFromJSON,
    ListResponseStatisticalFindingToJSON,
    ListResponseStudyFromJSON,
    ListResponseStudyToJSON,
    PubmedSearchSynthesisInputFromJSON,
    PubmedSearchSynthesisInputToJSON,
    PubmedSearchSynthesisJobFromJSON,
    PubmedSearchSynthesisJobToJSON,
    PubmedSearchTranslationInputFromJSON,
    PubmedSearchTranslationInputToJSON,
    SuggestedPubmedSearchFromJSON,
    SuggestedPubmedSearchToJSON,
    SynthesisFromJSON,
    SynthesisToJSON,
} from '../models/index';

export interface GetMechanisticFindingsFromPubmedSearchRequest {
    jobId: string;
    filter?: string | null;
    sort?: string | null;
    search?: string | null;
    fields?: string | null;
    includeTotal?: boolean | null;
    offset?: number;
    limit?: number;
}

export interface GetPubmedSearchSynthesisByIdRequest {
    jobId: string;
}

export interface GetStatementsFromPubmedSearchRequest {
    jobId: string;
    includeTotal?: boolean | null;
    offset?: number;
    limit?: number;
}

export interface GetStatisticalFindingsFromPubmedSearchRequest {
    jobId: string;
    filter?: string | null;
    sort?: string | null;
    search?: string | null;
    fields?: string | null;
    includeTotal?: boolean | null;
    offset?: number;
    limit?: number;
}

export interface GetStudiesFromPubmedSearchRequest {
    jobId: string;
    filter?: string | null;
    sort?: string | null;
    search?: string | null;
    fields?: string | null;
    includeTotal?: boolean | null;
    offset?: number;
    limit?: number;
}

export interface GetSynthesisFromPubmedSearchRequest {
    jobId: string;
}

export interface SynthesizePubmedSearchRequest {
    pubmedSearchSynthesisInput: PubmedSearchSynthesisInput;
}

export interface TranslateQueryToPubmedSearchRequest {
    pubmedSearchTranslationInput: PubmedSearchTranslationInput;
}

/**
 * 
 */
export class SynthesisApi extends runtime.BaseAPI {

    /**
     * Get statistical findings from pubmed search synthesis.
     * Get mechanistic findings from pubmed search synthesis
     */
    async getMechanisticFindingsFromPubmedSearchRaw(requestParameters: GetMechanisticFindingsFromPubmedSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ListResponseMechanisticFinding>> {
        if (requestParameters['jobId'] == null) {
            throw new runtime.RequiredError(
                'jobId',
                'Required parameter "jobId" was null or undefined when calling getMechanisticFindingsFromPubmedSearch().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['filter'] != null) {
            queryParameters['filter'] = requestParameters['filter'];
        }

        if (requestParameters['sort'] != null) {
            queryParameters['sort'] = requestParameters['sort'];
        }

        if (requestParameters['search'] != null) {
            queryParameters['search'] = requestParameters['search'];
        }

        if (requestParameters['fields'] != null) {
            queryParameters['fields'] = requestParameters['fields'];
        }

        if (requestParameters['includeTotal'] != null) {
            queryParameters['include_total'] = requestParameters['includeTotal'];
        }

        if (requestParameters['offset'] != null) {
            queryParameters['offset'] = requestParameters['offset'];
        }

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = await this.configuration.apiKey("x-api-key"); // APIKeyHeader authentication
        }

        const response = await this.request({
            path: `/v0/synthesis/pubmed_search/{job_id}/mechanistic_findings`.replace(`{${"job_id"}}`, encodeURIComponent(String(requestParameters['jobId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ListResponseMechanisticFindingFromJSON(jsonValue));
    }

    /**
     * Get statistical findings from pubmed search synthesis.
     * Get mechanistic findings from pubmed search synthesis
     */
    async getMechanisticFindingsFromPubmedSearch(requestParameters: GetMechanisticFindingsFromPubmedSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ListResponseMechanisticFinding> {
        const response = await this.getMechanisticFindingsFromPubmedSearchRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get information about a pubmed search synthesis job.
     * Get pubmed search synthesis by ID
     */
    async getPubmedSearchSynthesisByIdRaw(requestParameters: GetPubmedSearchSynthesisByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PubmedSearchSynthesisJob>> {
        if (requestParameters['jobId'] == null) {
            throw new runtime.RequiredError(
                'jobId',
                'Required parameter "jobId" was null or undefined when calling getPubmedSearchSynthesisById().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = await this.configuration.apiKey("x-api-key"); // APIKeyHeader authentication
        }

        const response = await this.request({
            path: `/v0/synthesis/pubmed_search/{job_id}`.replace(`{${"job_id"}}`, encodeURIComponent(String(requestParameters['jobId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PubmedSearchSynthesisJobFromJSON(jsonValue));
    }

    /**
     * Get information about a pubmed search synthesis job.
     * Get pubmed search synthesis by ID
     */
    async getPubmedSearchSynthesisById(requestParameters: GetPubmedSearchSynthesisByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PubmedSearchSynthesisJob> {
        const response = await this.getPubmedSearchSynthesisByIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get statements from pubmed search synthesis.
     * Get statements from pubmed search synthesis
     */
    async getStatementsFromPubmedSearchRaw(requestParameters: GetStatementsFromPubmedSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ListResponseStatement>> {
        if (requestParameters['jobId'] == null) {
            throw new runtime.RequiredError(
                'jobId',
                'Required parameter "jobId" was null or undefined when calling getStatementsFromPubmedSearch().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['includeTotal'] != null) {
            queryParameters['include_total'] = requestParameters['includeTotal'];
        }

        if (requestParameters['offset'] != null) {
            queryParameters['offset'] = requestParameters['offset'];
        }

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = await this.configuration.apiKey("x-api-key"); // APIKeyHeader authentication
        }

        const response = await this.request({
            path: `/v0/synthesis/pubmed_search/{job_id}/statements`.replace(`{${"job_id"}}`, encodeURIComponent(String(requestParameters['jobId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ListResponseStatementFromJSON(jsonValue));
    }

    /**
     * Get statements from pubmed search synthesis.
     * Get statements from pubmed search synthesis
     */
    async getStatementsFromPubmedSearch(requestParameters: GetStatementsFromPubmedSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ListResponseStatement> {
        const response = await this.getStatementsFromPubmedSearchRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get statistical findings from pubmed search synthesis.
     * Get statistical findings from pubmed search synthesis
     */
    async getStatisticalFindingsFromPubmedSearchRaw(requestParameters: GetStatisticalFindingsFromPubmedSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ListResponseStatisticalFinding>> {
        if (requestParameters['jobId'] == null) {
            throw new runtime.RequiredError(
                'jobId',
                'Required parameter "jobId" was null or undefined when calling getStatisticalFindingsFromPubmedSearch().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['filter'] != null) {
            queryParameters['filter'] = requestParameters['filter'];
        }

        if (requestParameters['sort'] != null) {
            queryParameters['sort'] = requestParameters['sort'];
        }

        if (requestParameters['search'] != null) {
            queryParameters['search'] = requestParameters['search'];
        }

        if (requestParameters['fields'] != null) {
            queryParameters['fields'] = requestParameters['fields'];
        }

        if (requestParameters['includeTotal'] != null) {
            queryParameters['include_total'] = requestParameters['includeTotal'];
        }

        if (requestParameters['offset'] != null) {
            queryParameters['offset'] = requestParameters['offset'];
        }

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = await this.configuration.apiKey("x-api-key"); // APIKeyHeader authentication
        }

        const response = await this.request({
            path: `/v0/synthesis/pubmed_search/{job_id}/statistical_findings`.replace(`{${"job_id"}}`, encodeURIComponent(String(requestParameters['jobId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ListResponseStatisticalFindingFromJSON(jsonValue));
    }

    /**
     * Get statistical findings from pubmed search synthesis.
     * Get statistical findings from pubmed search synthesis
     */
    async getStatisticalFindingsFromPubmedSearch(requestParameters: GetStatisticalFindingsFromPubmedSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ListResponseStatisticalFinding> {
        const response = await this.getStatisticalFindingsFromPubmedSearchRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get studies from pubmed search synthesis.
     * Get studies from pubmed search synthesis
     */
    async getStudiesFromPubmedSearchRaw(requestParameters: GetStudiesFromPubmedSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ListResponseStudy>> {
        if (requestParameters['jobId'] == null) {
            throw new runtime.RequiredError(
                'jobId',
                'Required parameter "jobId" was null or undefined when calling getStudiesFromPubmedSearch().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['filter'] != null) {
            queryParameters['filter'] = requestParameters['filter'];
        }

        if (requestParameters['sort'] != null) {
            queryParameters['sort'] = requestParameters['sort'];
        }

        if (requestParameters['search'] != null) {
            queryParameters['search'] = requestParameters['search'];
        }

        if (requestParameters['fields'] != null) {
            queryParameters['fields'] = requestParameters['fields'];
        }

        if (requestParameters['includeTotal'] != null) {
            queryParameters['include_total'] = requestParameters['includeTotal'];
        }

        if (requestParameters['offset'] != null) {
            queryParameters['offset'] = requestParameters['offset'];
        }

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = await this.configuration.apiKey("x-api-key"); // APIKeyHeader authentication
        }

        const response = await this.request({
            path: `/v0/synthesis/pubmed_search/{job_id}/studies`.replace(`{${"job_id"}}`, encodeURIComponent(String(requestParameters['jobId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ListResponseStudyFromJSON(jsonValue));
    }

    /**
     * Get studies from pubmed search synthesis.
     * Get studies from pubmed search synthesis
     */
    async getStudiesFromPubmedSearch(requestParameters: GetStudiesFromPubmedSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ListResponseStudy> {
        const response = await this.getStudiesFromPubmedSearchRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get synthesis from pubmed search synthesis.
     * Get synthesis from pubmed search synthesis
     */
    async getSynthesisFromPubmedSearchRaw(requestParameters: GetSynthesisFromPubmedSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Synthesis>> {
        if (requestParameters['jobId'] == null) {
            throw new runtime.RequiredError(
                'jobId',
                'Required parameter "jobId" was null or undefined when calling getSynthesisFromPubmedSearch().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = await this.configuration.apiKey("x-api-key"); // APIKeyHeader authentication
        }

        const response = await this.request({
            path: `/v0/synthesis/pubmed_search/{job_id}/synthesis`.replace(`{${"job_id"}}`, encodeURIComponent(String(requestParameters['jobId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SynthesisFromJSON(jsonValue));
    }

    /**
     * Get synthesis from pubmed search synthesis.
     * Get synthesis from pubmed search synthesis
     */
    async getSynthesisFromPubmedSearch(requestParameters: GetSynthesisFromPubmedSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Synthesis> {
        const response = await this.getSynthesisFromPubmedSearchRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Initiate pubmed search synthesis.
     * Initiate pubmed search synthesis
     */
    async synthesizePubmedSearchRaw(requestParameters: SynthesizePubmedSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>> {
        if (requestParameters['pubmedSearchSynthesisInput'] == null) {
            throw new runtime.RequiredError(
                'pubmedSearchSynthesisInput',
                'Required parameter "pubmedSearchSynthesisInput" was null or undefined when calling synthesizePubmedSearch().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = await this.configuration.apiKey("x-api-key"); // APIKeyHeader authentication
        }

        const response = await this.request({
            path: `/v0/synthesis/pubmed_search`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PubmedSearchSynthesisInputToJSON(requestParameters['pubmedSearchSynthesisInput']),
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<string>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Initiate pubmed search synthesis.
     * Initiate pubmed search synthesis
     */
    async synthesizePubmedSearch(requestParameters: SynthesizePubmedSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string | null | undefined > {
        const response = await this.synthesizePubmedSearchRaw(requestParameters, initOverrides);
        switch (response.raw.status) {
            case 202:
                return await response.value();
            case 204:
                return null;
            default:
                return await response.value();
        }
    }

    /**
     * Translate query to pubmed search.
     * Translate query to pubmed search
     */
    async translateQueryToPubmedSearchRaw(requestParameters: TranslateQueryToPubmedSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<SuggestedPubmedSearch>>> {
        if (requestParameters['pubmedSearchTranslationInput'] == null) {
            throw new runtime.RequiredError(
                'pubmedSearchTranslationInput',
                'Required parameter "pubmedSearchTranslationInput" was null or undefined when calling translateQueryToPubmedSearch().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = await this.configuration.apiKey("x-api-key"); // APIKeyHeader authentication
        }

        const response = await this.request({
            path: `/v0/synthesis/pubmed_search_translation`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PubmedSearchTranslationInputToJSON(requestParameters['pubmedSearchTranslationInput']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(SuggestedPubmedSearchFromJSON));
    }

    /**
     * Translate query to pubmed search.
     * Translate query to pubmed search
     */
    async translateQueryToPubmedSearch(requestParameters: TranslateQueryToPubmedSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<SuggestedPubmedSearch>> {
        const response = await this.translateQueryToPubmedSearchRaw(requestParameters, initOverrides);
        return await response.value();
    }

}