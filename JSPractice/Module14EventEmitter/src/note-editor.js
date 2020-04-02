import emitter from "./emitter";

const refs = {};
const notes = [];

const selectRefs = () => {
  refs.form = document.querySelector(".form");
  refs.input = refs.form.querySelector('input[type="text"]');
};

const init = () => {
  selectRefs();

  refs.form.addEventListener("submit", evt => {
    evt.preventDefault();
    const note = refs.input.value.trim();

    if (note === "") return;

    notes.push(note);
    emitter.emit(emitter.types.NOTE_ADDED, { note, noteCount: notes.length });
    refs.form.reset();
  });
};

init();
