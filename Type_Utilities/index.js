const TypeUtils = {
  isString(value) {
    return typeof value === "string";
  },

  isNumber(value) {
    return typeof value === "number" && !isNaN(value);
  },

  isBigInt(value) {
    return typeof value === "bigint";
  },

  isBoolean(value) {
    return typeof value === "boolean";
  },

  isSymbol(value) {
    return typeof value === "symbol";
  },

  isUndefined(value) {
    return typeof value === "undefined";
  },

  isNull(value) {
    return value === null;
  },

  isPrimitive(value) {
    return (
      this.isString(value) ||
      this.isNumber(value) ||
      this.isBigInt(value) ||
      this.isBoolean(value) ||
      this.isSymbol(value) ||
      this.isUndefined(value) ||
      this.isNull(value)
    );
  },
};
