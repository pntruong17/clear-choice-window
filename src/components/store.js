import { proxy } from 'valtio'

const state = proxy([
    {
        id: 0,
        name: 'FreshSight',
        anims: [false, false, false], //0: under frame slides, 1: under frame tilts, 2: upper frame slide

        gridStyles: ['GBG Flat', 'SDL Contoured'],

        gridStyle: 'SDL Contoured',

        gridOptions: ['No Grid', '1V0H', '1V1H', '2V1H', '2V2H', 'Prairie', 'Perimeter'],
        gridOption: 'No Grid',

        screenOptions: ['No Screen', 'Half Screen'], //['No Screen', 'Half Screen', 'Full Screen'],
        screenOption: 'No Screen',

        colorInOutDiff: false,
        color: ['White', 'Clay', 'Sandtone', 'Black/White', 'Bronze/White'],
        colorSelected: 'White',

        exColor: [],
        inColor: [],
        excolorSelected: '',
        incolorSelected: '',
    },
    {
        id: 1,
        name: 'SolidView',
        anims: [false, false, false], //0: under frame slides, 1: under frame tilts, 2: upper frame slide

        gridStyles: ['GBG Flat', 'GBG Contoured'],
        gridStyle: 'GBG Contoured',

        gridOptions: ['No Grid', '1V0H', '1V1H', '2V1H', '2V2H', 'Prairie', 'Perimeter'],
        gridOption: 'No Grid',

        screenOptions: ['No Screen', 'Half Screen', 'Full Screen'],
        screenOption: 'No Screen',

        colorInOutDiff: false,
        color: ['White', 'Beige'],
        colorSelected: 'White',

        exColor: [],
        inColor: [],
        excolorSelected: '',
        incolorSelected: '',
    },
    {
        id: 2,
        name: 'TitanEdge',
        anims: [false, false, false], //0: under frame slides, 1: under frame tilts, 2: upper frame slide

        gridStyles: ['GBG Flat', 'GBG Contoured'],
        gridStyle: 'GBG Contoured',

        gridOptions: ['No Grid', '1V0H', '1V1H', '2V1H', '2V2H', 'Prairie', 'Perimeter'],
        gridOption: 'No Grid',

        screenOptions: ['No Screen', 'Half Screen', 'Full Screen'],
        screenOption: 'No Screen',

        colorInOutDiff: true,
        color: [],
        colorSelected: '',
        exColor: ['White', 'Beige', 'Cashmere', 'Ivory', 'Wicker', 'Sandalwood', 'Clay', 'Sandstone', 'American Brown', 'Universal Brown', 'Wedgewood Blue', 'Old World Blue', 'Forest Green', 'Sable', 'Bronze', 'True Black', 'Cranberry', 'Burgandy'],
        inColor: ['White', 'Beige'],
        excolorSelected: 'White',
        incolorSelected: 'White',
    },
    {
        id: 3,
        name: 'DreamGraze',
        anims: [false, false, false], //0: under frame slides, 1: under frame tilts, 2: upper frame slide

        gridStyles: ['GBG Contoured', 'SDL Contoured'],
        gridStyle: 'GBG Contoured',

        gridOptions: ['No Grid', '1V0H', '1V1H', '2V1H', '2V2H', 'Prairie', 'Perimeter'],
        gridOption: 'No Grid',

        screenOptions: ['No Screen', 'Half Screen', 'Full Screen'],
        screenOption: 'No Screen',

        colorInOutDiff: true,
        color: [],
        colorSelected: '',

        exColor: ['White', 'Beige', 'Cashmere', ' Ivory', 'Wicker', 'Sandalwood', 'Clay', 'Sandstone', 'American Brown', 'Universal Brown', 'Wedgewood Blue', 'Old World Blue', 'Forest Green', 'Sable', ' Bronze', 'True Black', 'Cranberry', 'Burgandy'],
        inColor: ['White', 'Beige', 'Medium Oak', 'Cherry woodgrain', 'Brazilian Cherry wood grain'],

        excolorSelected: 'Cashmere',
        incolorSelected: 'Beige',

    },

    {
        id: 4,
        name: 'Lifestyle',
        anims: [false, false, false], //0: under frame slides, 1: under frame tilts, 2: upper frame slide

        gridStyles: ['GBG Contoured', 'SDL Contoured'],
        gridStyle: 'GBG Contoured',

        gridOptions: ['No Grid', '1V0H', '1V1H', '2V1H', '2V2H', 'Prairie', 'Perimeter'],
        gridOption: 'No Grid',

        screenOptions: ['No Screen', 'Half Screen', 'Full Screen'],
        screenOption: 'No Screen',

        colorInOutDiff: true,
        color: [],
        colorSelected: '',
        exColor: ['Black', 'White', 'Brown', 'Fossil', 'Iron Ore', 'Portabello', 'Putty', 'Almond', 'Brick Red', 'Hartford Green', 'Wolf Gray'],
        inColor: ['Unfinished Pine', 'White', 'Linen White', 'Golden Oak Stain', 'Early American Stain', 'Provincial Stain', 'Black'],
        excolorSelected: 'Black',
        incolorSelected: 'Pine',

    },
    {
        id: 5,
        name: 'Impervia',
        anims: [false, false, false], //0: under frame slides, 1: under frame tilts, 2: upper frame slide

        gridStyles: ['GBG Contoured', 'SDL Contoured'],
        gridStyle: 'GBG Contoured',

        gridOptions: ['No Grid', '1V0H', '1V1H', '2V1H', '2V2H', 'Prairie', 'Perimeter'],
        gridOption: 'No Grid',

        screenOptions: ['No Screen', 'Half Screen', 'Full Screen'],
        screenOption: 'No Screen',

        colorInOutDiff: false,
        color: ['White', 'Brown', 'Black', 'Tan', 'Morning Sky', 'Brown/White', 'Black/White', 'Tan/White', 'Morning Sky/White'],
        colorSelected: 'White',
        exColor: [],
        inColor: [],
        excolorSelected: '',
        incolorSelected: '',

    },

]
)

export { state }