import { newExerciseRow } from './templates.js';

class DefinedExercises {
  constructor() {
    this.element = document.getElementById('definedExercises');
    if (!this.element) {
      throw new Error("Defined Exercises element wasn't defined.");
    }

    this.deleteExercise.bind(this);
    this.moveElement.bind(this);
    this.addExercise.bind(this);

    const newExercise = () => {
      const tr = document.createElement('tr');
      this.element.appendChild(tr);
      tr.innerHTML = newExerciseRow;
    };

    const button = document.getElementById('addExerciseButton');
    if (!button) throw new Error('no button!');
    button.addEventListener('click', newExercise);
  }

  addExercise(ex) {}

  deleteExercise(idx) {}

  moveElement(idx, amount) {}
}

const de = new DefinedExercises();

var hey = () => alert('hey');
