const shadow_forces = [0, 1, 2, 3, 4, 5];

const shadow = shadow_forces.map((force) => `shadow-${force}`);
const light_shadow = shadow_forces.map((force) => `light-shadow-${force}`);

const shadows = shadow.concat(light_shadow)
export default shadows
