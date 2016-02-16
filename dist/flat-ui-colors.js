(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("fs"), require("path"));
	else if(typeof define === 'function' && define.amd)
		define(["fs", "path"], factory);
	else if(typeof exports === 'object')
		exports["flatUiColors"] = factory(require("fs"), require("path"));
	else
		root["flatUiColors"] = factory(root["fs"], root["path"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_59__, __WEBPACK_EXTERNAL_MODULE_60__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _colors = __webpack_require__(1);
	
	var _htmlExport = __webpack_require__(2);
	
	var _htmlExport2 = _interopRequireDefault(_htmlExport);
	
	var _fetch = __webpack_require__(61);
	
	var _fetch2 = _interopRequireDefault(_fetch);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var flatUiColors = {
	  export: new _htmlExport2.default(_colors.colors),
	  get: new _fetch2.default(_colors.colors)
	};
	
	exports.default = flatUiColors;

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var colors = exports.colors = ['#0000f0', '#00101c', '#001630', '#001700', '#002952', '#002e5a', '#004774', '#0047fd', '#004c79', '#004d4d', '#004f78', '#005057', '#00587a', '#005f97', '#006666', '#008891', '#009085', '#009999', '#0099ff', '#009b83', '#00a49a', '#00a6c0', '#00aa85', '#00ac65', '#00afd1', '#00b1be', '#00b5b5', '#00c7ab', '#00ccc7', '#00d717', '#00dc8f', '#00f000', '#010035', '#017163', '#01c26e', '#02000d', '#02135c', '#02222b', '#025159', '#0295e2', '#031316', '#032e46', '#03a2fd', '#040200', '#043d5d', '#04ddac', '#050002', '#050f15', '#053542', '#0615f2', '#061b1c', '#0694ea', '#07090e', '#070d15', '#072527', '#074354', '#080808', '#084886', '#08aac7', '#090908', '#091414', '#0918ec', '#09557a', '#097109', '#097b73', '#0a0a0a', '#0a2037', '#0a3542', '#0a5008', '#0a710a', '#0a7379', '#0b0c07', '#0b8389', '#0c1024', '#0c1216', '#0c3a3b', '#0c486c', '#0c545c', '#0c555c', '#0e212c', '#0e9aa7', '#0ebb9f', '#0f0012', '#0f090a', '#0f0f0f', '#0f3057', '#0f595e', '#0f6177', '#0f705d', '#0fa7d2', '#0fbab7', '#10806e', '#10d2e5', '#111111', '#11132f', '#11156d', '#112233', '#112885', '#11303f', '#1136c7', '#116c53', '#11a8ab', '#11c7a8', '#12836d', '#12a563', '#131011', '#131a1e', '#131f49', '#136151', '#13ab45', '#146967', '#14967c', '#150605', '#153e63', '#158b93', '#161616', '#16171b', '#161d29', '#16204d', '#166670', '#167efb', '#1693a5', '#16a085', '#16a086', '#16c42d', '#174c4f', '#17696d', '#178ca6', '#17a98c', '#17b090', '#17d6f5', '#181303', '#181818', '#181d21', '#183153', '#188f67', '#18bc9c', '#1912fe', '#19262c', '#198f31', '#199ec7', '#1a1238', '#1a1a1a', '#1a4c6d', '#1abc9c', '#1b001e', '#1b052c', '#1b242b', '#1b6574', '#1ba1e6', '#1ba39c', '#1bb568', '#1bbc9b', '#1c2021', '#1c2236', '#1c252e', '#1c2924', '#1c57e1', '#1c9987', '#1ca1ad', '#1d1d29', '#1d1e1f', '#1d2247', '#1d2a34', '#1d628b', '#1dabb8', '#1dae8b', '#1e160b', '#1e272b', '#1e2938', '#1f0303', '#1f253d', '#1f2b37', '#1f2e3f', '#1f3a93', '#1f4d5e', '#1f9ea3', '#1fbba6', '#1fcf6d', '#200d07', '#202020', '#203040', '#203a4f', '#20a286', '#20b08c', '#21040f', '#212b40', '#216379', '#217fbc', '#218a9e', '#219e25', '#21baa6', '#22202b', '#222222', '#223242', '#223549', '#23221e', '#232c3d', '#234291', '#2393c2', '#2398c2', '#239fc2', '#23a84d', '#23a899', '#23b1ad', '#23b1c2', '#23b684', '#23bbb2', '#23fadc', '#24273a', '#243038', '#24422e', '#2481b2', '#249991', '#25042a', '#252928', '#25373d', '#254f51', '#259166', '#25a278', '#261b23', '#262606', '#263d4e', '#26c281', '#27331a', '#273325', '#27332c', '#27ae60', '#27ae61', '#27bca0', '#27d0b9', '#280b52', '#282256', '#282830', '#28a9bc', '#290b03', '#291709', '#291d1c', '#292447', '#29251c', '#292929', '#292e40', '#292f4f', '#293240', '#294543', '#297372', '#297aa3', '#297c74', '#2980b9', '#2980ba', '#298773', '#2a2927', '#2a2a2a', '#2a2b1f', '#2a2b42', '#2a2c45', '#2a3542', '#2a6e9e', '#2b0b0b', '#2b1e18', '#2b838e', '#2bb0bf', '#2c214d', '#2c2c2c', '#2c3e50', '#2c4055', '#2c544d', '#2c5957', '#2c82c9', '#2cc990', '#2d221c', '#2d2d2d', '#2d3e50', '#2d7344', '#2dcc70', '#2e2e2e', '#2e8a9c', '#2e8c80', '#2e928a', '#2ecc71', '#2ecd71', '#2edfc7', '#2f2331', '#2f2c35', '#2f2d2c', '#2f2f2f', '#2f343a', '#2f3491', '#2f79c3', '#2fe2d9', '#300600', '#301818', '#302823', '#302f2f', '#303030', '#30474d', '#304860', '#306097', '#3068b6', '#30d7bb', '#313324', '#313632', '#313840', '#313a42', '#313b4b', '#315c6d', '#31d0d6', '#31d6ce', '#320644', '#323232', '#323a45', '#324245', '#326876', '#32d9cb', '#331517', '#331b17', '#331d12', '#332522', '#332a17', '#332f29', '#333333', '#334657', '#336b5a', '#336e7b', '#33a828', '#342f52', '#343557', '#343738', '#344146', '#34495d', '#34495e', '#3498db', '#349935', '#34b297', '#34cbfd', '#353535', '#353c3e', '#353e43', '#35474e', '#354b48', '#35c187', '#360528', '#363636', '#363b4e', '#36c4d0', '#373746', '#373f16', '#374047', '#37465d', '#37575c', '#375b54', '#37767a', '#382e1b', '#383732', '#383745', '#383942', '#383d2c', '#3897d9', '#392541', '#393939', '#393b4e', '#394264', '#396a90', '#39b4ff', '#3a2c21', '#3a5194', '#3a6e7a', '#3b0102', '#3b3c3d', '#3b3f4c', '#3b482e', '#3b592a', '#3b7e87', '#3ba8a5', '#3bafbe', '#3bc391', '#3c2130', '#3c3741', '#3c68b1', '#3c81b5', '#3c8ab8', '#3c99ea', '#3d2a2a', '#3d3020', '#3d414d', '#3d8eb9', '#3d9472', '#3da4ab', '#3db0bf', '#3e033f', '#3e4651', '#3e49f2', '#3e6787', '#3e9471', '#3eb097', '#3f2110', '#3f303f', '#3f3067', '#3f3b47', '#3f3f3f', '#3f4259', '#3f4c46', '#3f4d58', '#3f4f59', '#3f5a69', '#40032c', '#40034d', '#401457', '#401f0e', '#40486d', '#404a60', '#409c97', '#40a7a0', '#40abd9', '#40bc86', '#413333', '#413c5e', '#414040', '#41452b', '#414755', '#414a52', '#415c71', '#416294', '#4193a6', '#41a35b', '#41bdbd', '#421e20', '#422e39', '#42420a', '#424242', '#424d53', '#424e5a', '#425c57', '#42729b', '#42787a', '#42afff', '#432522', '#432e41', '#43353d', '#435869', '#436266', '#4387b5', '#4387f5', '#43b73f', '#444444', '#444b54', '#449bb5', '#44b39d', '#44b9ff', '#44bbff', '#44cd94', '#45362e', '#453632', '#453e4a', '#455869', '#4589b0', '#45b739', '#462446', '#462a43', '#4633fe', '#464030', '#464a53', '#466a80', '#467e8f', '#468081', '#46adb3', '#47263b', '#475138', '#475152', '#478079', '#47b39d', '#47c9af', '#47d2e9', '#48393c', '#484830', '#48493b', '#484f59', '#48569e', '#48ad01', '#48b500', '#492363', '#49246b', '#492e25', '#494d4b', '#499642', '#49969b', '#4a4e4d', '#4a6b4e', '#4a8784', '#4ab7bf', '#4b3743', '#4b5942', '#4b6946', '#4bad08', '#4c515c', '#4c5d6c', '#4c86cc', '#4cd4b0', '#4d4933', '#4d4d4d', '#4d545e', '#4d5596', '#4d740d', '#4dac94', '#4dbdc2', '#4dc9a5', '#4e2772', '#4e4660', '#4ebe9f', '#4ecdc4', '#4edec2', '#4f2020', '#4f3b78', '#4f4f4f', '#4f576c', '#4f7076', '#4f8677', '#4fc671', '#501239', '#501c07', '#502a29', '#505d66', '#506468', '#52070c', '#523838', '#523d1e', '#523d1f', '#52645e', '#52883d', '#528ccb', '#52907b', '#532a79', '#534830', '#535d52', '#53baf9', '#53d769', '#53df83', '#542485', '#54483a', '#54573a', '#546a70', '#54acd2', '#54baa9', '#556270', '#557780', '#557d97', '#55c34d', '#560f47', '#563d28', '#5659c9', '#567e22', '#5692bf', '#5696d4', '#573a4c', '#575c56', '#5787ba', '#57c8f2', '#581620', '#584932', '#586474', '#587da7', '#588189', '#591516', '#592339', '#592d80', '#593106', '#595959', '#595e66', '#597df7', '#5991b1', '#59a9c2', '#59ae7f', '#59bcfb', '#59d490', '#5a5a5a', '#5a6e91', '#5a778c', '#5a999a', '#5ad4bc', '#5b1a14', '#5b2314', '#5b4b27', '#5b5b4d', '#5ba38b', '#5babe6', '#5bbae3', '#5bc0de', '#5bc6bc', '#5c4a36', '#5c4b38', '#5c584b', '#5c5c5c', '#5c6d7e', '#5c9f97', '#5cb4f7', '#5cccc8', '#5cd5e6', '#5cff00', '#5d574d', '#5d5d3e', '#5dd973', '#5e412f', '#5e593f', '#5e5b19', '#5e626c', '#5e6c31', '#5e7078', '#5eca7f', '#5f0f12', '#5f4b92', '#5f7174', '#5f7187', '#600000', '#603018', '#603838', '#60646d', '#6090a8', '#609ec1', '#60b0b7', '#60d2ff', '#61381b', '#61433b', '#61475e', '#6157d4', '#615a4a', '#616e7d', '#61707d', '#619a82', '#61a582', '#61c181', '#62524c', '#62525c', '#628e93', '#62c462', '#62c4ff', '#631515', '#63234f', '#632d48', '#63393e', '#635a51', '#635d4d', '#635f45', '#636464', '#636e06', '#637b82', '#638ead', '#639c89', '#642c1d', '#64413f', '#646152', '#647387', '#64c4af', '#64d98a', '#64ddbb', '#654323', '#656850', '#65878f', '#65888c', '#658999', '#65ad9e', '#65c6bb', '#65f511', '#664816', '#665555', '#666666', '#6687aa', '#66cc99', '#671a2e', '#67537a', '#67686b', '#677d8a', '#678efa', '#6797a1', '#682e2d', '#684644', '#685d61', '#687036', '#687e87', '#688d9b', '#68a9b3', '#696770', '#697e80', '#6a5250', '#6a5a15', '#6a6a6a', '#6a888c', '#6ab0aa', '#6ab1bb', '#6ad898', '#6b230b', '#6b2623', '#6b5336', '#6b5636', '#6b9b61', '#6bb18c', '#6c1827', '#6c4689', '#6c8784', '#6c8fb6', '#6c918e', '#6c9299', '#6cc0bf', '#6ccac9', '#6d0005', '#6d4b11', '#6d6966', '#6d808c', '#6d829d', '#6d918a', '#6d9329', '#6da0cd', '#6db18d', '#6dcff6', '#6ddf79', '#6e5d4b', '#6e6915', '#6e9996', '#6e9bd5', '#6ed4d8', '#6f2480', '#6f532a', '#6f7f54', '#702a87', '#703f17', '#705a54', '#706051', '#706f77', '#708580', '#708c7f', '#70a8af', '#710301', '#717790', '#718500', '#7186a3', '#71b1bb', '#71ba51', '#721128', '#721544', '#722809', '#726680', '#729176', '#72baac', '#72ccca', '#72f274', '#72fc82', '#735e67', '#73a5be', '#73a8af', '#73b1d6', '#73ba57', '#744c40', '#747468', '#748384', '#74a6cc', '#74b5aa', '#75536c', '#7566a9', '#75706b', '#7574a7', '#757a94', '#7585b6', '#766a6a', '#767d30', '#768a92', '#76a79f', '#76d1ec', '#776f70', '#777673', '#777788', '#777f34', '#778888', '#7790a6', '#779a92', '#779bf0', '#77abd6', '#785436', '#785edd', '#786048', '#788188', '#78c0a8', '#78c9ec', '#78d7e8', '#79857e', '#799412', '#79fa67', '#7a0000', '#7a7a16', '#7a7c46', '#7a858b', '#7a8879', '#7a922d', '#7a9a75', '#7a9fbf', '#7ab2b9', '#7ac974', '#7b513b', '#7b806b', '#7bb0a6', '#7bbbd6', '#7bcaa5', '#7c3c23', '#7c7654', '#7c7c7c', '#7ca39c', '#7cbcb5', '#7ceece', '#7d1424', '#7d370b', '#7d4a81', '#7d6707', '#7d6962', '#7d7870', '#7d9fa0', '#7db06d', '#7e3661', '#7e9e92', '#7ed2f7', '#7f7083', '#7f8c8d', '#7f8e8b', '#7fa453', '#7fa66c', '#7fc7e6', '#800149', '#804829', '#805562', '#80573c', '#806c53', '#80866c', '#80c4b7', '#811dbf', '#816432', '#8194bf', '#8199a3', '#819da1', '#81d1c4', '#81e2e6', '#82595d', '#825d27', '#82886e', '#82b9ad', '#82bbc2', '#836d6f', '#838ea2', '#83af9b', '#83d6de', '#83d8b6', '#847858', '#8482a7', '#848b85', '#849fbb', '#84a113', '#84b4bf', '#84ccd1', '#84ccef', '#84e1b1', '#8502d1', '#853870', '#857441', '#85763f', '#85838a', '#859372', '#8598a7', '#85c1e9', '#85d8c8', '#85e2ff', '#8657db', '#867182', '#867198', '#867da5', '#86d9cb', '#876235', '#87766c', '#87e8c6', '#8870ff', '#887777', '#888888', '#88abb2', '#88b2b4', '#88f159', '#897fba', '#89b2bb', '#89d55f', '#8a2d3c', '#8a6b4c', '#8a97c4', '#8a9e70', '#8b4d93', '#8b726b', '#8b8b8b', '#8bb7d9', '#8bcbde', '#8c3b3b', '#8c4248', '#8c7e51', '#8c7f3f', '#8cc7c2', '#8cf2ff', '#8d00d4', '#8d5e66', '#8d6b45', '#8d744d', '#8d8276', '#8d8676', '#8d8b0c', '#8d8f6f', '#8da778', '#8dc0b2', '#8e44ad', '#8e95b1', '#8eb89f', '#8f3fb0', '#8f44ab', '#8f4e11', '#8f6910', '#8f6f40', '#8f934d', '#8f9742', '#8fa8f6', '#8fb1b4', '#904a3b', '#90828f', '#908e88', '#909060', '#909090', '#90a5ba', '#90d2ad', '#913d88', '#916540', '#918e45', '#919140', '#919188', '#91ced7', '#91dff4', '#922f4c', '#9258cb', '#925f2f', '#92787b', '#927fbf', '#92899f', '#929292', '#92d690', '#92dbc7', '#92f22a', '#93734c', '#9374f5', '#93bfb6', '#93ebdd', '#94773d', '#949286', '#953163', '#959ca0', '#95a5a6', '#95c4e8', '#95e7ed', '#962543', '#96281b', '#967648', '#9684a3', '#968d6c', '#969356', '#969c6b', '#969da7', '#96bd86', '#96d4bf', '#973939', '#974b17', '#977bab', '#97b088', '#97c573', '#97ce68', '#98091b', '#981066', '#985004', '#98583f', '#988c8e', '#98a2a4', '#98ad79', '#99005c', '#99a0ff', '#9a12b3', '#9a30dd', '#9a514a', '#9a7bc2', '#9a835a', '#9ab1bf', '#9b5148', '#9b59b6', '#9bacbc', '#9bdbde', '#9c215f', '#9c410a', '#9c7a83', '#9cca82', '#9ce4ff', '#9da5a6', '#9daba2', '#9dc24e', '#9dc400', '#9e1616', '#9e2f72', '#9e373b', '#9e3a52', '#9e3e25', '#9e5428', '#9e58dc', '#9e6c36', '#9e8c02', '#9e8e5a', '#9e8e6a', '#9e906e', '#9e9a96', '#9e9d9b', '#9ea36b', '#9ea97f', '#9f0088', '#9fab5f', '#9fff97', '#a08675', '#a0939a', '#a0a08b', '#a0a0a0', '#a0ab5c', '#a0b58d', '#a0c2c1', '#a0cab5', '#a0da42', '#a0db9b', '#a0f601', '#a14c10', '#a15e5e', '#a18989', '#a19c69', '#a1a09f', '#a1aca0', '#a1ea99', '#a260aa', '#a26829', '#a26d67', '#a29679', '#a29d39', '#a2a2a2', '#a2b2b1', '#a2c648', '#a3310f', '#a3685f', '#a38149', '#a38f84', '#a39951', '#a3b3c0', '#a42a15', '#a4492e', '#a49a87', '#a4c16c', '#a4cf57', '#a4d4e8', '#a55b4a', '#a59897', '#a5abcb', '#a5af4e', '#a5bac3', '#a5cae6', '#a5e65a', '#a64cce', '#a68933', '#a69688', '#a6a501', '#a6b87a', '#a6cd8e', '#a72154', '#a78476', '#a86e3a', '#a88e54', '#a8b273', '#a8bed3', '#a8cd1b', '#a99a01', '#a9a5b6', '#a9b38f', '#a9c5ff', '#a9d3aa', '#aa1f03', '#aa61ce', '#aa8c91', '#aa99ba', '#aaa1eb', '#aaaaaa', '#aab0b2', '#aab69b', '#aad8a3', '#aaec53', '#ab2a2f', '#ab3f3f', '#ab6147', '#ab9752', '#ababab', '#abb2b5', '#abd158', '#abdd55', '#abe0cd', '#abe41b', '#abee4d', '#ac544e', '#ac6a5a', '#ac6dff', '#aca46f', '#acaba0', '#ade1ff', '#ae44c8', '#ae9181', '#ae9e8f', '#aea294', '#aeafa1', '#aeb0b0', '#aeb176', '#aedd46', '#aedde5', '#aee588', '#af7ac4', '#af7f4b', '#afa32d', '#afc87d', '#afd896', '#affca2', '#b05155', '#b05f6d', '#b0a297', '#b0a4be', '#b0bc96', '#b0d31f', '#b0dacc', '#b1215e', '#b17e22', '#b1a08e', '#b1af58', '#b1cfd6', '#b1dcc8', '#b27257', '#b29671', '#b29b8e', '#b2ac94', '#b2c8d6', '#b3005a', '#b30700', '#b30802', '#b32d2e', '#b3bb19', '#b3c5c5', '#b3d5de', '#b43024', '#b43c45', '#b48b8b', '#b491e3', '#b49b05', '#b4b9c3', '#b4c248', '#b51921', '#b52300', '#b583d8', '#b58d2b', '#b5aa4a', '#b5afa2', '#b5b09c', '#b5b192', '#b5dd6f', '#b63165', '#b66e1e', '#b68b84', '#b6c8d1', '#b6e78b', '#b6ff75', '#b72e09', '#b73672', '#b73b7a', '#b76358', '#b7767a', '#b79471', '#b7a460', '#b7b4b6', '#b7b4c5', '#b7c09b', '#b7e20c', '#b7ef9c', '#b7ff5e', '#b86a54', '#b8959b', '#b8b6a6', '#b8b82a', '#b8b89f', '#b8bd20', '#b8ccca', '#b995e9', '#b9a175', '#b9b753', '#b9d907', '#b9ffa1', '#ba4e34', '#ba5445', '#ba870e', '#ba9200', '#ba9c61', '#baad7b', '#bad5f0', '#bada55', '#badeb2', '#bb1f5c', '#bb3658', '#bb4d3e', '#bba900', '#bbb7a4', '#bbbbbd', '#bbffc6', '#bc8657', '#bcbcbc', '#bcd4ac', '#bcff7c', '#bd3c4e', '#bdbfac', '#bdc3c7', '#bde3de', '#bde6f8', '#be7764', '#be8b5c', '#be90d4', '#beae00', '#bed9de', '#bf4a67', '#bf4acc', '#bf8069', '#bf8658', '#bfb095', '#bfb0a3', '#bfb992', '#bfbc8f', '#bfc429', '#bfcc5a', '#bfe6ec', '#c0392b', '#c07800', '#c087c5', '#c0925e', '#c0a878', '#c0b38d', '#c0ba78', '#c0bb89', '#c12a1d', '#c15a2d', '#c1654d', '#c18b4d', '#c1c1c1', '#c1d459', '#c2004e', '#c200bb', '#c25396', '#c26451', '#c2b6d6', '#c2c0cd', '#c2c671', '#c2e0f4', '#c2ed6c', '#c34b4b', '#c3c2a5', '#c3c3b7', '#c3cfa6', '#c3eaf1', '#c4304a', '#c43829', '#c452a0', '#c46e55', '#c4a16b', '#c4a956', '#c4bbf0', '#c4c4c4', '#c4f4eb', '#c52606', '#c5dbca', '#c61357', '#c61c15', '#c6826b', '#c69f90', '#c6aed8', '#c6f0da', '#c71313', '#c74e3e', '#c7852a', '#c79c7a', '#c7c2b5', '#c7c398', '#c7c6c5', '#c7f2ff', '#c7f464', '#c82647', '#c878ab', '#c8c8a9', '#c8cdd2', '#c8d8d8', '#c90053', '#c93746', '#c96614', '#c97131', '#c9c1fe', '#c9c4af', '#c9c7af', '#c9cca9', '#c9cf31', '#c9d1b1', '#c9ecf8', '#c9ffa9', '#ca5f71', '#ca6769', '#ca8d6e', '#cacca9', '#cacead', '#cad26d', '#cb8b33', '#cbc9bb', '#cbe092', '#cbe32d', '#cc0099', '#cc4949', '#cc5094', '#cc666e', '#cc9194', '#cc9766', '#cc9a70', '#cca486', '#ccbb87', '#ccbf35', '#ccbfbe', '#cccccc', '#ccdfcc', '#ccebc0', '#cd1a38', '#cd3e52', '#cd6b97', '#cd844d', '#cd9c64', '#cdae80', '#cdc99f', '#cdcba6', '#ce4847', '#ce7d16', '#ce8948', '#ce9d27', '#ceaba5', '#cebca8', '#cebcb2', '#cebeff', '#cec6cf', '#ceccde', '#cecece', '#ceeb43', '#cf000f', '#cf352b', '#cf6548', '#cf6991', '#cf6fd0', '#cfa561', '#cff1d1', '#d01132', '#d0402f', '#d04e33', '#d06619', '#d0cfcf', '#d0d0d0', '#d0d168', '#d0e5d5', '#d10b0b', '#d14841', '#d15406', '#d1894d', '#d19254', '#d1a79b', '#d1aa7f', '#d1cd8e', '#d1ce97', '#d1d5d8', '#d1d6a9', '#d1e0a6', '#d1e7b9', '#d2580f', '#d28e81', '#d2baa2', '#d2d7d3', '#d2e8ec', '#d33257', '#d35400', '#d3ca52', '#d3ced8', '#d3d1ad', '#d3e6be', '#d3e9ba', '#d3ebb2', '#d41568', '#d44658', '#d44a59', '#d46b5b', '#d4908f', '#d49b74', '#d4af61', '#d4bebc', '#d4bf21', '#d4c6c6', '#d4cd9d', '#d4d4d4', '#d4dbc8', '#d55b06', '#d5c190', '#d5d1d2', '#d64541', '#d6523c', '#d67424', '#d6786b', '#d6976b', '#d69942', '#d6b387', '#d6bfa5', '#d6c0ce', '#d6ca8b', '#d6d6d6', '#d6dac2', '#d6dbdf', '#d6e2ce', '#d6f7fc', '#d6ffe8', '#d71a75', '#d76e93', '#d79535', '#d7c6ab', '#d81830', '#d8335b', '#d8a9a1', '#d8b133', '#d8d9de', '#d8e1e8', '#d8e2ec', '#d8ffc2', '#d95058', '#d95062', '#d96200', '#d96659', '#d98b3a', '#d9940b', '#d9983e', '#d99f7e', '#d9b17e', '#d9bbae', '#d9be93', '#d9c46a', '#d9c6b5', '#d9cacf', '#d9cb84', '#d9cec7', '#d9cf7e', '#d9d2ec', '#d9d4cb', '#d9d7cc', '#d9dd5f', '#d9f5be', '#da8254', '#daa1ad', '#dac897', '#dacdb6', '#dadada', '#dae7d0', '#dae9bd', '#daf9ff', '#db0304', '#db15ba', '#db78ac', '#db8114', '#db8d17', '#db9971', '#db9c38', '#dbaa16', '#dbc2a4', '#dbcb8e', '#dbccad', '#dbd820', '#dbd880', '#dbdbe8', '#dbe5e6', '#dbfcd6', '#dc626f', '#dc6b7c', '#dc9855', '#dcb4a8', '#dcc5e8', '#dcce5f', '#dcdcd4', '#dcdde0', '#dce3c9', '#dd5317', '#dd5f91', '#dd6f47', '#dd9949', '#ddb68b', '#dde6d6', '#ddecd2', '#ddf075', '#de2e38', '#de3c3c', '#de633a', '#de8d3c', '#de9331', '#dea32c', '#deb48a', '#debaac', '#debbb8', '#dec89e', '#decea3', '#ded1fc', '#ded410', '#ded7e6', '#ded8d3', '#dee1bd', '#def4e4', '#df4e0f', '#df554f', '#df82ac', '#dfb7ad', '#dfdfd0', '#dfe4e8', '#e01931', '#e0378a', '#e08267', '#e0af87', '#e0b05d', '#e0c3a5', '#e0c3b5', '#e0ce64', '#e0d5b2', '#e0e4cc', '#e0e7a4', '#e13b39', '#e15951', '#e1b493', '#e1bdbd', '#e1e0b2', '#e1f2f9', '#e1fafc', '#e1ffb0', '#e22211', '#e24c3f', '#e26688', '#e26868', '#e26e67', '#e27e1c', '#e2999f', '#e2a743', '#e2ae80', '#e2bccf', '#e2d6be', '#e2dbbc', '#e2e2e2', '#e2e770', '#e2eea4', '#e2f224', '#e3000e', '#e32f6c', '#e35252', '#e36363', '#e36937', '#e38b73', '#e3b445', '#e3b863', '#e3b9b6', '#e3c39d', '#e3d081', '#e3d2b8', '#e3e3e3', '#e3e7b1', '#e3e8fa', '#e3eeff', '#e47361', '#e4b6a6', '#e4c831', '#e4dfdc', '#e4dfdf', '#e4e4e4', '#e4f4bd', '#e5100b', '#e51a31', '#e56996', '#e5e0b7', '#e5e5e5', '#e5fe03', '#e5fff2', '#e60501', '#e63054', '#e63e6d', '#e64c65', '#e6567a', '#e65c9e', '#e66229', '#e66a39', '#e67e22', '#e6868e', '#e69896', '#e6c3af', '#e6c3c1', '#e6dc29', '#e6dcdb', '#e6ddb4', '#e6e8e1', '#e6ebb8', '#e6ecec', '#e6f0ed', '#e6f4fa', '#e6f644', '#e72c28', '#e74c3c', '#e75926', '#e76037', '#e76b6b', '#e7cb50', '#e7df86', '#e7e7de', '#e7e7e7', '#e7f1cf', '#e7f76d', '#e8253d', '#e8383b', '#e83d38', '#e84b3c', '#e84e11', '#e87d4f', '#e87e04', '#e8bbb7', '#e8bf79', '#e8cf57', '#e8db52', '#e8e8e8', '#e8f4fa', '#e8ffff', '#e91818', '#e95933', '#e9624f', '#e98b39', '#e9bda4', '#e9ceac', '#e9dbc2', '#e9e9e9', '#ea5b4d', '#eac4bb', '#eae3c5', '#eae7d7', '#eaeaea', '#eaebd9', '#eaf2bb', '#eaff99', '#eb4549', '#eb5055', '#eb524a', '#eb6361', '#eb6b56', '#eb7565', '#eb9532', '#eb9605', '#ebbd63', '#ebc313', '#ebc7ca', '#ebcb94', '#ebcebe', '#ebdab2', '#ebdbd0', '#ebe1e2', '#ebe7e4', '#ebebeb', '#ebece7', '#ebf680', '#ec3013', '#ec555c', '#ec5b5b', '#ec6625', '#ecb053', '#ecd2e1', '#ecdaaf', '#ece1d2', '#ece653', '#ececec', '#eceef1', '#ecefa9', '#ecf0f1', '#ecf2c7', '#ed4e4e', '#ed5784', '#ed939d', '#ed9e4e', '#edad20', '#edb70d', '#edbab7', '#edd834', '#ede0fb', '#ede8d4', '#ededed', '#edf2f3', '#edf9ff', '#ee163b', '#ee1c25', '#ee3a43', '#ee543a', '#ee5f5b', '#ee6b48', '#ee7469', '#ee7546', '#eec3d6', '#eed0b8', '#eee657', '#eeeeee', '#eef9ff', '#eeff6b', '#ef4836', '#ef5252', '#ef5c54', '#ef632c', '#ef9033', '#ef9688', '#ef9f38', '#efbda0', '#efdb0d', '#efe0b1', '#efece7', '#eff4e4', '#eff7e0', '#f03000', '#f0340f', '#f04830', '#f04903', '#f05430', '#f06050', '#f0638b', '#f07818', '#f0856f', '#f08d9a', '#f0a703', '#f0a830', '#f0b799', '#f0c0ac', '#f0c2c2', '#f0d1b4', '#f0d8a8', '#f0edd5', '#f0eee7', '#f0efe8', '#f0f0c0', '#f0f0f0', '#f0f1f5', '#f0f3f3', '#f0f5f0', '#f0f871', '#f0ffd6', '#f10e29', '#f1654c', '#f18260', '#f1a49f', '#f1aa74', '#f1c210', '#f1c40f', '#f1d611', '#f1ecc8', '#f1edee', '#f1f0b3', '#f24130', '#f24d16', '#f2784b', '#f27935', '#f29b34', '#f2b20f', '#f2b6bf', '#f2bb13', '#f2bdb8', '#f2be55', '#f2be7b', '#f2d1be', '#f2e4f9', '#f2ebc9', '#f2f1ef', '#f2f2f2', '#f2f3ed', '#f2f8ea', '#f2f9ff', '#f31d2f', '#f32c33', '#f3707b', '#f38360', '#f38a8a', '#f39c12', '#f39c15', '#f3a929', '#f3c40f', '#f3c9bf', '#f3d06a', '#f3d646', '#f3d89f', '#f3e6e6', '#f3eecc', '#f3f2f0', '#f3f4ea', '#f4998a', '#f4a236', '#f4bb10', '#f4d35d', '#f4d4bd', '#f4d6a0', '#f4e4d1', '#f4e6e8', '#f4ebc1', '#f4edf6', '#f4f1e1', '#f4f5d6', '#f4ffe0', '#f54f37', '#f54f53', '#f57979', '#f58f4b', '#f59500', '#f59b69', '#f5ae22', '#f5c0b5', '#f5c16d', '#f5c700', '#f5cd3c', '#f5eded', '#f5f1ed', '#f5f5f5', '#f5fef4', '#f62459', '#f66256', '#f67a47', '#f67b7e', '#f67e7d', '#f69c00', '#f6a011', '#f6a186', '#f6cd61', '#f6d9d5', '#f6e0d3', '#f6eda2', '#f6efdf', '#f6f186', '#f6f7f2', '#f6fae8', '#f6ffde', '#f72040', '#f73e2d', '#f75959', '#f76539', '#f76863', '#f79885', '#f7a327', '#f7a3a2', '#f7a5a7', '#f7b881', '#f7ba92', '#f7bc05', '#f7ca18', '#f7cd1f', '#f7d00d', '#f7d6b5', '#f7d93b', '#f7e3ba', '#f7e5bd', '#f7e8d3', '#f7e999', '#f7ee84', '#f7f5f6', '#f7f7e9', '#f7ff0c', '#f84902', '#f85066', '#f87a00', '#f89406', '#f89538', '#f896a6', '#f89a29', '#f8a52f', '#f8a8b5', '#f8b7b1', '#f8bc86', '#f8bd97', '#f8c0c0', '#f8c63c', '#f8cac1', '#f8cca7', '#f8d347', '#f8d474', '#f8d9d5', '#f8e8b5', '#f8eeee', '#f8f1cf', '#f8f2e2', '#f8f3eb', '#f8f483', '#f8f8f8', '#f8f9fb', '#f8fcff', '#f9ae74', '#f9b32a', '#f9bf3b', '#f9d71d', '#f9e5c2', '#f9edd7', '#f9f8e4', '#f9f9f9', '#f9fa67', '#f9fadd', '#f9fdff', '#f9ffe5', '#fa4228', '#fa4f1d', '#fa6367', '#fa6767', '#fa67f1', '#fa7535', '#fa9090', '#fa9749', '#faa5ad', '#fab335', '#fabfa1', '#faca9b', '#fad203', '#fadaa3', '#faf6e3', '#faf7e9', '#faffe6', '#fb6868', '#fb9399', '#fbcf76', '#fbd6cc', '#fbfdf2', '#fc575e', '#fc6042', '#fc6264', '#fc6a1f', '#fc9d9a', '#fca65f', '#fcab54', '#fcab7b', '#fcb410', '#fcb941', '#fcbdb4', '#fccec9', '#fccf26', '#fcd6f7', '#fcd7d6', '#fcd8c2', '#fce49b', '#fceb53', '#fcebb6', '#fcecc9', '#fcf7d1', '#fcf9d6', '#fcfcff', '#fd1254', '#fd2323', '#fd5823', '#fd5b03', '#fd7150', '#fd7223', '#fd8943', '#fd8f04', '#fd9643', '#fda006', '#fdc26e', '#fdc5ce', '#fdcac7', '#fdd000', '#fdd09f', '#fde1f7', '#fde3a7', '#fdfdfd', '#fe0089', '#fe3f2d', '#fe4365', '#fe4e50', '#fe5a05', '#fe6860', '#fe8a71', '#fe8c19', '#febea8', '#fec34e', '#fec606', '#fedb1d', '#feeaa8', '#fef0d6', '#fefcff', '#fefefe', '#feffd1', '#feffff', '#ff0024', '#ff0d90', '#ff3209', '#ff4444', '#ff4545', '#ff4c43', '#ff520f', '#ff574f', '#ff5900', '#ff592f', '#ff5a1e', '#ff5d19', '#ff6249', '#ff6565', '#ff6666', '#ff6766', '#ff6861', '#ff6a00', '#ff6b66', '#ff6b6e', '#ff6b7e', '#ff6c60', '#ff6e6e', '#ff7055', '#ff7300', '#ff7416', '#ff7676', '#ff770b', '#ff7878', '#ff789e', '#ff7b2c', '#ff7e55', '#ff7f5f', '#ff80bd', '#ff8286', '#ff8600', '#ff8758', '#ff8b55', '#ff8f17', '#ff9696', '#ff9999', '#ff9e17', '#ff9f55', '#ffa549', '#ffa75e', '#ffab78', '#ffad00', '#ffadad', '#ffae8c', '#ffaf5a', '#ffb133', '#ffb300', '#ffb366', '#ffb4a5', '#ffb5a6', '#ffb64f', '#ffb836', '#ffb866', '#ffbfbf', '#ffc153', '#ffc175', '#ffc23c', '#ffc629', '#ffc642', '#ffc800', '#ffc8a6', '#ffca0c', '#ffcc00', '#ffcc99', '#ffcccc', '#ffce8f', '#ffceb5', '#ffcf00', '#ffd073', '#ffd074', '#ffd08d', '#ffd380', '#ffd4be', '#ffd591', '#ffd699', '#ffd6d0', '#ffd73c', '#ffd893', '#ffd91e', '#ffda0c', '#ffdd00', '#ffde49', '#ffe09c', '#ffe0e5', '#ffe1ae', '#ffe3d0', '#ffe4d5', '#ffe4d9', '#ffe6cc', '#ffe7c1', '#ffe9dc', '#ffeddf', '#ffee29', '#ffeeca', '#ffeed2', '#ffefd8', '#fff0d6', '#fff0f2', '#fff172', '#fff1db', '#fff3d4', '#fff457', '#fff5d5', '#fff899', '#fff9a3', '#fffaa6', '#fffbcc', '#fffc52', '#fffcd6', '#fffce6', '#fffcf5', '#fffef5', '#ffffd6', '#fffff7'];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _replace = __webpack_require__(3);
	
	var _replace2 = _interopRequireDefault(_replace);
	
	var _forEach = __webpack_require__(11);
	
	var _forEach2 = _interopRequireDefault(_forEach);
	
	var _shuffle = __webpack_require__(37);
	
	var _shuffle2 = _interopRequireDefault(_shuffle);
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _fs = __webpack_require__(59);
	
	var fs_ = _interopRequireWildcard(_fs);
	
	var _path = __webpack_require__(60);
	
	var path_ = _interopRequireWildcard(_path);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var HtmlExport = function () {
	  function HtmlExport(colors) {
	    _classCallCheck(this, HtmlExport);
	
	    this.colors = (0, _shuffle2.default)(colors);
	    this.skeletonFile = path_.resolve(path_.dirname(__filename), '..', 'data/skeleton.html');
	    this.buildDir = path_.join(process.cwd(), 'flatcolors');
	    this.skeletonHtmlContent = '';
	    this.colorHtmlContent = '';
	    this.readFile();
	  }
	
	  _createClass(HtmlExport, [{
	    key: 'readFile',
	    value: function readFile() {
	      this.skeletonHtmlContent = fs_.readFileSync(this.skeletonFile, {
	        encoding: 'utf8'
	      });
	    }
	  }, {
	    key: 'createFile',
	    value: function createFile(filename) {
	      if (!fs_.existsSync(this.buildDir)) {
	        fs_.mkdirSync(this.buildDir);
	      }
	      var buildFile = path_.join(this.buildDir, filename + '.html');
	      var colorHtmlContent = '';
	      (0, _forEach2.default)(this.colors, function (color) {
	        colorHtmlContent = colorHtmlContent + '<div class="color"><span style="background:' + color + '" class="color-demo"></span><span class="color-name">' + color + '</span></div>';
	      });
	      var content = (0, _replace2.default)(this.skeletonHtmlContent, '--content--', colorHtmlContent);
	      fs_.writeFileSync(buildFile, content);
	      return buildFile;
	    }
	  }, {
	    key: 'html',
	    value: function html() {
	      var filename = arguments.length <= 0 || arguments[0] === undefined ? 'flatuicolors' : arguments[0];
	
	      return this.createFile(filename);
	    }
	  }]);
	
	  return HtmlExport;
	}();
	
	exports.default = HtmlExport;
	;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var toString = __webpack_require__(4);
	
	/**
	 * Replaces matches for `pattern` in `string` with `replacement`.
	 *
	 * **Note:** This method is based on [`String#replace`](https://mdn.io/String/replace).
	 *
	 * @static
	 * @memberOf _
	 * @category String
	 * @param {string} [string=''] The string to modify.
	 * @param {RegExp|string} pattern The pattern to replace.
	 * @param {Function|string} replacement The match replacement.
	 * @returns {string} Returns the modified string.
	 * @example
	 *
	 * _.replace('Hi Fred', 'Fred', 'Barney');
	 * // => 'Hi Barney'
	 */
	function replace() {
	  var args = arguments,
	      string = toString(args[0]);
	
	  return args.length < 3 ? string : string.replace(args[1], args[2]);
	}
	
	module.exports = replace;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(5),
	    isSymbol = __webpack_require__(9);
	
	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;
	
	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolToString = Symbol ? symbolProto.toString : undefined;
	
	/**
	 * Converts `value` to a string if it's not one. An empty string is returned
	 * for `null` and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 * @example
	 *
	 * _.toString(null);
	 * // => ''
	 *
	 * _.toString(-0);
	 * // => '-0'
	 *
	 * _.toString([1, 2, 3]);
	 * // => '1,2,3'
	 */
	function toString(value) {
	  // Exit early for strings to avoid a performance hit in some environments.
	  if (typeof value == 'string') {
	    return value;
	  }
	  if (value == null) {
	    return '';
	  }
	  if (isSymbol(value)) {
	    return Symbol ? symbolToString.call(value) : '';
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}
	
	module.exports = toString;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(6);
	
	/** Built-in value references. */
	var Symbol = root.Symbol;
	
	module.exports = Symbol;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var checkGlobal = __webpack_require__(8);
	
	/** Used to determine if values are of the language type `Object`. */
	var objectTypes = {
	  'function': true,
	  'object': true
	};
	
	/** Detect free variable `exports`. */
	var freeExports = (objectTypes[typeof exports] && exports && !exports.nodeType) ? exports : null;
	
	/** Detect free variable `module`. */
	var freeModule = (objectTypes[typeof module] && module && !module.nodeType) ? module : null;
	
	/** Detect free variable `global` from Node.js. */
	var freeGlobal = checkGlobal(freeExports && freeModule && typeof global == 'object' && global);
	
	/** Detect free variable `self`. */
	var freeSelf = checkGlobal(objectTypes[typeof self] && self);
	
	/** Detect free variable `window`. */
	var freeWindow = checkGlobal(objectTypes[typeof window] && window);
	
	/** Detect `this` as the global object. */
	var thisGlobal = checkGlobal(objectTypes[typeof this] && this);
	
	/**
	 * Used as a reference to the global object.
	 *
	 * The `this` value is used if it's the global object to avoid Greasemonkey's
	 * restricted `window` object, otherwise the `window` object is used.
	 */
	var root = freeGlobal || ((freeWindow !== (thisGlobal && thisGlobal.window)) && freeWindow) || freeSelf || thisGlobal || Function('return this')();
	
	module.exports = root;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module)))

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 8 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is a global object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {null|Object} Returns `value` if it's a global object, else `null`.
	 */
	function checkGlobal(value) {
	  return (value && value.Object === Object) ? value : null;
	}
	
	module.exports = checkGlobal;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var isObjectLike = __webpack_require__(10);
	
	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && objectToString.call(value) == symbolTag);
	}
	
	module.exports = isSymbol;


