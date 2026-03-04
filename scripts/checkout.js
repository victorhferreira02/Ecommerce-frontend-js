import { renderOrderSummary } from "./utils/checkout/orderSummary.js";
import { renderPaymentSummary } from "./utils/checkout/paymentSummary.js";
import { renderCheckoutHeader } from "./utils/checkout/checkoutHeader.js";

renderCheckoutHeader();
renderOrderSummary();
renderPaymentSummary();
