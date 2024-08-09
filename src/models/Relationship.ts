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
import type { Topic } from './Topic';
import {
    TopicFromJSON,
    TopicFromJSONTyped,
    TopicToJSON,
} from './Topic';

/**
 * Relationship.
 * @export
 * @interface Relationship
 */
export interface Relationship {
    /**
     * Unique identifier of relationship.
     * @type {string}
     * @memberof Relationship
     */
    id: string;
    /**
     * Number of findings on relationship
     * @type {number}
     * @memberof Relationship
     */
    numFindings: number;
    /**
     * Number of studies supporting relationship
     * @type {number}
     * @memberof Relationship
     */
    numStudies: number;
    /**
     * Number of significant findings on relationship
     * @type {number}
     * @memberof Relationship
     */
    numSignificantFindings: number;
    /**
     * Highest cited study supporting relationship
     * @type {number}
     * @memberof Relationship
     */
    highestCited?: number;
    /**
     * 
     * @type {number}
     * @memberof Relationship
     */
    medianEffectSize?: number | null;
    /**
     * Date relationship was last updated
     * @type {Date}
     * @memberof Relationship
     */
    lastUpdated: Date;
    /**
     * Whether or not the relationship is supported by an experimental trial
     * @type {boolean}
     * @memberof Relationship
     */
    hasExperimentalTrial: boolean;
    /**
     * Unique identifier of the source topic
     * @type {Topic}
     * @memberof Relationship
     */
    sourceTopic: Topic;
    /**
     * Unique identifier of the target topic
     * @type {Topic}
     * @memberof Relationship
     */
    targetTopic: Topic;
}

/**
 * Check if a given object implements the Relationship interface.
 */
export function instanceOfRelationship(value: object): value is Relationship {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('numFindings' in value) || value['numFindings'] === undefined) return false;
    if (!('numStudies' in value) || value['numStudies'] === undefined) return false;
    if (!('numSignificantFindings' in value) || value['numSignificantFindings'] === undefined) return false;
    if (!('lastUpdated' in value) || value['lastUpdated'] === undefined) return false;
    if (!('hasExperimentalTrial' in value) || value['hasExperimentalTrial'] === undefined) return false;
    if (!('sourceTopic' in value) || value['sourceTopic'] === undefined) return false;
    if (!('targetTopic' in value) || value['targetTopic'] === undefined) return false;
    return true;
}

export function RelationshipFromJSON(json: any): Relationship {
    return RelationshipFromJSONTyped(json, false);
}

export function RelationshipFromJSONTyped(json: any, ignoreDiscriminator: boolean): Relationship {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'numFindings': json['num_findings'],
        'numStudies': json['num_studies'],
        'numSignificantFindings': json['num_significant_findings'],
        'highestCited': json['highest_cited'] == null ? undefined : json['highest_cited'],
        'medianEffectSize': json['median_effect_size'] == null ? undefined : json['median_effect_size'],
        'lastUpdated': (new Date(json['last_updated'])),
        'hasExperimentalTrial': json['has_experimental_trial'],
        'sourceTopic': TopicFromJSON(json['source_topic']),
        'targetTopic': TopicFromJSON(json['target_topic']),
    };
}

export function RelationshipToJSON(value?: Relationship | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'num_findings': value['numFindings'],
        'num_studies': value['numStudies'],
        'num_significant_findings': value['numSignificantFindings'],
        'highest_cited': value['highestCited'],
        'median_effect_size': value['medianEffectSize'],
        'last_updated': ((value['lastUpdated']).toISOString()),
        'has_experimental_trial': value['hasExperimentalTrial'],
        'source_topic': TopicToJSON(value['sourceTopic']),
        'target_topic': TopicToJSON(value['targetTopic']),
    };
}

