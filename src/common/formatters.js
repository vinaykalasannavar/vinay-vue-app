import { displayDateFormat } from "./consts";
import { format } from 'date-fns';


export const formatters = {
  filters: {
    formatDate(dateValue) {

      return format(dateValue, displayDateFormat);
    }
  }
};
