const hoverable_intensity = [0, 1, 2, 3, 4, 5];

const base_hoverable = hoverable_intensity.map((force) => `hoverable-${force}`);
const light_hoverable = base_hoverable.map(
  (force) => `light-${force}`
);

const hoverable = base_hoverable.concat(light_hoverable)

export default hoverable
