/* eslint-disable no-unused-vars */
const { Router } = require('express');
const { getSingleGoal, getAllGoals, createGoals, updateSingleGoalById, getArchivedGoals, deleteGoal } = require('../controllers/goalController');

const router = Router();

router.route('/').post(createGoals).get(getAllGoals);

router.route('/archived').get(getArchivedGoals)

router.route('/:id').get(getSingleGoal).delete(deleteGoal)

router.put('/update/:id', updateSingleGoalById);

module.exports = router;
