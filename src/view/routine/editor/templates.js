export class ExerciseRow {
  static #definedExercises = document.getElementById('definedExercises');

  /**
   * Callback function meant to update the order index of each exercise after an opertation has been executed. This exists because I don't trust browsers to send the thigns in the order they are in the dom.
   */
  static updateRows() {
    ExerciseRow.#definedExercises.childNodes.forEach((e, idx) => {
      console.log((e.querySelector('[type=hidden]').value = idx));
    });
  }

  constructor(id) {
    id = 'ex-' + id;
    const self = document.createElement('tr');
    self.append(
      this.fieldInput('text', id + '[exerciseName]'),
      this.fieldInput('number', id + '[initialWeight]', { min: 0 }),
      this.fieldInput('number', id + '[setNumber]', { min: 0 }),
      this.fieldInput('number', id + '[maxRep]', { min: 0 }),
      this.operationButtons(),
      this.fieldInput('hidden', id + '[position]', {
        value: ExerciseRow.#definedExercises.childElementCount,
      })
    );
    return self;
  }

  /**
   * Template for creating an action button
   * @param {string} label
   * @param {string} btnClass
   * @param {function} cb
   * @returns DOM element reference
   */
  actionButton(label, btnClass, cb) {
    const b = document.createElement('button');
    b.type = 'button';
    b.textContent = label;
    b.classList.add('btn', btnClass);
    b.addEventListener('click', cb);
    return b;
  }

  /**
   * Generates buttons to move and delete that exercise\row
   * @returns DOM element reference
   */
  operationButtons() {
    const td = document.createElement('td');
    td.append(
      this.actionButton('^', 'btn-secondary', function (e) {
        const grandpa = this.parentNode.parentNode;
        if (!grandpa.previousSibling) return;
        grandpa.parentNode.insertBefore(grandpa, grandpa.previousSibling);
        ExerciseRow.updateRows();
      }),
      this.actionButton('v', 'btn-secondary', function (e) {
        const grandpa = this.parentNode.parentNode;
        if (!grandpa.nextSibling) return;
        grandpa.parentNode.insertBefore(grandpa.nextSibling, grandpa);
        ExerciseRow.updateRows();
      }),
      this.actionButton('x', 'btn-danger', function (e) {
        this.parentNode.parentNode.remove();
        ExerciseRow.updateRows();
      })
    );
    return td;
  }

  /**
   * Template for creating input fields
   * @param {string} type the type of input field
   * @param {string} name the name given in the form
   * @param {Record<string, string>} attrs any other attributes to add
   * @return DOM element reference
   */
  fieldInput(type, name, attrs = {}) {
    const td = document.createElement('td');
    const i = document.createElement('input');
    i.type = type;
    i.setAttribute('name', name);
    for (const key of Object.keys(attrs)) {
      i.setAttribute(key, attrs[key]);
    }
    td.appendChild(i);
    return td;
  }
}
