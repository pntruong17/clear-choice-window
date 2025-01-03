
import { FreshSight } from './wd/FreshSight'
import { DreamGraze } from './wd/DreamGraze'
import { SolidView } from './wd/SolidView'
import { TitanEdge } from './wd/TitanEdge'
import { Lifestyle } from './wd/Lifestyle'
import { Impervia } from './wd/Impervia'
import { ClearView } from './wd/ClearView'
import { ImperviaCasement } from './wd/ImperviaCasement'
import { LifestyleCasement } from './wd/LifestyleCasement'
import { gl } from '../global'
import { useSnapshot } from 'valtio'

function Window_1(props) {

    const _gl = useSnapshot(gl)

    function pickWindow() {
        switch (_gl.window) {
            case 0:
                return <FreshSight />
            case 1:
                return <SolidView />
            case 2:
                return <TitanEdge />
            case 3:
                return <DreamGraze />
            case 4:
                return <Lifestyle />
            case 5:
                return <Impervia />
            case 6:
                return <ClearView />
            case 7:
                return <ImperviaCasement />
            case 8:
                return <LifestyleCasement />
            default:
                return <FreshSight />
        }
    }
    return (
        <>
            {pickWindow()}
        </>
    )
}
export default Window_1