function sales_category(price_col) {
  return `
    CASE
      WHEN ${price_col} < 100 THEN 'LOW'
      WHEN ${price_col} BETWEEN 100 AND 500 THEN 'MEDIUM'
      ELSE 'HIGH'
    END
  `;
}

module.exports = { sales_category };