/***/ },
/* 10 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	module.exports = isObjectLike;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var arrayEach = __webpack_require__(12),
	    baseEach = __webpack_require__(13),
	    isArray = __webpack_require__(30),
	    toFunction = __webpack_require__(35);
	
	/**
	 * Iterates over elements of `collection` invoking `iteratee` for each element.
	 * The iteratee is invoked with three arguments: (value, index|key, collection).
	 * Iteratee functions may exit iteration early by explicitly returning `false`.
	 *
	 * **Note:** As with other "Collections" methods, objects with a "length" property
	 * are iterated like arrays. To avoid this behavior use `_.forIn` or `_.forOwn`
	 * for object iteration.
	 *
	 * @static
	 * @memberOf _
	 * @alias each
	 * @category Collection
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	 * @returns {Array|Object} Returns `collection`.
	 * @example
	 *
	 * _([1, 2]).forEach(function(value) {
	 *   console.log(value);
	 * });
	 * // => logs `1` then `2`
	 *
	 * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
	 *   console.log(key);
	 * });
	 * // => logs 'a' then 'b' (iteration order is not guaranteed)
	 */
	function forEach(collection, iteratee) {
	  return (typeof iteratee == 'function' && isArray(collection))
	    ? arrayEach(collection, iteratee)
	    : baseEach(collection, toFunction(iteratee));
	}
	
	module.exports = forEach;


