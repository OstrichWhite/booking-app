const inputHandler =
  (setter) =>
  ({ target: { value } }) =>
    setter(value);

export { inputHandler };
