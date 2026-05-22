import { VALID_TYPES } from "../constants/index.js";
import InvalidTypeError from "../exceptions/index.js";

export const validateType = (type: string) => {
  if (!VALID_TYPES.includes(type))
    throw new InvalidTypeError("Invalid movie type");
};
