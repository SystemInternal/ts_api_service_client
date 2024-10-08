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
import type { CypherProperty } from './CypherProperty';
import {
    CypherPropertyFromJSON,
    CypherPropertyFromJSONTyped,
    CypherPropertyToJSON,
} from './CypherProperty';

/**
 * 
 * @export
 * @interface CypherRelationshipSchema
 */
export interface CypherRelationshipSchema {
    /**
     * 
     * @type {string}
     * @memberof CypherRelationshipSchema
     */
    relType: string;
    /**
     * 
     * @type {Array<CypherProperty>}
     * @memberof CypherRelationshipSchema
     */
    properties: Array<CypherProperty>;
}

/**
 * Check if a given object implements the CypherRelationshipSchema interface.
 */
export function instanceOfCypherRelationshipSchema(value: object): value is CypherRelationshipSchema {
    if (!('relType' in value) || value['relType'] === undefined) return false;
    if (!('properties' in value) || value['properties'] === undefined) return false;
    return true;
}

export function CypherRelationshipSchemaFromJSON(json: any): CypherRelationshipSchema {
    return CypherRelationshipSchemaFromJSONTyped(json, false);
}

export function CypherRelationshipSchemaFromJSONTyped(json: any, ignoreDiscriminator: boolean): CypherRelationshipSchema {
    if (json == null) {
        return json;
    }
    return {
        
        'relType': json['rel_type'],
        'properties': ((json['properties'] as Array<any>).map(CypherPropertyFromJSON)),
    };
}

export function CypherRelationshipSchemaToJSON(value?: CypherRelationshipSchema | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'rel_type': value['relType'],
        'properties': ((value['properties'] as Array<any>).map(CypherPropertyToJSON)),
    };
}

