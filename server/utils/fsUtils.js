const fs = require('fs')

module.exports = {
    userAnswerFile: async (userID, lessonID, data) => {
        const path = `./lessonValidation/${userID}${lessonID}.js`;
        // user _id with lesson _id?
        try {
            await fs.appendFilesync(path, data)
            return path
        } catch (err) {
            console.log(err)
        };
    },
    deleteAnswerFile: async (path) => {

    }
}