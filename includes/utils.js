function auditStart(model) { 
  return `
    INSERT INTO audit.dataform_audit_log
    VALUES ("${model}", "\${dataform.runId()}", "STARTED", CURRENT_TIMESTAMP(), NULL, NULL);
  `;
}

function auditEnd(model) {
  return `
    UPDATE audit.dataform_audit_log
    SET status="SUCCESS",
        end_time=CURRENT_TIMESTAMP(),
        row_count=(SELECT COUNT(*) FROM \${self()})
    WHERE model_name="${model}"
      AND run_id="\${dataform.runId()}";
  `;
}

module.exports = { auditStart, auditEnd };