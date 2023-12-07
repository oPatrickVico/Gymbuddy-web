function deleteButton(cb) {
  const b = document.createElement('button');
  b.classList.add('btn', 'btn-danger');
  b.addEventListener('click', cb);
  b.textContent = 'X';
  return b;
}

function upArrow(cb) {
  const b = document.createElement('button');
  b.classList.add('btn', 'btn-secondary');
  b.addEventListener('click', cb);
  b.textContent = '^';
  return b;
}

function downArrow(cb) {
  const b = document.createElement('button');
  b.classList.add('btn', 'btn-secondary');
  b.addEventListener('click', cb);
  b.textContent = 'v';
  return b;
}

class DefinedExercises {
  _exercises = [];

  constructor() {
    this.element = document.getElementById('definedExercises');
    if (!this.element) {
      throw new Error("Defined Exercises element wasn't defined.");
    }

    this.deleteExercise.bind(this);
    this.moveElement.bind(this);
  }

  render() {
    this.element.innerHTML = '';
    for (let i = 0; i < this._exercises.length; i++) {
      const ex = this._exercises[i];
      const el = document.createElement('li');
      el.textContent = `${ex.exerciseName}: ${ex.maxRep} reps`;
      el.setAttribute('data-index', '' + i);
      el.setAttribute('value', JSON.stringify(ex));
      el.appendChild(
        upArrow(() => {
          this.moveElement(i, -1);
        })
      );
      el.appendChild(
        downArrow(() => {
          this.moveElement(i, 1);
        })
      );
      el.appendChild(
        deleteButton(() => {
          this.deleteExercise(i);
        })
      );
      this.element.appendChild(el);
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
}

const de = new DefinedExercises();

document
  .getElementById('newExerciseForm')
  .addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(this);
    de.addExercise(Object.fromEntries(formData.entries()));

    this.reset();
    document.getElementById('newExerciseInput').focus();
  });
