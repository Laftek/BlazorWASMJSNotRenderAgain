//import 'https://unpkg.com/@rive-app/canvas@1.0.79'; will not work because it needs to load before render

let r;
export function createRive(srcNET, canvasNET, autoplayNET, stateMachineNET) {
    r = new rive.Rive({
        src: srcNET,
        canvas: document.getElementById(canvasNET),
        autoplay: autoplayNET,
        stateMachines: stateMachineNET,
        fit: rive.Fit.cover,
    });
    return r
}

export function doStarsRatingFromNET(starsValue) {
    const inputs = r.stateMachineInputs('State Machine 1');
    const stars = inputs.find(i => i.name === 'rating');
    if (stars) {
        stars.value = starsValue;
        //return stars.value;
    }
}

export function doStarsRatingFromRive() {
    const inputs = r.stateMachineInputs('State Machine 1');
    const stars = inputs.find(i => i.name === 'rating');
    if (stars) {
        //stars.value = starsValue;
        return stars.value;
    }
}

//