/***/ },
/* 12 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.forEach` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns `array`.
	 */
	function arrayEach(array, iteratee) {
	  var index = -1,
	      length = array.length;
	
	  while (++index < length) {
	    if (iteratee(array[index], index, array) === false) {
	      break;
	    }
	  }
	  return array;
	}
	
	module.exports = arrayEach;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var baseForOwn = __webpack_require__(14),
	    createBaseEach = __webpack_require__(34);
	
	/**
	 * The base implementation of `_.forEach` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array|Object} Returns `collection`.
	 */
	var baseEach = createBaseEach(baseForOwn);
	
	module.exports = baseEach;


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var baseFor = __webpack_require__(15),
	    keys = __webpack_require__(17);
	
	/**
	 * The base implementation of `_.forOwn` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Object} Returns `object`.
	 */
	function baseForOwn(object, iteratee) {
	  return object && baseFor(object, iteratee, keys);
	}
	
	module.exports = baseForOwn;


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var createBaseFor = __webpack_require__(16);
	
	/**
	 * The base implementation of `baseForIn` and `baseForOwn` which iterates
	 * over `object` properties returned by `keysFunc` invoking `iteratee` for
	 * each property. Iteratee functions may exit iteration early by explicitly
	 * returning `false`.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @returns {Object} Returns `object`.
	 */
	var baseFor = createBaseFor();
	
	module.exports = baseFor;


