export const newExerciseRow = `
    <td>
      <input name="exerciseName" type="text" required />
    </td>
    <td>
      <input name="initialWeight" type="number" min="0" required />
    </td>
    <td>
      <input name="totalReps" type="number" min="0" required />
    </td>
    <td>
      <button class="btn btn-secondary" type="button">^</button>
      <button class="btn btn-secondary" type="button">v</button>
      <button class="btn btn-danger" type="button">X</button>
    </td>
`;
