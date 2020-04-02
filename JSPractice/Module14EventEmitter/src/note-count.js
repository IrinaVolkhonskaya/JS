import emitter from "./emitter";

const refs = {};

const update = ({ noteCount }) => {
  refs.output.textContent = `У Вас ${noteCount} записи(-ей)`;
};

const selectRefs = () => {
  refs.output = document.querySelector(".note-count");
};

selectRefs();
emitter.subscribe(emitter.types.NOTE_ADDED, update);
