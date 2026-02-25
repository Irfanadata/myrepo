// definitions/orders.js
const utils = require("../includes/utils");

module.exports = {
  type: "incremental",
  schema: "analytics",
  name: "orders",
  uniqueKey: ["order_id"],
  tags: ["incremental"],

  // preOps/postOps can also be functions if they need ctx
  preOps: [(ctx) => utils.auditStart("orders")],
  postOps: [(ctx) => utils.auditEnd("orders", ctx.ref("analytics.orders"), ctx)],

  // query must be a function to get ctx
  query: (ctx) => `
    SELECT *
    FROM ${ctx.ref("orders_raw")}
  `
};