/***/ },
/* 16 */
/***/ function(module, exports) {

	/**
	 * Creates a base function for methods like `_.forIn`.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseFor(fromRight) {
	  return function(object, iteratee, keysFunc) {
	    var index = -1,
	        iterable = Object(object),
	        props = keysFunc(object),
	        length = props.length;
	
	    while (length--) {
	      var key = props[fromRight ? length : ++index];
	      if (iteratee(iterable[key], key, iterable) === false) {
	        break;
	      }
	    }
	    return object;
	  };
	}
	
	module.exports = createBaseFor;


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var baseHas = __webpack_require__(18),
	    baseKeys = __webpack_require__(19),
	    indexKeys = __webpack_require__(20),
	    isArrayLike = __webpack_require__(24),
	    isIndex = __webpack_require__(32),
	    isPrototype = __webpack_require__(33);
	
	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  var isProto = isPrototype(object);
	  if (!(isProto || isArrayLike(object))) {
	    return baseKeys(object);
	  }
	  var indexes = indexKeys(object),
	      skipIndexes = !!indexes,
	      result = indexes || [],
	      length = result.length;
	
	  for (var key in object) {
	    if (baseHas(object, key) &&
	        !(skipIndexes && (key == 'length' || isIndex(key, length))) &&
	        !(isProto && key == 'constructor')) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = keys;


/***/ },
/* 18 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Built-in value references. */
	var getPrototypeOf = Object.getPrototypeOf;
	
	/**
	 * The base implementation of `_.has` without support for deep paths.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} key The key to check.
	 * @returns {boolean} Returns `true` if `key` exists, else `false`.
	 */
	function baseHas(object, key) {
	  // Avoid a bug in IE 10-11 where objects with a [[Prototype]] of `null`,
	  // that are composed entirely of index properties, return `false` for
	  // `hasOwnProperty` checks of them.
	  return hasOwnProperty.call(object, key) ||
	    (typeof object == 'object' && key in object && getPrototypeOf(object) === null);
	}
	
	module.exports = baseHas;


