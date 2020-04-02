import EventEmitter from "./libs/event-emitter";

const eventTypes = Object.freeze({
  NOTE_ADDED: "NOTE_ADDED"
});

export default new EventEmitter({ eventTypes });
