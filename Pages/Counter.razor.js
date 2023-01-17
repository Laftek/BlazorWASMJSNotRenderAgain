//import 'https://unpkg.com/@rive-app/canvas@1.0.79'; will not work because it needs to load before render

let r;
export function createRive() {
    r = new rive.Rive({
        src: 'bear.riv',
        canvas: document.getElementById('canvas'),
        autoplay: true,
        stateMachines: 'Login Machine',
        fit: rive.Fit.cover,
    });
    return r
}

export function doSuccessEmotionJs() {
    const inputs = r.stateMachineInputs('Login Machine');
    const successTrigger = inputs.find(i => i.name === 'trigSuccess');
    successTrigger.fire();
}

export function doFailEmotionJs() {
    const inputs = r.stateMachineInputs('Login Machine');
    const failTrigger = inputs.find(i => i.name === 'trigFail');
    failTrigger.fire();
}

export function doNumLookJs(numLookValue) {
    const inputs = r.stateMachineInputs('Login Machine');
    const numLook = inputs.find(i => i.name === 'numLook');
    if (numLook) {
        numLook.value = numLookValue;
    }
}

export function doHandsUpJs(boolean) {
    const inputs = r.stateMachineInputs('Login Machine');
    const handsUpBool = inputs.find(i => i.name === 'isHandsUp');
    if (handsUpBool) {
        handsUpBool.value = boolean;
    }
}

export function doCheckingJs(boolean) {
    const inputs = r.stateMachineInputs('Login Machine');
    const checkingBool = inputs.find(i => i.name === 'isChecking');
    if (checkingBool) {
        checkingBool.value = boolean;
    }
}







