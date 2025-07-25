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
  GuidelineSynthesisIn,
  GuidelineSynthesisOut,
  HTTPValidationError,
} from '../models/index';
import {
    GuidelineSynthesisInFromJSON,
    GuidelineSynthesisInToJSON,
    GuidelineSynthesisOutFromJSON,
    GuidelineSynthesisOutToJSON,
    HTTPValidationErrorFromJSON,
    HTTPValidationErrorToJSON,
} from '../models/index';

export interface GetGuidelineSynthesisByIdRequest {
    jobId: string;
}

export interface SynthesizeGuidelinesRequest {
    guidelineSynthesisIn: GuidelineSynthesisIn;
}

/**
 * 
 */
export class GuidelinesApi extends runtime.BaseAPI {

    /**
     * Get guideline synthesis.
     * Get guideline synthesis by ID
     */
    async getGuidelineSynthesisByIdRaw(requestParameters: GetGuidelineSynthesisByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GuidelineSynthesisOut>> {
        if (requestParameters['jobId'] == null) {
            throw new runtime.RequiredError(
                'jobId',
                'Required parameter "jobId" was null or undefined when calling getGuidelineSynthesisById().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = await this.configuration.apiKey("x-api-key"); // APIKeyHeader authentication
        }

        const response = await this.request({
            path: `/v0/guideline_synthesis/{job_id}`.replace(`{${"job_id"}}`, encodeURIComponent(String(requestParameters['jobId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GuidelineSynthesisOutFromJSON(jsonValue));
    }

    /**
     * Get guideline synthesis.
     * Get guideline synthesis by ID
     */
    async getGuidelineSynthesisById(requestParameters: GetGuidelineSynthesisByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GuidelineSynthesisOut> {
        const response = await this.getGuidelineSynthesisByIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Initiate guideline synthesis.
     * Initiate guideline synthesis
     */
    async synthesizeGuidelinesRaw(requestParameters: SynthesizeGuidelinesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>> {
        if (requestParameters['guidelineSynthesisIn'] == null) {
            throw new runtime.RequiredError(
                'guidelineSynthesisIn',
                'Required parameter "guidelineSynthesisIn" was null or undefined when calling synthesizeGuidelines().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = await this.configuration.apiKey("x-api-key"); // APIKeyHeader authentication
        }

        const response = await this.request({
            path: `/v0/guideline_synthesis`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: GuidelineSynthesisInToJSON(requestParameters['guidelineSynthesisIn']),
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<string>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Initiate guideline synthesis.
     * Initiate guideline synthesis
     */
    async synthesizeGuidelines(requestParameters: SynthesizeGuidelinesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string | null | undefined > {
        const response = await this.synthesizeGuidelinesRaw(requestParameters, initOverrides);
        switch (response.raw.status) {
            case 202:
                return await response.value();
            case 204:
                return null;
            default:
                return await response.value();
        }
    }

}
