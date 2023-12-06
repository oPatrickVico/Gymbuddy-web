class DefinedExercises {
  _exercises = [];

  constructor() {
    this.element = document.getElementById('definedExercises');
    if (!this.element) {
      throw new Error("Defined Exercises element wasn't defined.");
    }

    this.deleteExercise.bind(this);
  }

  render() {
    this.element.innerHTML = '';
    for (let i = 0; i < this._exercises.length; i++) {
      const ex = this._exercises[i];
      const el = document.createElement('li');
      el.textContent = `${ex.exerciseName}: ${ex.maxRep} reps`;
      el.setAttribute('data-index', '' + i);
      const b = document.createElement('button');
      b.classList.add('btn', 'btn-danger');
      b.addEventListener('click', () => {
        this.deleteExercise(i);
      });
      b.textContent = 'X';
      el.appendChild(b);
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
