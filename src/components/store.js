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

        exColor: ['Full Black', 'White', 'Beige', 'Cashmere', ' Ivory', 'Wicker', 'Sandalwood', 'Clay', 'Sandstone', 'American Brown', 'Universal Brown', 'Wedgewood Blue', 'Old World Blue', 'Forest Green', 'Sable', ' Bronze', 'Cranberry', 'Burgandy'],
        inColor: ['White', 'Beige', 'Medium Oak', 'Cherry woodgrain', 'Brazilian Cherry wood grain'],

        excolorSelected: 'White',
        incolorSelected: 'White',

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
        excolorSelected: 'White',
        incolorSelected: 'White',

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
    {
        id: 6,
        name: 'Clear View',
        anims: [false, false, false], //0: under frame slides, 1: under frame tilts, 2: upper frame slide
        isForward: false,
        isAnimating: false,

        gridStyles: ['GBG Flat', 'GBG Contoured', 'SDL Contoured'],
        gridStyle: 'SDL Contoured',

        gridOptions: ['No Grid', '1V0H', '1V1H', '2V3H', 'Prairie'],
        gridOption: 'No Grid',

        screenOptions: ['No Screen', 'Full Screen'],
        screenOption: 'No Screen',

        colorInOutDiff: true,

        exColor: ['White', 'Beige', 'Cashmere', ' Ivory', 'Wicker', 'Sandalwood', 'Clay', 'Sandstone', 'American Brown', 'Universal Brown', 'Wedgewood Blue', 'Old World Blue', 'Forest Green', 'Sable', ' Bronze', 'Full Black', 'Cranberry', 'Burgandy'],
        inColor: ['White', 'Beige', 'Medium Oak', 'Cherry woodgrain', 'Brazilian Cherry wood grain'],
        hardColor: ['White', 'Beige', 'Bronze', 'Black', 'Brown'],
        excolorSelected: 'White',
        incolorSelected: 'White',
        hardColorSelected: 'White',

    },
    {
        id: 7,
        name: 'Impervia Casement',
        anims: [false, false, false], //0: under frame slides, 1: under frame tilts, 2: upper frame slide
        isForward: false,
        isAnimating: false,

        gridStyles: ['GBG Flat', 'GBG Contoured', 'SDL Contoured'],
        gridStyle: 'SDL Contoured',

        gridOptions: ['No Grid', '1V0H', '1V1H', '2V3H', 'Prairie'],
        gridOption: 'No Grid',

        screenOptions: ['No Screen'],
        screenOption: 'No Screen',

        colorInOutDiff: false,
        color: ['White', 'Brown', 'Black', 'Tan', 'Morning Sky', 'Brown/White', 'Black/White', 'Tan/White', 'Morning Sky/White'],
        colorSelected: 'White',
        exColor: [],
        inColor: [],
        excolorSelected: '',
        incolorSelected: '',

    },
    {
        id: 8,
        name: 'Lifestyle Casement',
        anims: [false, false, false], //0: under frame slides, 1: under frame tilts, 2: upper frame slide

        gridStyles: ['GBG Flat', 'GBG Contoured', 'SDL Contoured'],
        gridStyle: 'SDL Contoured',

        gridOptions: ['No Grid', '1V0H', '1V1H', '2V3H', 'Prairie'],
        gridOption: 'No Grid',

        screenOptions: ['No Screen'],
        screenOption: 'No Screen',

        colorInOutDiff: true,

        exColor: ['Black', 'White', 'Brown', 'Fossil', 'Iron Ore', 'Portabello', 'Putty', 'Almond', 'Brick Red', 'Hartford Green', 'Wolf Gray'],
        inColor: ['Unfinished Pine', 'White', 'Linen White', 'Golden Oak Stain', 'Early American Stain', 'Provincial Stain', 'Black'],
        hardColor: ['White', 'Beige', 'Bronze', 'Black', 'Brown'],
        excolorSelected: 'White',
        incolorSelected: 'White',
        hardColorSelected: 'White',

        // exColor: ['White', 'Beige', 'Cashmere', ' Ivory', 'Wicker', 'Sandalwood', 'Clay', 'Sandstone', 'American Brown', 'Universal Brown', 'Wedgewood Blue', 'Old World Blue', 'Forest Green', 'Sable', ' Bronze', 'True Black', 'Cranberry', 'Burgandy'],
        // inColor: ['White', 'Beige', 'Medium Oak', 'Cherry woodgrain', 'Brazilian Cherry wood grain'],
        // excolorSelected: 'White',
        // incolorSelected: 'White',

    },


]
)

export { state }