/***/ },
/* 19 */
/***/ function(module, exports) {

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = Object.keys;
	
	/**
	 * The base implementation of `_.keys` which doesn't skip the constructor
	 * property of prototypes or treat sparse arrays as dense.
	 *
	 * @private
	 * @type Function
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  return nativeKeys(Object(object));
	}
	
	module.exports = baseKeys;


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var baseTimes = __webpack_require__(21),
	    isArguments = __webpack_require__(22),
	    isArray = __webpack_require__(30),
	    isLength = __webpack_require__(29),
	    isString = __webpack_require__(31);
	
	/**
	 * Creates an array of index keys for `object` values of arrays,
	 * `arguments` objects, and strings, otherwise `null` is returned.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array|null} Returns index keys, else `null`.
	 */
	function indexKeys(object) {
	  var length = object ? object.length : undefined;
	  if (isLength(length) &&
	      (isArray(object) || isString(object) || isArguments(object))) {
	    return baseTimes(length, String);
	  }
	  return null;
	}
	
	module.exports = indexKeys;


/***/ },
/* 21 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);
	
	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}
	
	module.exports = baseTimes;


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLikeObject = __webpack_require__(23);
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;
	
	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  // Safari 8.1 incorrectly makes `arguments.callee` enumerable in strict mode.
	  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
	    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
	}
	
	module.exports = isArguments;


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(24),
	    isObjectLike = __webpack_require__(10);
	
	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @type Function
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object, else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}
	
	module.exports = isArrayLikeObject;


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var getLength = __webpack_require__(25),
	    isFunction = __webpack_require__(27),
	    isLength = __webpack_require__(29);
	
	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @type Function
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null &&
	    !(typeof value == 'function' && isFunction(value)) && isLength(getLength(value));
	}
	
	module.exports = isArrayLike;


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(26);
	
	/**
	 * Gets the "length" property value of `object`.
	 *
	 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
	 * that affects Safari on at least iOS 8.1-8.3 ARM64.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {*} Returns the "length" value.
	 */
	var getLength = baseProperty('length');
	
	module.exports = getLength;


