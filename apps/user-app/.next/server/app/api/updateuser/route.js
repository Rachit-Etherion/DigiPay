"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/updateuser/route";
exports.ids = ["app/api/updateuser/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/../../node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fupdateuser%2Froute&page=%2Fapi%2Fupdateuser%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fupdateuser%2Froute.ts&appDir=%2FUsers%2Frsingh08%2FDeveloper%2FLearning%2F100xdev%2FProjects%2FDigital-Wallet%2Fapps%2Fuser-app%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Frsingh08%2FDeveloper%2FLearning%2F100xdev%2FProjects%2FDigital-Wallet%2Fapps%2Fuser-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fupdateuser%2Froute&page=%2Fapi%2Fupdateuser%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fupdateuser%2Froute.ts&appDir=%2FUsers%2Frsingh08%2FDeveloper%2FLearning%2F100xdev%2FProjects%2FDigital-Wallet%2Fapps%2Fuser-app%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Frsingh08%2FDeveloper%2FLearning%2F100xdev%2FProjects%2FDigital-Wallet%2Fapps%2Fuser-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/../../node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/../../node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/../../node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_rsingh08_Developer_Learning_100xdev_Projects_Digital_Wallet_apps_user_app_app_api_updateuser_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/updateuser/route.ts */ \"(rsc)/./app/api/updateuser/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/updateuser/route\",\n        pathname: \"/api/updateuser\",\n        filename: \"route\",\n        bundlePath: \"app/api/updateuser/route\"\n    },\n    resolvedPagePath: \"/Users/rsingh08/Developer/Learning/100xdev/Projects/Digital-Wallet/apps/user-app/app/api/updateuser/route.ts\",\n    nextConfigOutput,\n    userland: _Users_rsingh08_Developer_Learning_100xdev_Projects_Digital_Wallet_apps_user_app_app_api_updateuser_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/updateuser/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1hcHAtbG9hZGVyLmpzP25hbWU9YXBwJTJGYXBpJTJGdXBkYXRldXNlciUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGdXBkYXRldXNlciUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnVwZGF0ZXVzZXIlMkZyb3V0ZS50cyZhcHBEaXI9JTJGVXNlcnMlMkZyc2luZ2gwOCUyRkRldmVsb3BlciUyRkxlYXJuaW5nJTJGMTAweGRldiUyRlByb2plY3RzJTJGRGlnaXRhbC1XYWxsZXQlMkZhcHBzJTJGdXNlci1hcHAlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRlVzZXJzJTJGcnNpbmdoMDglMkZEZXZlbG9wZXIlMkZMZWFybmluZyUyRjEwMHhkZXYlMkZQcm9qZWN0cyUyRkRpZ2l0YWwtV2FsbGV0JTJGYXBwcyUyRnVzZXItYXBwJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQzREO0FBQ3pJO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdUdBQXVHO0FBQy9HO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDNko7O0FBRTdKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZG9jcy8/ZDEyMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMvcnNpbmdoMDgvRGV2ZWxvcGVyL0xlYXJuaW5nLzEwMHhkZXYvUHJvamVjdHMvRGlnaXRhbC1XYWxsZXQvYXBwcy91c2VyLWFwcC9hcHAvYXBpL3VwZGF0ZXVzZXIvcm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3VwZGF0ZXVzZXIvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS91cGRhdGV1c2VyXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS91cGRhdGV1c2VyL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1VzZXJzL3JzaW5naDA4L0RldmVsb3Blci9MZWFybmluZy8xMDB4ZGV2L1Byb2plY3RzL0RpZ2l0YWwtV2FsbGV0L2FwcHMvdXNlci1hcHAvYXBwL2FwaS91cGRhdGV1c2VyL3JvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL3VwZGF0ZXVzZXIvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0LCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/../../node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fupdateuser%2Froute&page=%2Fapi%2Fupdateuser%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fupdateuser%2Froute.ts&appDir=%2FUsers%2Frsingh08%2FDeveloper%2FLearning%2F100xdev%2FProjects%2FDigital-Wallet%2Fapps%2Fuser-app%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Frsingh08%2FDeveloper%2FLearning%2F100xdev%2FProjects%2FDigital-Wallet%2Fapps%2Fuser-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/updateuser/route.ts":
/*!*************************************!*\
  !*** ./app/api/updateuser/route.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/../../node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/auth */ \"(rsc)/./app/lib/auth.ts\");\n/* harmony import */ var _repo_db_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @repo/db/client */ \"(rsc)/../../packages/db/index.ts\");\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! zod */ \"(rsc)/../../node_modules/zod/lib/index.mjs\");\n\n\n\n\nconst nameval = zod__WEBPACK_IMPORTED_MODULE_3__.z.string().min(2).regex(/^[A-Za-z ]*$/);\nconst emailval = zod__WEBPACK_IMPORTED_MODULE_3__.z.string().email();\nasync function POST(req) {\n    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_0__.getServerSession)(_lib_auth__WEBPACK_IMPORTED_MODULE_1__.authOptions);\n    const { name, email } = await req.json();\n    const validname = nameval.safeParse(name);\n    const valemail = emailval.safeParse(email);\n    if (!valemail.success && !validname.success) {\n        return Response.json({\n            message: \"Wrong Inputs\",\n            success: false\n        });\n    }\n    try {\n        if (!valemail.success && validname.success) {\n            await _repo_db_client__WEBPACK_IMPORTED_MODULE_2__[\"default\"].user.update({\n                where: {\n                    id: Number(session.user.id)\n                },\n                data: {\n                    name: name\n                }\n            });\n            return Response.json({\n                message: \"name updated invalid email\",\n                success: true\n            });\n        } else if (valemail.success && !validname.success) {\n            await _repo_db_client__WEBPACK_IMPORTED_MODULE_2__[\"default\"].user.update({\n                where: {\n                    id: Number(session.user.id)\n                },\n                data: {\n                    email: email\n                }\n            });\n            return Response.json({\n                message: \"email updated invalid name\",\n                success: true\n            });\n        } else {\n            await _repo_db_client__WEBPACK_IMPORTED_MODULE_2__[\"default\"].user.update({\n                where: {\n                    id: Number(session.user.id)\n                },\n                data: {\n                    name: name,\n                    email: email\n                }\n            });\n        }\n    } catch (error) {\n        return Response.json({\n            message: \"Internal server Error\",\n            success: false\n        });\n    }\n    return Response.json({\n        message: \"Updated Successfully\",\n        success: true\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3VwZGF0ZXVzZXIvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTZDO0FBQ0E7QUFDYjtBQUNUO0FBRXZCLE1BQU1JLFVBQVdELGtDQUFDQSxDQUFDRSxNQUFNLEdBQUdDLEdBQUcsQ0FBQyxHQUFHQyxLQUFLLENBQUM7QUFDekMsTUFBTUMsV0FBV0wsa0NBQUNBLENBQUNFLE1BQU0sR0FBR0ksS0FBSztBQUUxQixlQUFlQyxLQUFLQyxHQUFXO0lBRWxDLE1BQU1DLFVBQVUsTUFBTVosMkRBQWdCQSxDQUFDQyxrREFBV0E7SUFDbEQsTUFBTSxFQUFFWSxJQUFJLEVBQUdKLEtBQUssRUFBRSxHQUFHLE1BQU1FLElBQUlHLElBQUk7SUFDdkMsTUFBTUMsWUFBWVgsUUFBUVksU0FBUyxDQUFDSDtJQUNwQyxNQUFNSSxXQUFXVCxTQUFTUSxTQUFTLENBQUNQO0lBQ3BDLElBQUcsQ0FBQ1EsU0FBU0MsT0FBTyxJQUFJLENBQUNILFVBQVVHLE9BQU8sRUFBRTtRQUN4QyxPQUFPQyxTQUFTTCxJQUFJLENBQUM7WUFDakJNLFNBQVM7WUFDVEYsU0FBUTtRQUNaO0lBQ0o7SUFFQSxJQUFJO1FBQ0EsSUFBRyxDQUFDRCxTQUFTQyxPQUFPLElBQUlILFVBQVVHLE9BQU8sRUFBRTtZQUN2QyxNQUFNaEIsdURBQUVBLENBQUNtQixJQUFJLENBQUNDLE1BQU0sQ0FBQztnQkFDakJDLE9BQU87b0JBQ0hDLElBQUlDLE9BQU9iLFFBQVFTLElBQUksQ0FBQ0csRUFBRTtnQkFDOUI7Z0JBQ0FFLE1BQU07b0JBQ0ZiLE1BQU1BO2dCQUNWO1lBQ0o7WUFDQSxPQUFPTSxTQUFTTCxJQUFJLENBQUM7Z0JBQ2pCTSxTQUFTO2dCQUNURixTQUFRO1lBQ1o7UUFDSixPQUNLLElBQUdELFNBQVNDLE9BQU8sSUFBSSxDQUFDSCxVQUFVRyxPQUFPLEVBQUU7WUFDNUMsTUFBTWhCLHVEQUFFQSxDQUFDbUIsSUFBSSxDQUFDQyxNQUFNLENBQUM7Z0JBQ2pCQyxPQUFPO29CQUNIQyxJQUFJQyxPQUFPYixRQUFRUyxJQUFJLENBQUNHLEVBQUU7Z0JBQzlCO2dCQUNBRSxNQUFNO29CQUNGakIsT0FBT0E7Z0JBQ1g7WUFDSjtZQUNBLE9BQU9VLFNBQVNMLElBQUksQ0FBQztnQkFDakJNLFNBQVM7Z0JBQ1RGLFNBQVE7WUFDWjtRQUNKLE9BQ0s7WUFDRCxNQUFNaEIsdURBQUVBLENBQUNtQixJQUFJLENBQUNDLE1BQU0sQ0FBQztnQkFDakJDLE9BQU87b0JBQ0hDLElBQUlDLE9BQU9iLFFBQVFTLElBQUksQ0FBQ0csRUFBRTtnQkFDOUI7Z0JBQ0FFLE1BQU07b0JBQ0ZiLE1BQU1BO29CQUNOSixPQUFPQTtnQkFDWDtZQUNKO1FBQ0o7SUFFSixFQUFFLE9BQU9rQixPQUFPO1FBRVosT0FBT1IsU0FBU0wsSUFBSSxDQUFDO1lBQ2pCTSxTQUFTO1lBQ1RGLFNBQVM7UUFDYjtJQUVKO0lBQ0EsT0FBT0MsU0FBU0wsSUFBSSxDQUFDO1FBQ2pCTSxTQUFTO1FBQ1RGLFNBQVM7SUFDYjtBQUVKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZG9jcy8uL2FwcC9hcGkvdXBkYXRldXNlci9yb3V0ZS50cz8zMTFlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFNlcnZlclNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoXCI7XG5pbXBvcnQgeyBhdXRoT3B0aW9ucyB9IGZyb20gXCIuLi8uLi9saWIvYXV0aFwiO1xuaW1wb3J0IGRiIGZyb20gXCJAcmVwby9kYi9jbGllbnRcIlxuaW1wb3J0IHsgeiB9IGZyb20gXCJ6b2RcIlxuXG5jb25zdCBuYW1ldmFsICA9IHouc3RyaW5nKCkubWluKDIpLnJlZ2V4KC9eW0EtWmEteiBdKiQvKVxuY29uc3QgZW1haWx2YWwgPSB6LnN0cmluZygpLmVtYWlsKClcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxOlJlcXVlc3QpIHtcblxuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXJ2ZXJTZXNzaW9uKGF1dGhPcHRpb25zKTtcbiAgICBjb25zdCB7IG5hbWUgLCBlbWFpbCB9ID0gYXdhaXQgcmVxLmpzb24oKVxuICAgIGNvbnN0IHZhbGlkbmFtZSA9IG5hbWV2YWwuc2FmZVBhcnNlKG5hbWUpO1xuICAgIGNvbnN0IHZhbGVtYWlsID0gZW1haWx2YWwuc2FmZVBhcnNlKGVtYWlsKTtcbiAgICBpZighdmFsZW1haWwuc3VjY2VzcyAmJiAhdmFsaWRuYW1lLnN1Y2Nlc3MpIHtcbiAgICAgICAgcmV0dXJuIFJlc3BvbnNlLmpzb24oe1xuICAgICAgICAgICAgbWVzc2FnZTogXCJXcm9uZyBJbnB1dHNcIixcbiAgICAgICAgICAgIHN1Y2Nlc3M6ZmFsc2VcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgICBpZighdmFsZW1haWwuc3VjY2VzcyAmJiB2YWxpZG5hbWUuc3VjY2Vzcykge1xuICAgICAgICAgICAgYXdhaXQgZGIudXNlci51cGRhdGUoe1xuICAgICAgICAgICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBOdW1iZXIoc2Vzc2lvbi51c2VyLmlkKSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogbmFtZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICByZXR1cm4gUmVzcG9uc2UuanNvbih7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJuYW1lIHVwZGF0ZWQgaW52YWxpZCBlbWFpbFwiLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6dHJ1ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHZhbGVtYWlsLnN1Y2Nlc3MgJiYgIXZhbGlkbmFtZS5zdWNjZXNzKSB7XG4gICAgICAgICAgICBhd2FpdCBkYi51c2VyLnVwZGF0ZSh7XG4gICAgICAgICAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IE51bWJlcihzZXNzaW9uLnVzZXIuaWQpLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBlbWFpbDogZW1haWxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmV0dXJuIFJlc3BvbnNlLmpzb24oe1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiZW1haWwgdXBkYXRlZCBpbnZhbGlkIG5hbWVcIixcbiAgICAgICAgICAgICAgICBzdWNjZXNzOnRydWVcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBhd2FpdCBkYi51c2VyLnVwZGF0ZSh7XG4gICAgICAgICAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IE51bWJlcihzZXNzaW9uLnVzZXIuaWQpLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgICAgICBlbWFpbDogZW1haWxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9ICAgXG4gICAgICAgIFxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG5cbiAgICAgICAgcmV0dXJuIFJlc3BvbnNlLmpzb24oe1xuICAgICAgICAgICAgbWVzc2FnZTogXCJJbnRlcm5hbCBzZXJ2ZXIgRXJyb3JcIixcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlXG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgIH1cbiAgICByZXR1cm4gUmVzcG9uc2UuanNvbih7XG4gICAgICAgIG1lc3NhZ2U6IFwiVXBkYXRlZCBTdWNjZXNzZnVsbHlcIixcbiAgICAgICAgc3VjY2VzczogdHJ1ZVxuICAgIH0pXG5cbn0iXSwibmFtZXMiOlsiZ2V0U2VydmVyU2Vzc2lvbiIsImF1dGhPcHRpb25zIiwiZGIiLCJ6IiwibmFtZXZhbCIsInN0cmluZyIsIm1pbiIsInJlZ2V4IiwiZW1haWx2YWwiLCJlbWFpbCIsIlBPU1QiLCJyZXEiLCJzZXNzaW9uIiwibmFtZSIsImpzb24iLCJ2YWxpZG5hbWUiLCJzYWZlUGFyc2UiLCJ2YWxlbWFpbCIsInN1Y2Nlc3MiLCJSZXNwb25zZSIsIm1lc3NhZ2UiLCJ1c2VyIiwidXBkYXRlIiwid2hlcmUiLCJpZCIsIk51bWJlciIsImRhdGEiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/updateuser/route.ts\n");

