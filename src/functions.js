// original function syntax also works
/*export function getTimes2(num) {
    return num * 2;
}*/

// syntactic sugar version
export const getTimes2 = (num) => {
    return num * 2;
}

// This doesn't work. Maybe because it doesn't return a component???
/* export const getTimes2 = (num) => {
    return num * 2;
}

export default getTimes2; */
