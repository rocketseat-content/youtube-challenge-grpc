"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var grpc_1 = __importDefault(require("grpc"));
var protoLoader = __importStar(require("@grpc/proto-loader"));
function loadProto(fileName) {
    var packageDefinition = protoLoader.loadSync(path_1.default.resolve(__dirname, '..', 'pb', fileName + ".proto"), {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true,
    });
    var proto = grpc_1.default.loadPackageDefinition(packageDefinition);
    return proto;
}
exports.default = loadProto;
