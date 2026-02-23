
function filter_recent_high_orders() {
  return `
    WHERE total_price >= 800
      AND order_date >= DATE_SUB(CURRENT_DATE(), INTERVAL 60 DAY)
      OR order_date <= DATE_SUB(CURRENT_DATE(), INTERVAL 90 DAY)
  `;
}

module.exports = { filter_recent_high_orders };

