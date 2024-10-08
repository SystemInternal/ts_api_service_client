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
import type { Study } from './Study';
import {
    StudyFromJSON,
    StudyFromJSONTyped,
    StudyToJSON,
} from './Study';

/**
 * 
 * @export
 * @interface ListResponseStudy
 */
export interface ListResponseStudy {
    /**
     * 
     * @type {Array<Study>}
     * @memberof ListResponseStudy
     */
    data: Array<Study>;
    /**
     * 
     * @type {number}
     * @memberof ListResponseStudy
     */
    total?: number | null;
}

/**
 * Check if a given object implements the ListResponseStudy interface.
 */
export function instanceOfListResponseStudy(value: object): value is ListResponseStudy {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function ListResponseStudyFromJSON(json: any): ListResponseStudy {
    return ListResponseStudyFromJSONTyped(json, false);
}

export function ListResponseStudyFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListResponseStudy {
    if (json == null) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(StudyFromJSON)),
        'total': json['total'] == null ? undefined : json['total'],
    };
}

export function ListResponseStudyToJSON(value?: ListResponseStudy | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'data': ((value['data'] as Array<any>).map(StudyToJSON)),
        'total': value['total'],
    };
}

