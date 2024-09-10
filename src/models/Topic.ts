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
import type { TopicRole } from './TopicRole';
import {
    TopicRoleFromJSON,
    TopicRoleFromJSONTyped,
    TopicRoleToJSON,
} from './TopicRole';
import type { TopicCategory } from './TopicCategory';
import {
    TopicCategoryFromJSON,
    TopicCategoryFromJSONTyped,
    TopicCategoryToJSON,
} from './TopicCategory';

/**
 * Topic.
 * @export
 * @interface Topic
 */
export interface Topic {
    /**
     * Unique identifier
     * @type {string}
     * @memberof Topic
     */
    id: string;
    /**
     * Name of the topic
     * @type {string}
     * @memberof Topic
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof Topic
     */
    wikidataId?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof Topic
     */
    umlsCuis?: Array<string> | null;
    /**
     * 
     * @type {TopicCategory}
     * @memberof Topic
     */
    category?: TopicCategory | null;
    /**
     * 
     * @type {Array<TopicRole>}
     * @memberof Topic
     */
    roles?: Array<TopicRole> | null;
}

/**
 * Check if a given object implements the Topic interface.
 */
export function instanceOfTopic(value: object): value is Topic {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    return true;
}

export function TopicFromJSON(json: any): Topic {
    return TopicFromJSONTyped(json, false);
}

export function TopicFromJSONTyped(json: any, ignoreDiscriminator: boolean): Topic {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'wikidataId': json['wikidata_id'] == null ? undefined : json['wikidata_id'],
        'umlsCuis': json['umls_cuis'] == null ? undefined : json['umls_cuis'],
        'category': json['category'] == null ? undefined : TopicCategoryFromJSON(json['category']),
        'roles': json['roles'] == null ? undefined : ((json['roles'] as Array<any>).map(TopicRoleFromJSON)),
    };
}

export function TopicToJSON(value?: Topic | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'name': value['name'],
        'wikidata_id': value['wikidataId'],
        'umls_cuis': value['umlsCuis'],
        'category': TopicCategoryToJSON(value['category']),
        'roles': value['roles'] == null ? undefined : ((value['roles'] as Array<any>).map(TopicRoleToJSON)),
    };
}
