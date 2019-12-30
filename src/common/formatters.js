import { displayDateFormat } from './consts';
import { moment } from 'moment';

export const formatters = {    
    formatDate(dateValue) {
        return moment(dateValue).format(displayDateFormat);
    },
};