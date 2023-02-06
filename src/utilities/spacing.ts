const intensities = [0, 1, 2, 3, 4, 5];
const sides = ['', 'x', 'y', 'l', 'r']

const base_spacing = ["container", "mt-auto", "mb-auto", "ml-auto", "mr-auto"];

const margins = sides.flatMap(margin => {
    return intensities.map(intensity => `m${!sides ? '-' + margin : margin}-${intensity}`)
})

const paddings = sides.flatMap(margin => {
    return intensities.map(intensity => `p${!sides ? '-' + margin : margin}-${intensity}`)
})

const spacings = base_spacing.concat(margins).concat(paddings)
export default spacings
