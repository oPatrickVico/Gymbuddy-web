import { newExerciseRow } from './templates.js';

class DefinedExercises {
  _exercises = [];

  constructor() {
    this.element = document.getElementById('definedExercises');
    if (!this.element) {
      throw new Error("Defined Exercises element wasn't defined.");
    }

    this.deleteExercise.bind(this);
    this.moveElement.bind(this);
    this.generateExerciseWidget.bind(this);

    const newExercise = () => {
      const tr = document.createElement('tr');
      this.element.appendChild(tr);
      tr.innerHTML = newExerciseRow;
    };

    const button = document.getElementById('addExerciseButton');
    if (!button) throw new Error('no button!');
    button.addEventListener('click', newExercise);
  }

  render() {
    this.element.innerHTML = '';
    for (let i = 0; i < this._exercises.length; i++) {
      this.element.appendChild(this.generateExerciseWidget(i));
    }
  }

  addExercise(ex) {
    this._exercises.push(ex);
    this.render();
  }

  deleteExercise(idx) {
    this._exercises.splice(idx, 1);
    this.render();
  }

  moveElement(idx, amount) {
    const newIdx = idx + amount;
    if (newIdx >= this._exercises.length || newIdx < 0) return;
    let temp = this._exercises[idx];
    this._exercises[idx] = this._exercises[newIdx];
    this._exercises[newIdx] = temp;
    this.render();
  }

  generateExerciseWidget(idx) {
    // Create the parent li element
    const exerciseContainer = document.createElement('li');

    // Field names
    const fieldNames = ['exercise', 'maxRep', 'initialWeight'];

    // Create elements and set names
    for (let i = 0; i < fieldNames.length; i++) {
      const fieldName = fieldNames[i];

      // Create label
      const label = document.createElement('label');
      label.textContent = `${fieldName[0].toUpperCase()}${fieldName.slice(1)}:`;

      // Create input and set name attribute
      const input = document.createElement('input');
      input.type =
        fieldName === 'maxRep' || fieldName === 'initialWeight'
          ? 'number'
          : 'text';
      input.name = `exercise-${idx}-${fieldName}`;
      input.required = true;

      // Append input to label
      label.appendChild(input);

      // Append label with input to container
      exerciseContainer.appendChild(label);
    }

    // Append Operations

    // Move Exercise Up
    exerciseContainer.appendChild(
      upArrow(() => {
        this.moveElement(i, -1);
      })
    );

    // Move Exercise Down
    exerciseContainer.appendChild(
      downArrow(() => {
        this.moveElement(i, 1);
      })
    );

    // Delete Exercise
    exerciseContainer.appendChild(
      deleteButton(() => {
        this.deleteExercise(i);
      })
    );

    return exerciseContainer;
  }
}

const de = new DefinedExercises();
