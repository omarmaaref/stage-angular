// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
//import { domain, clientId } from '../../auth_config.json';

export const domain="dev-k068p3pf.eu.auth0.com"
export const clientId= "6bF7eAoo09UCMxWk2WzEOzuaQStaJRu4"
export const audience="https://rate.stage"
export const  serverUrl= "http://localhost:7000"
export const environment = {
  production: false,
  auth: {
    domain,
    clientId,
    redirectUri: window.location.origin,
    audience,

  },
  dev: {serverUrl,}
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
