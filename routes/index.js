const express = require('express');
const router = express.Router();

router.use(require('./api/department_route'));
router.use(require('./api/employee_routes'));
router.use(require('./api/role_routes'));

module.exports = router;
