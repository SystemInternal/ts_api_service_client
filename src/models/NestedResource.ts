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
 * Nested resource.
 * @export
 * @interface NestedResource
 */
export interface NestedResource {
    /**
     * Unique identifier
     * @type {string}
     * @memberof NestedResource
     */
    id: string;
    /**
     * Name of the resource
     * @type {string}
     * @memberof NestedResource
     */
    name: string;
}

/**
 * Check if a given object implements the NestedResource interface.
 */
export function instanceOfNestedResource(value: object): value is NestedResource {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    return true;
}

export function NestedResourceFromJSON(json: any): NestedResource {
    return NestedResourceFromJSONTyped(json, false);
}

export function NestedResourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): NestedResource {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
    };
}

export function NestedResourceToJSON(value?: NestedResource | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'name': value['name'],
    };
}

