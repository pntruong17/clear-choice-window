import { proxy } from 'valtio'

const state_FS = proxy({
    intro: true,
    window: 1,
    anims: [false, false, false], //0: under frame slides, 1: under frame tilts, 2: upper frame slide

    gridStyles: ['Flat btw Glass', 'Contour btw Glass', 'Contour outside Glass'],
    gridStyle: 'Contour outside Glass',

    gridOptions: ['No Grid', '1V1H', '1V1Hx2', '2V1Hx2', '2V1H', '2V1HT', '2V2Hx2T', '2V1Hx2T', '2V0Hx2', '2V0H', '1V0Hx2', '1V0H'],
    gridOption: 'No Grid',

    sreenOptions: ['No Screen', 'Half Screen'], //['No Screen', 'Half Screen', 'Full Screen'],
    screenOption: 'No Screen',

    colors: ['#FDFFFF', '#EFBD4E', '#80C670', '#726DE8', '#EF674E', '#353934'],
    color: '#FDFFFF',

    mats: ['White', 'Clay', 'Sandtone', 'Black/White', 'Bronze/White'],
    matcodes: ['#FEFEFE', '#8D7D73', '#CFC0A1', '#07080B', '#52462A'],
    mat: '#FEFEFE',
})

export { state_FS }
