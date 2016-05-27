'use strict';

class FlashMessenger{

    constructor (alert) {
        this._alerts = [];

        if(alert){
            this.addAlert(alert);
        }

    }

    addAlert(alert) {
       // if(alert.typeOf(Alert)){
            this._alerts.push(alert);
       // }
        //else{
          //  throw new Error('addMessage need an alert object as parameter');
       // }
    }

    /**
     * returns copy of alerts
     * @returns {Array.<*>}
     */
    get alerts() {
        return this._alerts.slice();
    }

}