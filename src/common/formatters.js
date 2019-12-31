import { displayDateFormat } from "./consts";
import { moment } from "moment";

export const formatters = {
  filters: {
    formatDate(dateValue) {
      return moment(dateValue).format(displayDateFormat);
    }
  }
};
