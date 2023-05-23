import {Notificationcontainer, NotificationManager} from 'react-notifications';
export const notificatonSuccess = function notificatonSuccess(title) {
    return NotificationManager.success('Success', title);
};

export const notificatonWarning = function notificatonWarning(title) {
    return NotificationManager.warning('Success', title);
};