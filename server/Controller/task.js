const userTask = require('../Models/task')

exports.createTask = async (req, res, next) => {
    try {
        let createTask = await userTask.create(req.body)
        res.status(200).json({ message: "task added successfully" })
    } catch (err) {
        console.log(err)
    }


}

exports.getTask = async (req, res, next) => {

    try {
        let query = {};
        const { searchTask, page , limit } = req.query;
    
        if (searchTask) {
            query.task = { $regex: new RegExp(`^${searchTask}`, 'i') };

        }
        const totalCount = await userTask.countDocuments(query);

        const totalPages = Math.ceil(totalCount / limit);
        const skip = (page - 1) * limit;
        let allTask = await userTask.find(query)
            .skip(skip)
            .limit(limit)
            .exec();
    
        res.status(200).json({ message: "fetched successfully", data: allTask,totalPages });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal Server Error" });
    }

}