/***/ },
/* 26 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}
	
	module.exports = baseProperty;


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(28);
	
	/** `Object#toString` result references. */
	var funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8 which returns 'object' for typed array constructors, and
	  // PhantomJS 1.9 which returns 'function' for `NodeList` instances.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}
	
	module.exports = isFunction;


/***/ },
/* 28 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	module.exports = isObject;


/***/ },
/* 29 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is loosely based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	module.exports = isLength;


/***/ },
/* 30 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @type Function
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;
	
	module.exports = isArray;


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(30),
	    isObjectLike = __webpack_require__(10);
	
	/** `Object#toString` result references. */
	var stringTag = '[object String]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/**
	 * Checks if `value` is classified as a `String` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isString('abc');
	 * // => true
	 *
	 * _.isString(1);
	 * // => false
	 */
	function isString(value) {
	  return typeof value == 'string' ||
	    (!isArray(value) && isObjectLike(value) && objectToString.call(value) == stringTag);
	}
	
	module.exports = isString;


/***/ },
/* 32 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;
	
	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return value > -1 && value % 1 == 0 && value < length;
	}
	
	module.exports = isIndex;


/***/ },
/* 33 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;
	
	  return value === proto;
	}
	
	module.exports = isPrototype;


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(24);
	
	/**
	 * Creates a `baseEach` or `baseEachRight` function.
	 *
	 * @private
	 * @param {Function} eachFunc The function to iterate over a collection.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseEach(eachFunc, fromRight) {
	  return function(collection, iteratee) {
	    if (collection == null) {
	      return collection;
	    }
	    if (!isArrayLike(collection)) {
	      return eachFunc(collection, iteratee);
	    }
	    var length = collection.length,
	        index = fromRight ? length : -1,
	        iterable = Object(collection);
	
	    while ((fromRight ? index-- : ++index < length)) {
	      if (iteratee(iterable[index], index, iterable) === false) {
	        break;
	      }
	    }
	    return collection;
	  };
	}
	
	module.exports = createBaseEach;


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var identity = __webpack_require__(36);
	
	/**
	 * Converts `value` to a function if it's not one.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {Function} Returns the function.
	 */
	function toFunction(value) {
	  return typeof value == 'function' ? value : identity;
	}
	
	module.exports = toFunction;


