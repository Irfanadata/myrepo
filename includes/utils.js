// function auditStart(model) { 
//   return `
//     INSERT INTO audit.dataform_audit_log
//     VALUES ("${model}", "\${dataform.runId()}", "STARTED", CURRENT_TIMESTAMP(), NULL, NULL);
//   `;
// }

// // function auditEnd(model) {
// //   return `
// //     UPDATE audit.dataform_audit_log
// //     SET status="SUCCESS",
// //         end_time=CURRENT_TIMESTAMP(),
// //         row_count=(SELECT COUNT(*) FROM \${self()})
// //     WHERE model_name="${model}"
// //       AND run_id="\${dataform.runId()}";
// //   `;
// // }

// function auditEnd(model) {
//   return `
//     UPDATE audit.dataform_audit_log
//     SET status="SUCCESS",
//         end_time=CURRENT_TIMESTAMP(),
//         row_count=(
//           SELECT IFNULL(COUNT(*),0) FROM \${self()}
//         )
//     WHERE model_name="${model}"
//       AND run_id="\${dataform.runId()}";
//   `;
// }

// module.exports = { auditStart, auditEnd };




// function auditStart(model) {
//   return `
// INSERT INTO audit.dataform_audit_log
// VALUES ('${model}', "${dataform.runId}", 'STARTED', CURRENT_TIMESTAMP(), NULL, NULL);
// `;
// }

// function auditEnd(model) {
//   return `
// UPDATE audit.dataform_audit_log
// SET status='SUCCESS',
//     end_time=CURRENT_TIMESTAMP(),
//     row_count=(SELECT IFNULL(COUNT(*),0) FROM ${self()})
// WHERE model_name='${model}'
//   AND run_id="${dataform.runId}";
// `;
// }

// module.exports = { auditStart, auditEnd };


// includes/utils.js
// includes/utils.js
// includes/utils.js
// includes/utils.js
// includes/utils.js

// includes/utils.js
function auditStart(model, runId) {
  return `
INSERT INTO audit.dataform_audit_log
(model_name, run_id, status, start_time, end_time, row_count)
VALUES ('${model}', "${runId}", 'STARTED', CURRENT_TIMESTAMP(), NULL, NULL)
`;
}

function auditEnd(model, runId, tableNameSQL) {
  return `
UPDATE audit.dataform_audit_log
SET status='SUCCESS',
    end_time=CURRENT_TIMESTAMP(),
    row_count=(SELECT IFNULL(COUNT(*),0) FROM ${tableNameSQL})
WHERE model_name='${model}'
  AND run_id="${runId}"
`;
}

module.exports = { auditStart, auditEnd };