/***/ }),

/***/ "(rsc)/./app/lib/auth.ts":
/*!*************************!*\
  !*** ./app/lib/auth.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var _repo_db_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @repo/db/client */ \"(rsc)/../../packages/db/index.ts\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/../../node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst authOptions = {\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            name: \"Credentials\",\n            credentials: {\n                phone: {\n                    label: \"Phone number\",\n                    type: \"text\",\n                    placeholder: \"1231231231\",\n                    required: true\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\",\n                    required: true\n                }\n            },\n            // TODO: User credentials type from next-aut\n            async authorize (credentials) {\n                // Do zod validation, OTP validation here\n                const hashedPassword = await bcrypt__WEBPACK_IMPORTED_MODULE_2___default().hash(credentials.password, 10);\n                const existingUser = await _repo_db_client__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.findFirst({\n                    where: {\n                        number: credentials.phone\n                    }\n                });\n                if (existingUser) {\n                    const passwordValidation = await bcrypt__WEBPACK_IMPORTED_MODULE_2___default().compare(credentials.password, existingUser.password);\n                    if (passwordValidation) {\n                        return {\n                            id: existingUser.id.toString(),\n                            name: existingUser.name,\n                            email: existingUser.number\n                        };\n                    }\n                    return null;\n                }\n                // try {\n                //     const user = await db.user.create({\n                //         data: {\n                //             number: credentials.phone,\n                //             password: hashedPassword\n                //         }\n                //     });\n                //     return {\n                //         id: user.id.toString(),\n                //         name: user.name,\n                //         email: user.number\n                //     }\n                // } catch(e) {\n                //     console.error(e);\n                // }\n                return null;\n            }\n        })\n    ],\n    secret: process.env.JWT_SECRET || \"secret\",\n    callbacks: {\n        // TODO: can u fix the type here? Using any is bad\n        async session ({ token, session }) {\n            session.user.id = token.sub;\n            return session;\n        }\n    },\n    pages: {\n        signIn: \"/signin\"\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvbGliL2F1dGgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBaUM7QUFDZ0M7QUFDckM7QUFFckIsTUFBTUcsY0FBYztJQUN2QkMsV0FBVztRQUNUSCwyRUFBbUJBLENBQUM7WUFDaEJJLE1BQU07WUFDTkMsYUFBYTtnQkFDWEMsT0FBTztvQkFBRUMsT0FBTztvQkFBZ0JDLE1BQU07b0JBQVFDLGFBQWE7b0JBQWNDLFVBQVU7Z0JBQUs7Z0JBQ3hGQyxVQUFVO29CQUFFSixPQUFPO29CQUFZQyxNQUFNO29CQUFZRSxVQUFVO2dCQUFLO1lBQ2xFO1lBQ0EsNENBQTRDO1lBQzVDLE1BQU1FLFdBQVVQLFdBQWdCO2dCQUM5Qix5Q0FBeUM7Z0JBQ3pDLE1BQU1RLGlCQUFpQixNQUFNWixrREFBVyxDQUFDSSxZQUFZTSxRQUFRLEVBQUU7Z0JBQy9ELE1BQU1JLGVBQWUsTUFBTWhCLHVEQUFFQSxDQUFDaUIsSUFBSSxDQUFDQyxTQUFTLENBQUM7b0JBQ3pDQyxPQUFPO3dCQUNIQyxRQUFRZCxZQUFZQyxLQUFLO29CQUM3QjtnQkFDSjtnQkFFQSxJQUFJUyxjQUFjO29CQUNkLE1BQU1LLHFCQUFxQixNQUFNbkIscURBQWMsQ0FBQ0ksWUFBWU0sUUFBUSxFQUFFSSxhQUFhSixRQUFRO29CQUMzRixJQUFJUyxvQkFBb0I7d0JBQ3BCLE9BQU87NEJBQ0hFLElBQUlQLGFBQWFPLEVBQUUsQ0FBQ0MsUUFBUTs0QkFDNUJuQixNQUFNVyxhQUFhWCxJQUFJOzRCQUN2Qm9CLE9BQU9ULGFBQWFJLE1BQU07d0JBQzlCO29CQUNKO29CQUNBLE9BQU87Z0JBQ1g7Z0JBRUEsUUFBUTtnQkFDUiwwQ0FBMEM7Z0JBQzFDLGtCQUFrQjtnQkFDbEIseUNBQXlDO2dCQUN6Qyx1Q0FBdUM7Z0JBQ3ZDLFlBQVk7Z0JBQ1osVUFBVTtnQkFFVixlQUFlO2dCQUNmLGtDQUFrQztnQkFDbEMsMkJBQTJCO2dCQUMzQiw2QkFBNkI7Z0JBQzdCLFFBQVE7Z0JBQ1IsZUFBZTtnQkFDZix3QkFBd0I7Z0JBQ3hCLElBQUk7Z0JBRUosT0FBTztZQUNUO1FBQ0Y7S0FDSDtJQUNETSxRQUFRQyxRQUFRQyxHQUFHLENBQUNDLFVBQVUsSUFBSTtJQUNsQ0MsV0FBVztRQUNQLGtEQUFrRDtRQUNsRCxNQUFNQyxTQUFRLEVBQUVDLEtBQUssRUFBRUQsT0FBTyxFQUFPO1lBQ2pDQSxRQUFRZCxJQUFJLENBQUNNLEVBQUUsR0FBR1MsTUFBTUMsR0FBRztZQUUzQixPQUFPRjtRQUNYO0lBQ0o7SUFDQUcsT0FBTztRQUNIQyxRQUFRO0lBQ1o7QUFDRixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZG9jcy8uL2FwcC9saWIvYXV0aC50cz82YmZjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkYiBmcm9tIFwiQHJlcG8vZGIvY2xpZW50XCI7XG5pbXBvcnQgQ3JlZGVudGlhbHNQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFsc1wiXG5pbXBvcnQgYmNyeXB0IGZyb20gXCJiY3J5cHRcIjtcblxuZXhwb3J0IGNvbnN0IGF1dGhPcHRpb25zID0ge1xuICAgIHByb3ZpZGVyczogW1xuICAgICAgQ3JlZGVudGlhbHNQcm92aWRlcih7XG4gICAgICAgICAgbmFtZTogJ0NyZWRlbnRpYWxzJyxcbiAgICAgICAgICBjcmVkZW50aWFsczoge1xuICAgICAgICAgICAgcGhvbmU6IHsgbGFiZWw6IFwiUGhvbmUgbnVtYmVyXCIsIHR5cGU6IFwidGV4dFwiLCBwbGFjZWhvbGRlcjogXCIxMjMxMjMxMjMxXCIsIHJlcXVpcmVkOiB0cnVlIH0sXG4gICAgICAgICAgICBwYXNzd29yZDogeyBsYWJlbDogXCJQYXNzd29yZFwiLCB0eXBlOiBcInBhc3N3b3JkXCIsIHJlcXVpcmVkOiB0cnVlIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIC8vIFRPRE86IFVzZXIgY3JlZGVudGlhbHMgdHlwZSBmcm9tIG5leHQtYXV0XG4gICAgICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzOiBhbnkpIHtcbiAgICAgICAgICAgIC8vIERvIHpvZCB2YWxpZGF0aW9uLCBPVFAgdmFsaWRhdGlvbiBoZXJlXG4gICAgICAgICAgICBjb25zdCBoYXNoZWRQYXNzd29yZCA9IGF3YWl0IGJjcnlwdC5oYXNoKGNyZWRlbnRpYWxzLnBhc3N3b3JkLCAxMCk7XG4gICAgICAgICAgICBjb25zdCBleGlzdGluZ1VzZXIgPSBhd2FpdCBkYi51c2VyLmZpbmRGaXJzdCh7XG4gICAgICAgICAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICAgICAgICAgICAgbnVtYmVyOiBjcmVkZW50aWFscy5waG9uZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoZXhpc3RpbmdVc2VyKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFzc3dvcmRWYWxpZGF0aW9uID0gYXdhaXQgYmNyeXB0LmNvbXBhcmUoY3JlZGVudGlhbHMucGFzc3dvcmQsIGV4aXN0aW5nVXNlci5wYXNzd29yZCk7XG4gICAgICAgICAgICAgICAgaWYgKHBhc3N3b3JkVmFsaWRhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGV4aXN0aW5nVXNlci5pZC50b1N0cmluZygpLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogZXhpc3RpbmdVc2VyLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbWFpbDogZXhpc3RpbmdVc2VyLm51bWJlclxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyB0cnkge1xuICAgICAgICAgICAgLy8gICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBkYi51c2VyLmNyZWF0ZSh7XG4gICAgICAgICAgICAvLyAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIG51bWJlcjogY3JlZGVudGlhbHMucGhvbmUsXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBwYXNzd29yZDogaGFzaGVkUGFzc3dvcmRcbiAgICAgICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAgICAgLy8gICAgIH0pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgaWQ6IHVzZXIuaWQudG9TdHJpbmcoKSxcbiAgICAgICAgICAgIC8vICAgICAgICAgbmFtZTogdXNlci5uYW1lLFxuICAgICAgICAgICAgLy8gICAgICAgICBlbWFpbDogdXNlci5udW1iZXJcbiAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAvLyB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgXSxcbiAgICBzZWNyZXQ6IHByb2Nlc3MuZW52LkpXVF9TRUNSRVQgfHwgXCJzZWNyZXRcIixcbiAgICBjYWxsYmFja3M6IHtcbiAgICAgICAgLy8gVE9ETzogY2FuIHUgZml4IHRoZSB0eXBlIGhlcmU/IFVzaW5nIGFueSBpcyBiYWRcbiAgICAgICAgYXN5bmMgc2Vzc2lvbih7IHRva2VuLCBzZXNzaW9uIH06IGFueSkge1xuICAgICAgICAgICAgc2Vzc2lvbi51c2VyLmlkID0gdG9rZW4uc3ViXG5cbiAgICAgICAgICAgIHJldHVybiBzZXNzaW9uXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHBhZ2VzOiB7XG4gICAgICAgIHNpZ25JbjogXCIvc2lnbmluXCIsXG4gICAgfSxcbiAgfVxuICAiXSwibmFtZXMiOlsiZGIiLCJDcmVkZW50aWFsc1Byb3ZpZGVyIiwiYmNyeXB0IiwiYXV0aE9wdGlvbnMiLCJwcm92aWRlcnMiLCJuYW1lIiwiY3JlZGVudGlhbHMiLCJwaG9uZSIsImxhYmVsIiwidHlwZSIsInBsYWNlaG9sZGVyIiwicmVxdWlyZWQiLCJwYXNzd29yZCIsImF1dGhvcml6ZSIsImhhc2hlZFBhc3N3b3JkIiwiaGFzaCIsImV4aXN0aW5nVXNlciIsInVzZXIiLCJmaW5kRmlyc3QiLCJ3aGVyZSIsIm51bWJlciIsInBhc3N3b3JkVmFsaWRhdGlvbiIsImNvbXBhcmUiLCJpZCIsInRvU3RyaW5nIiwiZW1haWwiLCJzZWNyZXQiLCJwcm9jZXNzIiwiZW52IiwiSldUX1NFQ1JFVCIsImNhbGxiYWNrcyIsInNlc3Npb24iLCJ0b2tlbiIsInN1YiIsInBhZ2VzIiwic2lnbkluIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/lib/auth.ts\n");

