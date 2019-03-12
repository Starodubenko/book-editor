export const extractStringValue = (anyValue: any) => {
    if(anyValue.toString) {
        return anyValue.toString();
    }

    return anyValue;
};
