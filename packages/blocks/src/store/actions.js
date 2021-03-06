/**
 * External dependencies
 */
import { castArray } from 'lodash';

/**
 * WordPress dependencies
 */
import deprecated from '@wordpress/deprecated';

/**
 * Returns an action object used in signalling that block types have been added.
 *
 * @param {Array|Object} blockTypes Block types received.
 *
 * @return {Object} Action object.
 */
export function addBlockTypes( blockTypes ) {
	return {
		type: 'ADD_BLOCK_TYPES',
		blockTypes: castArray( blockTypes ),
	};
}

/**
 * Returns an action object used to remove a registered block type.
 *
 * @param {string|Array} names Block name.
 *
 * @return {Object} Action object.
 */
export function removeBlockTypes( names ) {
	return {
		type: 'REMOVE_BLOCK_TYPES',
		names: castArray( names ),
	};
}

/**
 * Returns an action object used to set the default block name.
 *
 * @param {string} name Block name.
 *
 * @return {Object} Action object.
 */
export function setDefaultBlockName( name ) {
	return {
		type: 'SET_DEFAULT_BLOCK_NAME',
		name,
	};
}

/**
 * Returns an action object used to set the name of the block used as a fallback
 * for non-block content.
 *
 * @param {string} name Block name.
 *
 * @return {Object} Action object.
 */
export function setFallbackBlockName( name ) {
	deprecated( 'setFallbackBlockName', {
		plugin: 'Gutenberg',
		version: '4.2',
		alternative: 'setFreeformFallbackBlockName and setUnregisteredFallbackBlockName',
	} );
	return setFreeformFallbackBlockName( name );
}

/**
 * Returns an action object used to set the name of the block used as a fallback
 * for non-block content.
 *
 * @param {string} name Block name.
 *
 * @return {Object} Action object.
 */
export function setFreeformFallbackBlockName( name ) {
	return {
		type: 'SET_FREEFORM_FALLBACK_BLOCK_NAME',
		name,
	};
}

/**
 * Returns an action object used to set the name of the block used as a fallback
 * for unregistered blocks.
 *
 * @param {string} name Block name.
 *
 * @return {Object} Action object.
 */
export function setUnregisteredFallbackBlockName( name ) {
	return {
		type: 'SET_UNREGISTERED_FALLBACK_BLOCK_NAME',
		name,
	};
}

/**
 * Returns an action object used to set block categories.
 *
 * @param {Object[]} categories Block categories.
 *
 * @return {Object} Action object.
 */
export function setCategories( categories ) {
	return {
		type: 'SET_CATEGORIES',
		categories,
	};
}
