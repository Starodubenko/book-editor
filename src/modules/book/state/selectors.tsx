import {createSelector} from "redux-starter-kit";


const getSubtotal = createSelector(
    ['shop.items'],
    items => {
        // return value here
    }
)

const getTax = createSelector(
    [getSubtotal, 'shop.taxPercent'],
    (subtotal, taxPercent) => {
        // return value here
    }
)
