// @desc    Get Goals
// @route   Get /api/goals   
// @access  Private
const getGoals = (req, res)=>{
    res.status(200).json({message :"Get goals"})
}
// @desc    Set Goals
// @route   POST /api/goals   
// @access  Private
const setGoals = (req, res) =>{
    res.status(200).json({message: "Set Goals"})
}
// @desc    Update Goals
// @route   PUT /api/goals/:id   
// @access  Private
const updateGoals =(req, res)=>{
    res.status(200).json({message : `Update goal = ${req.params.id}`})
}
// @desc    Delete Goals
// @route   DELETE /api/goals/:id
// @access  Private
const deleteGoals = (req, res) =>{
    res.status(200).json({message:`Delete goal ${req.params.id}`})
}

module.exports={
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals
}