/***/ },
/* 36 */
/***/ function(module, exports) {

	/**
	 * This method returns the first argument given to it.
	 *
	 * @static
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'user': 'fred' };
	 *
	 * _.identity(object) === object;
	 * // => true
	 */
	function identity(value) {
	  return value;
	}
	
	module.exports = identity;


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var sampleSize = __webpack_require__(38);
	
	/** Used as references for the maximum length and index of an array. */
	var MAX_ARRAY_LENGTH = 4294967295;
	
	/**
	 * Creates an array of shuffled values, using a version of the
	 * [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
	 *
	 * @static
	 * @memberOf _
	 * @category Collection
	 * @param {Array|Object} collection The collection to shuffle.
	 * @returns {Array} Returns the new shuffled array.
	 * @example
	 *
	 * _.shuffle([1, 2, 3, 4]);
	 * // => [4, 1, 3, 2]
	 */
	function shuffle(collection) {
	  return sampleSize(collection, MAX_ARRAY_LENGTH);
	}
	
	module.exports = shuffle;


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var baseClamp = __webpack_require__(39),
	    baseRandom = __webpack_require__(40),
	    toArray = __webpack_require__(41),
	    toInteger = __webpack_require__(57);
	
	/**
	 * Gets `n` random elements at unique keys from `collection` up to the
	 * size of `collection`.
	 *
	 * @static
	 * @memberOf _
	 * @category Collection
	 * @param {Array|Object} collection The collection to sample.
	 * @param {number} [n=0] The number of elements to sample.
	 * @returns {Array} Returns the random elements.
	 * @example
	 *
	 * _.sampleSize([1, 2, 3], 2);
	 * // => [3, 1]
	 *
	 * _.sampleSize([1, 2, 3], 4);
	 * // => [2, 3, 1]
	 */
	function sampleSize(collection, n) {
	  var index = -1,
	      result = toArray(collection),
	      length = result.length,
	      lastIndex = length - 1;
	
	  n = baseClamp(toInteger(n), 0, length);
	  while (++index < n) {
	    var rand = baseRandom(index, lastIndex),
	        value = result[rand];
	
	    result[rand] = result[index];
	    result[index] = value;
	  }
	  result.length = n;
	  return result;
	}
	
	module.exports = sampleSize;


/***/ },
/* 39 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.clamp` which doesn't coerce arguments to numbers.
	 *
	 * @private
	 * @param {number} number The number to clamp.
	 * @param {number} [lower] The lower bound.
	 * @param {number} upper The upper bound.
	 * @returns {number} Returns the clamped number.
	 */
	function baseClamp(number, lower, upper) {
	  if (number === number) {
	    if (upper !== undefined) {
	      number = number <= upper ? number : upper;
	    }
	    if (lower !== undefined) {
	      number = number >= lower ? number : lower;
	    }
	  }
	  return number;
	}
	
	module.exports = baseClamp;


/***/ },
/* 40 */
/***/ function(module, exports) {

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeFloor = Math.floor,
	    nativeRandom = Math.random;
	
	/**
	 * The base implementation of `_.random` without support for returning
	 * floating-point numbers.
	 *
	 * @private
	 * @param {number} lower The lower bound.
	 * @param {number} upper The upper bound.
	 * @returns {number} Returns the random number.
	 */
	function baseRandom(lower, upper) {
	  return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
	}
	
	module.exports = baseRandom;


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(5),
	    copyArray = __webpack_require__(42),
	    getTag = __webpack_require__(43),
	    isArrayLike = __webpack_require__(24),
	    isString = __webpack_require__(31),
	    iteratorToArray = __webpack_require__(50),
	    mapToArray = __webpack_require__(51),
	    setToArray = __webpack_require__(52),
	    stringToArray = __webpack_require__(53),
	    values = __webpack_require__(54);
	
	/** `Object#toString` result references. */
	var mapTag = '[object Map]',
	    setTag = '[object Set]';
	
	/** Built-in value references. */
	var iteratorSymbol = typeof (iteratorSymbol = Symbol && Symbol.iterator) == 'symbol' ? iteratorSymbol : undefined;
	
	/**
	 * Converts `value` to an array.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {Array} Returns the converted array.
	 * @example
	 *
	 * _.toArray({ 'a': 1, 'b': 2 });
	 * // => [1, 2]
	 *
	 * _.toArray('abc');
	 * // => ['a', 'b', 'c']
	 *
	 * _.toArray(1);
	 * // => []
	 *
	 * _.toArray(null);
	 * // => []
	 */
	function toArray(value) {
	  if (!value) {
	    return [];
	  }
	  if (isArrayLike(value)) {
	    return isString(value) ? stringToArray(value) : copyArray(value);
	  }
	  if (iteratorSymbol && value[iteratorSymbol]) {
	    return iteratorToArray(value[iteratorSymbol]());
	  }
	  var tag = getTag(value),
	      func = tag == mapTag ? mapToArray : (tag == setTag ? setToArray : values);
	
	  return func(value);
	}
	
	module.exports = toArray;


/***/ },
/* 42 */
/***/ function(module, exports) {

	/**
	 * Copies the values of `source` to `array`.
	 *
	 * @private
	 * @param {Array} source The array to copy values from.
	 * @param {Array} [array=[]] The array to copy values to.
	 * @returns {Array} Returns `array`.
	 */
	function copyArray(source, array) {
	  var index = -1,
	      length = source.length;
	
	  array || (array = Array(length));
	  while (++index < length) {
	    array[index] = source[index];
	  }
	  return array;
	}
	
	module.exports = copyArray;


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var Map = __webpack_require__(44),
	    Set = __webpack_require__(48),
	    WeakMap = __webpack_require__(49);
	
	/** `Object#toString` result references. */
	var mapTag = '[object Map]',
	    objectTag = '[object Object]',
	    setTag = '[object Set]',
	    weakMapTag = '[object WeakMap]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var funcToString = Function.prototype.toString;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/** Used to detect maps, sets, and weakmaps. */
	var mapCtorString = Map ? funcToString.call(Map) : '',
	    setCtorString = Set ? funcToString.call(Set) : '',
	    weakMapCtorString = WeakMap ? funcToString.call(WeakMap) : '';
	
	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function getTag(value) {
	  return objectToString.call(value);
	}
	
	// Fallback for IE 11 providing `toStringTag` values for maps, sets, and weakmaps.
	if ((Map && getTag(new Map) != mapTag) ||
	    (Set && getTag(new Set) != setTag) ||
	    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
	  getTag = function(value) {
	    var result = objectToString.call(value),
	        Ctor = result == objectTag ? value.constructor : null,
	        ctorString = typeof Ctor == 'function' ? funcToString.call(Ctor) : '';
	
	    if (ctorString) {
	      switch (ctorString) {
	        case mapCtorString: return mapTag;
	        case setCtorString: return setTag;
	        case weakMapCtorString: return weakMapTag;
	      }
	    }
	    return result;
	  };
	}
	
	module.exports = getTag;


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(45),
	    root = __webpack_require__(6);
	
	/* Built-in method references that are verified to be native. */
	var Map = getNative(root, 'Map');
	
	module.exports = Map;


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var isNative = __webpack_require__(46);
	
	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = object == null ? undefined : object[key];
	  return isNative(value) ? value : undefined;
	}
	
	module.exports = getNative;


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(27),
	    isHostObject = __webpack_require__(47),
	    isObjectLike = __webpack_require__(10);
	
	/** Used to match `RegExp` [syntax characters](http://ecma-international.org/ecma-262/6.0/#sec-patterns). */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
	
	/** Used to detect host constructors (Safari > 5). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var funcToString = Function.prototype.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);
	
	/**
	 * Checks if `value` is a native function.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
	 * @example
	 *
	 * _.isNative(Array.prototype.push);
	 * // => true
	 *
	 * _.isNative(_);
	 * // => false
	 */
	function isNative(value) {
	  if (value == null) {
	    return false;
	  }
	  if (isFunction(value)) {
	    return reIsNative.test(funcToString.call(value));
	  }
	  return isObjectLike(value) &&
	    (isHostObject(value) ? reIsNative : reIsHostCtor).test(value);
	}
	
	module.exports = isNative;


