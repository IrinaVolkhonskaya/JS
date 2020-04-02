export default class EventEmitter {
    constructor({ eventTypes = {} }) {
      this.events = {};
      this.types = eventTypes;
    }
  
    subscribe(type, callback) {
      if (!this.events[type]) {
        this.events[type] = [];
      }
  
      this.events[type].push(callback);
    }
  
    unsubscribe(type, fn) {
      if (!this.events[type]) return;
  
      this.events[type] = this.events[type].filter(callback => callback !== fn);
    }
  
    emit(type, ...args) {
      if (!this.events[type]) return;
  
      this.events[type].forEach(callback => {
        callback.apply(null, args);
      });
    }
  }
  