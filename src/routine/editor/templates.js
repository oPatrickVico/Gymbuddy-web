export class ExerciseRow {
  static #definedExercises = document.getElementById('definedExercises');

  static updateRows() {
    ExerciseRow.#definedExercises.childNodes.forEach((e, idx) => {
      console.log((e.querySelector('[type=hidden]').value = idx));
    });
  }

  constructor(id) {
    const self = document.createElement('tr');
    self.append(
      this.fieldInput('text', id + '[title]'),
      this.fieldInput('number', id + '[initialWeight]', { min: '0' }),
      this.fieldInput('number', id + '[maxRep]', { min: 0 }),
      this.fieldInput('hidden', id + '[position]', {
        value: ExerciseRow.#definedExercises.childElementCount,
      }),
      this.operationButtons()
    );
    return self;
  }

  /**
   *
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
   *
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
   *
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