/***/ },
/* 47 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is a host object in IE < 9.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
	 */
	function isHostObject(value) {
	  // Many host objects are `Object` objects that can coerce to strings
	  // despite having improperly defined `toString` methods.
	  var result = false;
	  if (value != null && typeof value.toString != 'function') {
	    try {
	      result = !!(value + '');
	    } catch (e) {}
	  }
	  return result;
	}
	
	module.exports = isHostObject;


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(45),
	    root = __webpack_require__(6);
	
	/* Built-in method references that are verified to be native. */
	var Set = getNative(root, 'Set');
	
	module.exports = Set;


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(45),
	    root = __webpack_require__(6);
	
	/* Built-in method references that are verified to be native. */
	var WeakMap = getNative(root, 'WeakMap');
	
	module.exports = WeakMap;


/***/ },
/* 50 */
/***/ function(module, exports) {

	/**
	 * Converts `iterator` to an array.
	 *
	 * @private
	 * @param {Object} iterator The iterator to convert.
	 * @returns {Array} Returns the converted array.
	 */
	function iteratorToArray(iterator) {
	  var data,
	      result = [];
	
	  while (!(data = iterator.next()).done) {
	    result.push(data.value);
	  }
	  return result;
	}
	
	module.exports = iteratorToArray;


/***/ },
/* 51 */
/***/ function(module, exports) {

	/**
	 * Converts `map` to an array.
	 *
	 * @private
	 * @param {Object} map The map to convert.
	 * @returns {Array} Returns the converted array.
	 */
	function mapToArray(map) {
	  var index = -1,
	      result = Array(map.size);
	
	  map.forEach(function(value, key) {
	    result[++index] = [key, value];
	  });
	  return result;
	}
	
	module.exports = mapToArray;


/***/ },
/* 52 */
/***/ function(module, exports) {

	/**
	 * Converts `set` to an array.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the converted array.
	 */
	function setToArray(set) {
	  var index = -1,
	      result = Array(set.size);
	
	  set.forEach(function(value) {
	    result[++index] = value;
	  });
	  return result;
	}
	
	module.exports = setToArray;


/***/ },
/* 53 */
/***/ function(module, exports) {

	/** Used to compose unicode character classes. */
	var rsAstralRange = '\\ud800-\\udfff',
	    rsComboMarksRange = '\\u0300-\\u036f\\ufe20-\\ufe23',
	    rsComboSymbolsRange = '\\u20d0-\\u20f0',
	    rsVarRange = '\\ufe0e\\ufe0f';
	
	/** Used to compose unicode capture groups. */
	var rsAstral = '[' + rsAstralRange + ']',
	    rsCombo = '[' + rsComboMarksRange + rsComboSymbolsRange + ']',
	    rsFitz = '\\ud83c[\\udffb-\\udfff]',
	    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
	    rsNonAstral = '[^' + rsAstralRange + ']',
	    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
	    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
	    rsZWJ = '\\u200d';
	
	/** Used to compose unicode regexes. */
	var reOptMod = rsModifier + '?',
	    rsOptVar = '[' + rsVarRange + ']?',
	    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
	    rsSeq = rsOptVar + reOptMod + rsOptJoin,
	    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';
	
	/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
	var reComplexSymbol = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');
	
	/**
	 * Converts `string` to an array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the converted array.
	 */
	function stringToArray(string) {
	  return string.match(reComplexSymbol);
	}
	
	module.exports = stringToArray;


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var baseValues = __webpack_require__(55),
	    keys = __webpack_require__(17);
	
	/**
	 * Creates an array of the own enumerable property values of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property values.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.values(new Foo);
	 * // => [1, 2] (iteration order is not guaranteed)
	 *
	 * _.values('hi');
	 * // => ['h', 'i']
	 */
	function values(object) {
	  return object ? baseValues(object, keys(object)) : [];
	}
	
	module.exports = values;


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var arrayMap = __webpack_require__(56);
	
	/**
	 * The base implementation of `_.values` and `_.valuesIn` which creates an
	 * array of `object` property values corresponding to the property names
	 * of `props`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array} props The property names to get values for.
	 * @returns {Object} Returns the array of property values.
	 */
	function baseValues(object, props) {
	  return arrayMap(props, function(key) {
	    return object[key];
	  });
	}
	
	module.exports = baseValues;


/***/ },
/* 56 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.map` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function arrayMap(array, iteratee) {
	  var index = -1,
	      length = array.length,
	      result = Array(length);
	
	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}
	
	module.exports = arrayMap;


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	var toNumber = __webpack_require__(58);
	
	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0,
	    MAX_INTEGER = 1.7976931348623157e+308;
	
	/**
	 * Converts `value` to an integer.
	 *
	 * **Note:** This function is loosely based on [`ToInteger`](http://www.ecma-international.org/ecma-262/6.0/#sec-tointeger).
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted integer.
	 * @example
	 *
	 * _.toInteger(3);
	 * // => 3
	 *
	 * _.toInteger(Number.MIN_VALUE);
	 * // => 0
	 *
	 * _.toInteger(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toInteger('3');
	 * // => 3
	 */
	function toInteger(value) {
	  if (!value) {
	    return value === 0 ? value : 0;
	  }
	  value = toNumber(value);
	  if (value === INFINITY || value === -INFINITY) {
	    var sign = (value < 0 ? -1 : 1);
	    return sign * MAX_INTEGER;
	  }
	  var remainder = value % 1;
	  return value === value ? (remainder ? value - remainder : value) : 0;
	}
	
	module.exports = toInteger;


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(27),
	    isObject = __webpack_require__(28);
	
	/** Used as references for various `Number` constants. */
	var NAN = 0 / 0;
	
	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;
	
	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
	
	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;
	
	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;
	
	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;
	
	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3);
	 * // => 3
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3');
	 * // => 3
	 */
	function toNumber(value) {
	  if (isObject(value)) {
	    var other = isFunction(value.valueOf) ? value.valueOf() : value;
	    value = isObject(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = value.replace(reTrim, '');
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}
	
	module.exports = toNumber;


/***/ },
/* 59 */
/***/ function(module, exports) {

	module.exports = require("fs");

/***/ },
/* 60 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _sampleSize = __webpack_require__(38);
	
	var _sampleSize2 = _interopRequireDefault(_sampleSize);
	
	var _isNumber = __webpack_require__(62);
	
	var _isNumber2 = _interopRequireDefault(_isNumber);
	
	var _shuffle = __webpack_require__(37);
	
	var _shuffle2 = _interopRequireDefault(_shuffle);
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Fetch = function () {
	  function Fetch(colors) {
	    _classCallCheck(this, Fetch);
	
	    this.colors = (0, _shuffle2.default)(colors);
	  }
	
	  _createClass(Fetch, [{
	    key: 'all',
	    value: function all() {
	      return this.colors;
	    }
	  }, {
	    key: 'one',
	    value: function one() {
	      return this.many(1);
	    }
	  }, {
	    key: 'many',
	    value: function many() {
	      var count = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];
	
	      if (!(0, _isNumber2.default)(count)) {
	        count = 1;
	      }
	      return (0, _sampleSize2.default)((0, _shuffle2.default)(this.colors), count);
	    }
	  }]);
	
	  return Fetch;
	}();
	
	exports.default = Fetch;
	;

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	var isObjectLike = __webpack_require__(10);
	
	/** `Object#toString` result references. */
	var numberTag = '[object Number]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/**
	 * Checks if `value` is classified as a `Number` primitive or object.
	 *
	 * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are classified
	 * as numbers, use the `_.isFinite` method.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isNumber(3);
	 * // => true
	 *
	 * _.isNumber(Number.MIN_VALUE);
	 * // => true
	 *
	 * _.isNumber(Infinity);
	 * // => true
	 *
	 * _.isNumber('3');
	 * // => false
	 */
	function isNumber(value) {
	  return typeof value == 'number' ||
	    (isObjectLike(value) && objectToString.call(value) == numberTag);
	}
	
	module.exports = isNumber;


/***/ }
/******/ ])
});
;
//# sourceMappingURL=flat-ui-colors.js.map