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
    const bumpTrigger = inputs.find(i => i.name === 'trigSuccess');
    bumpTrigger.fire();
}

//export function createRive() {
//    const r = new rive.Rive({
//        src: 'bear.riv',
//        canvas: document.getElementById('canvas'),
//        autoplay: true,
//        stateMachines: 'Login Machine',
//        fit: rive.Fit.cover,

//        //onLoad: (_) => {
//        //    const inputs = r.stateMachineInputs('Login Machine');
//        //    const bumpTrigger = inputs.find(i => i.name === 'trigSuccess');
//        //    bumpTrigger.fire();
//        //    btn.onclick = (e) => {
//        //        e.preventDefault();
//        //        bumpTrigger.fire()
//        //    };
//        //            }

//    })
//}

//const r = createRive();

//export function doSuccessEmotionJs() {
//    const inputs = r.stateMachineInputs('Login Machine');
//    const bumpTrigger = inputs.find(i => i.name === 'trigSuccess');
//    bumpTrigger.fire();
//}