/***/ }),

/***/ "(rsc)/../../packages/db/index.ts":
/*!**********************************!*\
  !*** ../../packages/db/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prismaClientSingleton = ()=>{\n    return new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n};\nconst prisma = globalThis.prismaGlobal ?? prismaClientSingleton();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\nif (true) globalThis.prismaGlobal = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vLi4vcGFja2FnZXMvZGIvaW5kZXgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTZDO0FBRTdDLE1BQU1DLHdCQUF3QjtJQUM1QixPQUFPLElBQUlELHdEQUFZQTtBQUN6QjtBQU1BLE1BQU1FLFNBQW1EQyxXQUFXQyxZQUFZLElBQUlIO0FBRXBGLGlFQUFlQyxNQUFNQSxFQUFBO0FBRXJCLElBQUlHLElBQXlCLEVBQWNGLFdBQVdDLFlBQVksR0FBR0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kb2NzLy4uLy4uL3BhY2thZ2VzL2RiL2luZGV4LnRzP2RmYjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnXG5cbmNvbnN0IHByaXNtYUNsaWVudFNpbmdsZXRvbiA9ICgpID0+IHtcbiAgcmV0dXJuIG5ldyBQcmlzbWFDbGllbnQoKVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIHZhciBwcmlzbWFHbG9iYWw6IHVuZGVmaW5lZCB8IFJldHVyblR5cGU8dHlwZW9mIHByaXNtYUNsaWVudFNpbmdsZXRvbj5cbn1cblxuY29uc3QgcHJpc21hOiBSZXR1cm5UeXBlPHR5cGVvZiBwcmlzbWFDbGllbnRTaW5nbGV0b24+ID0gZ2xvYmFsVGhpcy5wcmlzbWFHbG9iYWwgPz8gcHJpc21hQ2xpZW50U2luZ2xldG9uKClcblxuZXhwb3J0IGRlZmF1bHQgcHJpc21hXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSBnbG9iYWxUaGlzLnByaXNtYUdsb2JhbCA9IHByaXNtYSJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWFDbGllbnRTaW5nbGV0b24iLCJwcmlzbWEiLCJnbG9iYWxUaGlzIiwicHJpc21hR2xvYmFsIiwicHJvY2VzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/../../packages/db/index.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/jose","vendor-chunks/next-auth","vendor-chunks/openid-client","vendor-chunks/oauth","vendor-chunks/@babel","vendor-chunks/preact","vendor-chunks/uuid","vendor-chunks/preact-render-to-string","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva","vendor-chunks/zod"], () => (__webpack_exec__("(rsc)/../../node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fupdateuser%2Froute&page=%2Fapi%2Fupdateuser%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fupdateuser%2Froute.ts&appDir=%2FUsers%2Frsingh08%2FDeveloper%2FLearning%2F100xdev%2FProjects%2FDigital-Wallet%2Fapps%2Fuser-app%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Frsingh08%2FDeveloper%2FLearning%2F100xdev%2FProjects%2FDigital-Wallet%2Fapps%2Fuser-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();