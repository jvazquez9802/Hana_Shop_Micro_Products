"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDb = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const connectDb = () => {
    return mongoose_1.default.connect(process.env.HANA_MONGO_CONNECTION, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useFindAndModify: false
    });
};
exports.connectDb = connectDb;
//# sourceMappingURL=db.js.map