// import {createReducer, on} from "@ngrx/store";
// import {initialCheckoutState} from "../models/default-checkout.model";
// import {
//   addToTheCheckoutAction,
//   decreaseQuantityOfItemsAction, increaseQuantityOfItemsAction,
//   removeFromTheCheckoutAction
// } from "../actions/checkout.actions";
//
// export const checkoutReducer = createReducer(initialCheckoutState,
//   on(addToTheCheckoutAction, (state, {price}) => {
//     return {
//       totalSum: state.totalSum + price,
//       quantityOfItems: state.quantityOfItems++
//     }
//   }),
//   on(removeFromTheCheckoutAction, (state, {price}) => {
//     return {
//
//       totalSum: state.totalSum - price,
//       quantityOfItems: state.quantityOfItems--
//     }
//   }),
//   on(decreaseQuantityOfItemsAction, (state, {price}) => {
//     return {
//
//       totalSum: state.totalSum - price,
//       quantityOfItems: state.quantityOfItems--
//     }
//   }),
//   on(increaseQuantityOfItemsAction, (state, {price}) => {
//     return {
//       totalSum: state.totalSum + price,
//       quantityOfItems: state.quantityOfItems++
//     }
//   }),)
