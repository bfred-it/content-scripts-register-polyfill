/// <reference path="./globals.d.ts" />
// The .js extension is required to create ESM-compatible file
import register from './ponyfill.js';

if (typeof chrome === 'object' && !chrome.contentScripts) {
	chrome.contentScripts = {register};
}
