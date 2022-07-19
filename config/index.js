var configValues = require("./config");
module.exports = {
    getDbConnectionString : function () {
        return `mongodb+srv://${configValues.username}:${configValues.password}@cluster0.p6azp.mongodb.net/Node-todo?retryWrites=true&w=majority`;
    }
}