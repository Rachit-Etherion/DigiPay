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
exports.id = "app/api/userdata/route";
exports.ids = ["app/api/userdata/route"];
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

/***/ "(rsc)/../../node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fuserdata%2Froute&page=%2Fapi%2Fuserdata%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fuserdata%2Froute.ts&appDir=%2FUsers%2Frsingh08%2FDeveloper%2FLearning%2F100xdev%2FProjects%2FDigital-Wallet%2Fapps%2Fuser-app%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Frsingh08%2FDeveloper%2FLearning%2F100xdev%2FProjects%2FDigital-Wallet%2Fapps%2Fuser-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fuserdata%2Froute&page=%2Fapi%2Fuserdata%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fuserdata%2Froute.ts&appDir=%2FUsers%2Frsingh08%2FDeveloper%2FLearning%2F100xdev%2FProjects%2FDigital-Wallet%2Fapps%2Fuser-app%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Frsingh08%2FDeveloper%2FLearning%2F100xdev%2FProjects%2FDigital-Wallet%2Fapps%2Fuser-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/../../node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/../../node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/../../node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_rsingh08_Developer_Learning_100xdev_Projects_Digital_Wallet_apps_user_app_app_api_userdata_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/userdata/route.ts */ \"(rsc)/./app/api/userdata/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/userdata/route\",\n        pathname: \"/api/userdata\",\n        filename: \"route\",\n        bundlePath: \"app/api/userdata/route\"\n    },\n    resolvedPagePath: \"/Users/rsingh08/Developer/Learning/100xdev/Projects/Digital-Wallet/apps/user-app/app/api/userdata/route.ts\",\n    nextConfigOutput,\n    userland: _Users_rsingh08_Developer_Learning_100xdev_Projects_Digital_Wallet_apps_user_app_app_api_userdata_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/userdata/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1hcHAtbG9hZGVyLmpzP25hbWU9YXBwJTJGYXBpJTJGdXNlcmRhdGElMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnVzZXJkYXRhJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGdXNlcmRhdGElMkZyb3V0ZS50cyZhcHBEaXI9JTJGVXNlcnMlMkZyc2luZ2gwOCUyRkRldmVsb3BlciUyRkxlYXJuaW5nJTJGMTAweGRldiUyRlByb2plY3RzJTJGRGlnaXRhbC1XYWxsZXQlMkZhcHBzJTJGdXNlci1hcHAlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRlVzZXJzJTJGcnNpbmdoMDglMkZEZXZlbG9wZXIlMkZMZWFybmluZyUyRjEwMHhkZXYlMkZQcm9qZWN0cyUyRkRpZ2l0YWwtV2FsbGV0JTJGYXBwcyUyRnVzZXItYXBwJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQzBEO0FBQ3ZJO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdUdBQXVHO0FBQy9HO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDNko7O0FBRTdKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZG9jcy8/YzM0NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMvcnNpbmdoMDgvRGV2ZWxvcGVyL0xlYXJuaW5nLzEwMHhkZXYvUHJvamVjdHMvRGlnaXRhbC1XYWxsZXQvYXBwcy91c2VyLWFwcC9hcHAvYXBpL3VzZXJkYXRhL3JvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS91c2VyZGF0YS9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3VzZXJkYXRhXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS91c2VyZGF0YS9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9Vc2Vycy9yc2luZ2gwOC9EZXZlbG9wZXIvTGVhcm5pbmcvMTAweGRldi9Qcm9qZWN0cy9EaWdpdGFsLVdhbGxldC9hcHBzL3VzZXItYXBwL2FwcC9hcGkvdXNlcmRhdGEvcm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0IH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvdXNlcmRhdGEvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0LCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/../../node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fuserdata%2Froute&page=%2Fapi%2Fuserdata%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fuserdata%2Froute.ts&appDir=%2FUsers%2Frsingh08%2FDeveloper%2FLearning%2F100xdev%2FProjects%2FDigital-Wallet%2Fapps%2Fuser-app%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Frsingh08%2FDeveloper%2FLearning%2F100xdev%2FProjects%2FDigital-Wallet%2Fapps%2Fuser-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/userdata/route.ts":
/*!***********************************!*\
  !*** ./app/api/userdata/route.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var _repo_db_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @repo/db/client */ \"(rsc)/../../packages/db/index.ts\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"(rsc)/../../node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/server */ \"(rsc)/../../node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/auth */ \"(rsc)/./app/lib/auth.ts\");\n\n\n\n\nconst GET = async ()=>{\n    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_1__.getServerSession)(_lib_auth__WEBPACK_IMPORTED_MODULE_3__.authOptions);\n    // console.log(id)\n    try {\n        // console.log(\"1\")\n        const user = await _repo_db_client__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.findFirst({\n            where: {\n                id: Number(session.user.id)\n            },\n            select: {\n                name: true,\n                email: true,\n                number: true\n            }\n        });\n        const balance = await _repo_db_client__WEBPACK_IMPORTED_MODULE_0__[\"default\"].balance.findFirst({\n            where: {\n                userId: Number(session.user.id)\n            },\n            select: {\n                amount: true,\n                locked: true\n            }\n        });\n        // console.log(user)\n        if (user) {\n            return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n                success: true,\n                message: \"Data fetch successfully\",\n                name: user.name,\n                email: user.email,\n                number: user.number,\n                balance: balance?.amount,\n                lockamount: balance?.locked\n            });\n        }\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            success: false,\n            message: \"User not found\"\n        }, {\n            status: 101\n        });\n    } catch (error) {\n        console.log(error);\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            success: false,\n            message: \"Internal server Error\"\n        }, {\n            status: 500\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3VzZXJkYXRhL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFnQztBQUNZO0FBQ0Y7QUFDRTtBQUVyQyxNQUFNSSxNQUFNO0lBRWYsTUFBTUMsVUFBVSxNQUFNSiwyREFBZ0JBLENBQUNFLGtEQUFXQTtJQUNsRCxrQkFBa0I7SUFFbEIsSUFBSTtRQUNBLG1CQUFtQjtRQUNuQixNQUFNRyxPQUFPLE1BQU1OLHVEQUFFQSxDQUFDTSxJQUFJLENBQUNDLFNBQVMsQ0FBQztZQUNqQ0MsT0FBTztnQkFDSEMsSUFBR0MsT0FBT0wsUUFBUUMsSUFBSSxDQUFDRyxFQUFFO1lBQzdCO1lBQ0FFLFFBQVE7Z0JBQ0pDLE1BQU07Z0JBQ05DLE9BQU87Z0JBQ1BDLFFBQVE7WUFDWjtRQUNKO1FBQ0EsTUFBTUMsVUFBVSxNQUFNZix1REFBRUEsQ0FBQ2UsT0FBTyxDQUFDUixTQUFTLENBQUM7WUFDdkNDLE9BQU87Z0JBQ0hRLFFBQU9OLE9BQU9MLFFBQVFDLElBQUksQ0FBQ0csRUFBRTtZQUNqQztZQUNBRSxRQUFRO2dCQUNKTSxRQUFRO2dCQUNSQyxRQUFRO1lBQ1o7UUFDSjtRQUNBLG9CQUFvQjtRQUVwQixJQUFHWixNQUFNO1lBQ0wsT0FBT0oscURBQVlBLENBQUNpQixJQUFJLENBQUM7Z0JBQ3JCQyxTQUFTO2dCQUNUQyxTQUFTO2dCQUNUVCxNQUFNTixLQUFLTSxJQUFJO2dCQUNmQyxPQUFPUCxLQUFLTyxLQUFLO2dCQUNqQkMsUUFBUVIsS0FBS1EsTUFBTTtnQkFDbkJDLFNBQVNBLFNBQVNFO2dCQUNsQkssWUFBWVAsU0FBU0c7WUFDekI7UUFDSjtRQUNBLE9BQU9oQixxREFBWUEsQ0FBQ2lCLElBQUksQ0FBQztZQUNyQkMsU0FBUztZQUNUQyxTQUFTO1FBQ2IsR0FBRTtZQUFDRSxRQUFRO1FBQUc7SUFFbEIsRUFBRSxPQUFPQyxPQUFPO1FBQ1pDLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFDWixPQUFPdEIscURBQVlBLENBQUNpQixJQUFJLENBQUM7WUFDckJDLFNBQVM7WUFDVEMsU0FBUztRQUNiLEdBQUc7WUFBQ0UsUUFBUTtRQUFHO0lBQ25CO0FBQ0osRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RvY3MvLi9hcHAvYXBpL3VzZXJkYXRhL3JvdXRlLnRzPzk4NGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRiIGZyb20gXCJAcmVwby9kYi9jbGllbnRcIlxuaW1wb3J0IHsgZ2V0U2VydmVyU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGhcIlxuaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCJcbmltcG9ydCB7IGF1dGhPcHRpb25zIH0gZnJvbSBcIi4uLy4uL2xpYi9hdXRoXCJcblxuZXhwb3J0IGNvbnN0IEdFVCA9IGFzeW5jICgpID0+IHtcblxuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXJ2ZXJTZXNzaW9uKGF1dGhPcHRpb25zKTtcbiAgICAvLyBjb25zb2xlLmxvZyhpZClcbiAgICBcbiAgICB0cnkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIjFcIilcbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IGRiLnVzZXIuZmluZEZpcnN0KHtcbiAgICAgICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgICAgICAgaWQ6TnVtYmVyKHNlc3Npb24udXNlci5pZCksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2VsZWN0OiB7XG4gICAgICAgICAgICAgICAgbmFtZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBlbWFpbDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBudW1iZXI6IHRydWUsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIGNvbnN0IGJhbGFuY2UgPSBhd2FpdCBkYi5iYWxhbmNlLmZpbmRGaXJzdCh7XG4gICAgICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgICAgIHVzZXJJZDpOdW1iZXIoc2Vzc2lvbi51c2VyLmlkKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZWxlY3Q6IHtcbiAgICAgICAgICAgICAgICBhbW91bnQ6IHRydWUsXG4gICAgICAgICAgICAgICAgbG9ja2VkOiB0cnVlLFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAvLyBjb25zb2xlLmxvZyh1c2VyKVxuXG4gICAgICAgIGlmKHVzZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7XG4gICAgICAgICAgICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkRhdGEgZmV0Y2ggc3VjY2Vzc2Z1bGx5XCIsXG4gICAgICAgICAgICAgICAgbmFtZTogdXNlci5uYW1lLFxuICAgICAgICAgICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgICAgICAgICAgICAgIG51bWJlcjogdXNlci5udW1iZXIsXG4gICAgICAgICAgICAgICAgYmFsYW5jZTogYmFsYW5jZT8uYW1vdW50LFxuICAgICAgICAgICAgICAgIGxvY2thbW91bnQ6IGJhbGFuY2U/LmxvY2tlZCxcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICAgICAgbWVzc2FnZTogXCJVc2VyIG5vdCBmb3VuZFwiXG4gICAgICAgIH0se3N0YXR1czogMTAxfSlcbiAgICAgICAgXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7XG4gICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiSW50ZXJuYWwgc2VydmVyIEVycm9yXCIsXG4gICAgICAgIH0sIHtzdGF0dXM6IDUwMH0pXG4gICAgfVxufSJdLCJuYW1lcyI6WyJkYiIsImdldFNlcnZlclNlc3Npb24iLCJOZXh0UmVzcG9uc2UiLCJhdXRoT3B0aW9ucyIsIkdFVCIsInNlc3Npb24iLCJ1c2VyIiwiZmluZEZpcnN0Iiwid2hlcmUiLCJpZCIsIk51bWJlciIsInNlbGVjdCIsIm5hbWUiLCJlbWFpbCIsIm51bWJlciIsImJhbGFuY2UiLCJ1c2VySWQiLCJhbW91bnQiLCJsb2NrZWQiLCJqc29uIiwic3VjY2VzcyIsIm1lc3NhZ2UiLCJsb2NrYW1vdW50Iiwic3RhdHVzIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/userdata/route.ts\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/jose","vendor-chunks/next-auth","vendor-chunks/openid-client","vendor-chunks/oauth","vendor-chunks/@babel","vendor-chunks/preact","vendor-chunks/uuid","vendor-chunks/preact-render-to-string","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/../../node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fuserdata%2Froute&page=%2Fapi%2Fuserdata%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fuserdata%2Froute.ts&appDir=%2FUsers%2Frsingh08%2FDeveloper%2FLearning%2F100xdev%2FProjects%2FDigital-Wallet%2Fapps%2Fuser-app%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Frsingh08%2FDeveloper%2FLearning%2F100xdev%2FProjects%2FDigital-Wallet%2Fapps%2Fuser-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();