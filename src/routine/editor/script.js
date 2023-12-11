import { ExerciseRow } from './templates.js';

const definedExercises = document.getElementById('definedExercises');
const addExerciseButton = document.getElementById('addExerciseButton');

addExerciseButton.addEventListener('click', function () {
  definedExercises.appendChild(new ExerciseRow(Date.now()));
});
