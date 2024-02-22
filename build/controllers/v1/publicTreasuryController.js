"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.publicTreasuryController = void 0;
const getPublicTreasury_1 = require("../../common/getPublicTreasury");
const errors_1 = require("../../handlers/errors");
const responses_1 = require("../../handlers/responses");
const publicTreasuryController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { coin_id } = req.params;
    const response = yield (0, getPublicTreasury_1.getPublicTreasury)(coin_id);
    if (!response) {
        throw new errors_1.BadRequestError("Invalid coin_id");
    }
    return new responses_1.ActionSuccessHandler(res, "Public treasury data retrieved successfully", {
        data: response,
    });
});
exports.publicTreasuryController = publicTreasuryController;
