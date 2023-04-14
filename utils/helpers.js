const formatDate = (date, format) => {
  const moment = require("moment");
  return moment(date).format(format);
};

module.exports = {
  formatDate,
};
