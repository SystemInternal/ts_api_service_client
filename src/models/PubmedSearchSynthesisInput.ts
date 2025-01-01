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

import { mapValues } from '../runtime';
/**
 * Pubmed search synthesis input.
 * @export
 * @interface PubmedSearchSynthesisInput
 */
export interface PubmedSearchSynthesisInput {
    /**
     * 
     * @type {string}
     * @memberof PubmedSearchSynthesisInput
     */
    query: string;
    /**
     * 
     * @type {string}
     * @memberof PubmedSearchSynthesisInput
     */
    pubmedQuery?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof PubmedSearchSynthesisInput
     */
    autoTranslate?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof PubmedSearchSynthesisInput
     */
    scoreRelevance?: boolean | null;
}

/**
 * Check if a given object implements the PubmedSearchSynthesisInput interface.
 */
export function instanceOfPubmedSearchSynthesisInput(value: object): value is PubmedSearchSynthesisInput {
    if (!('query' in value) || value['query'] === undefined) return false;
    return true;
}

export function PubmedSearchSynthesisInputFromJSON(json: any): PubmedSearchSynthesisInput {
    return PubmedSearchSynthesisInputFromJSONTyped(json, false);
}

export function PubmedSearchSynthesisInputFromJSONTyped(json: any, ignoreDiscriminator: boolean): PubmedSearchSynthesisInput {
    if (json == null) {
        return json;
    }
    return {
        
        'query': json['query'],
        'pubmedQuery': json['pubmed_query'] == null ? undefined : json['pubmed_query'],
        'autoTranslate': json['auto_translate'] == null ? undefined : json['auto_translate'],
        'scoreRelevance': json['score_relevance'] == null ? undefined : json['score_relevance'],
    };
}

export function PubmedSearchSynthesisInputToJSON(value?: PubmedSearchSynthesisInput | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'query': value['query'],
        'pubmed_query': value['pubmedQuery'],
        'auto_translate': value['autoTranslate'],
        'score_relevance': value['scoreRelevance'],
    };
}

