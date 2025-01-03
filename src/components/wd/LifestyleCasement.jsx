import { useGLTF, useAnimations } from '@react-three/drei'
import React, { useState, useEffect } from 'react'
import { LoopOnce } from 'three'
import { useSnapshot } from 'valtio'
import { state } from '../store'
import { gl } from '../../global'

export function LifestyleCasement(props) {
    const group = React.useRef()
    const { nodes, materials, animations } = useGLTF('/Lifestyle_Casement.glb')
    const { actions, names } = useAnimations(animations, group)
    const _gl = useSnapshot(gl)
    const _win = useSnapshot(state)[_gl.window]

    useEffect(() => {
        if (_win.isAnimating) {
            names.forEach(name => {
                const action = actions[name];
                action.reset();
                action.setLoop(LoopOnce);
                action.clampWhenFinished = true;
                action.setEffectiveTimeScale(_win.isForward ? 1 : -1); // Set direction based on state
                action.time = _win.isForward ? 0 : action.getClip().duration; // Set start time based on direction
                //action.paused = false; // Unpause the action
                console.log(_win.isForward)
                action.fadeIn(0).play();
            });
        }
    }, [_win.isAnimating, _win.isForward]);

    function matInterior() {
        switch (_win.incolorSelected) {
            case _win.inColor[0]:
                return materials.PineWood;
            case _win.inColor[1]:
                return materials.White;
            case _win.inColor[2]:
                return materials.LinenWhite;
            case _win.inColor[3]:
                return materials.GoldenOak;
            case _win.inColor[4]:
                return materials.AmericanStainAKAPlywood;
            case _win.inColor[5]:
                return materials.ProvincialWood;
            case _win.inColor[6]:
                return materials.Black;
            default:
                return 'Invalid value';
        }
    }

    function matExterior() {
        switch (_win.excolorSelected) {
            case _win.exColor[0]:
                return materials.Black;
            case _win.exColor[1]:
                return materials.White;
            case _win.exColor[2]:
                return materials.Brown;
            case _win.exColor[3]:
                return materials.Fossil;
            case _win.exColor[4]:
                return materials.IronOre;
            case _win.exColor[5]:
                return materials.Portobello;
            case _win.exColor[6]:
                return materials.Putty;
            case _win.exColor[7]:
                return materials.Almond;
            case _win.exColor[8]:
                return materials.BrickRed;
            case _win.exColor[9]:
                return materials.HartfordGreen;
            case _win.exColor[10]:
                return materials.WolfGray;
            default:
                return 'Invalid value';
        }
    }

    function switchScreen(_screenOption) {
        if (_win.screenOption == _screenOption) {
            return true
        } else {
            return false
        }
    }

    function gridSwitch(style, option) {
        if (_win.gridOption == 'No Grid') return false;

        let _op = _win.gridOptions[option + 1];
        let _style = _win.gridStyles[style - 1];
        let _styleGrid = _win.gridStyle

        return (_op == _win.gridOption && _style == _win.gridStyle) ? true : false;
    }
    return (
        <group ref={group} {...props} dispose={null}>
            <group visible={false}>
                <mesh name="Fossil" geometry={nodes.Fossil.geometry} material={materials.Fossil} position={[0, -0.246, 0.045]} />
                <mesh name="Brown" geometry={nodes.Brown.geometry} material={materials.Brown} position={[0, -0.246, 0.045]} />
                <mesh name="White" geometry={nodes.White.geometry} material={materials['White.001']} position={[0, -0.246, 0.045]} />
                <mesh name="Black" geometry={nodes.Black.geometry} material={materials['Black.002']} position={[0, -0.246, 0.045]} />
                <mesh name="Almond" geometry={nodes.Almond.geometry} material={materials.Almond} position={[0, -0.246, 0.045]} />
                <mesh name="IronOre" geometry={nodes.IronOre.geometry} material={materials.IronOre} position={[0, -0.246, 0.045]} />
                <mesh name="Portobello" geometry={nodes.Portobello.geometry} material={materials.Portobello} position={[0, -0.246, 0.045]} />
                <mesh name="Putty" geometry={nodes.Putty.geometry} material={materials.Putty} position={[0, -0.246, 0.045]} />
                <mesh name="BrickRed" geometry={nodes.BrickRed.geometry} material={materials.BrickRed} position={[0, -0.246, 0.045]} />
                <mesh name="HartfordGreen" geometry={nodes.HartfordGreen.geometry} material={materials.HartfordGreen} position={[0, -0.246, 0.045]} />
                <mesh name="LinenWhite" geometry={nodes.LinenWhite.geometry} material={materials.LinenWhite} position={[0, -0.246, 0.045]} />
                <mesh name="PineWood" geometry={nodes.PineWood.geometry} material={materials.PineWood} position={[0, -0.246, 0.045]} />
                <mesh name="WolfGray" geometry={nodes.WolfGray.geometry} material={materials.WolfGray} position={[0, -0.246, 0.045]} />
                <mesh name="AmericanStainAKAPlywood" geometry={nodes.AmericanStainAKAPlywood.geometry} material={materials.AmericanStainAKAPlywood} position={[0, -0.246, 0.045]} />
                <mesh name="ProvincialWood" geometry={nodes.ProvincialWood.geometry} material={materials.ProvincialWood} position={[0, -0.246, 0.045]} />
                <mesh name="GoldenOak" geometry={nodes.GoldenOak.geometry} material={materials.GoldenOak} position={[0, -0.246, 0.045]} />
            </group>

            <group name="Scene">
                <group name="window" position={[0, 0, 0.042]}>
                    <mesh name="window_1" geometry={nodes.window_1.geometry} material={matExterior()} />
                    <mesh name="window_2" geometry={nodes.window_2.geometry} material={matInterior()} />
                </group>
                <group name="bar1001" position={[0.368, -0.363, 0.032]} rotation={[0, 0, Math.PI / 2]}>
                    <mesh name="bar1001_1" geometry={nodes.bar1001_1.geometry} material={matExterior()} />
                    <mesh name="bar1001_2" geometry={nodes.bar1001_2.geometry} material={matInterior()} />
                </group>
                <mesh name="glass1" geometry={nodes.glass1.geometry} material={materials['glass.002']} position={[0, 0, 0.063]} scale={[1, 1, 1.363]} />
                <mesh name="lock2001" geometry={nodes.lock2001.geometry} material={materials.Black} position={[0.373, -0.404, 0.016]} scale={0.529} />
                <group name="bar1002" position={[0, -0.616, 0.031]}>
                    <mesh name="bar1002_1" geometry={nodes.bar1002_1.geometry} material={matExterior()} />
                    <mesh name="bar1002_2" geometry={nodes.bar1002_2.geometry} material={matInterior()} />
                </group>
                <group name="frame1" position={[0, 0, 0.042]}>
                    <mesh name="frame1_1" geometry={nodes.frame1_1.geometry} material={matExterior()} />
                    <mesh name="frame1_2" geometry={nodes.frame1_2.geometry} material={matInterior()} />
                </group>
                <mesh name="lock" geometry={nodes.lock.geometry} material={materials.Black} position={[-0.002, -0.624, 0.003]} rotation={[-0.702, 0, 0]} scale={0.027} />
                <group name="flat0" position={[0, 0, 0.063]} visible={gridSwitch(1, 0)}>
                    <mesh name="flat0_1" geometry={nodes.flat0_1.geometry} material={matExterior()} />
                    <mesh name="flat0_2" geometry={nodes.flat0_2.geometry} material={matInterior()} />
                </group>
                <group name="gbg0" position={[0, 0.001, 0.063]} visible={gridSwitch(2, 0)}>
                    <mesh name="gbg0_1" geometry={nodes.gbg0_1.geometry} material={matExterior()} />
                    <mesh name="gbg0_2" geometry={nodes.gbg0_2.geometry} material={matInterior()} />
                </group>
                <group name="sdl0" position={[0, 0, 0.063]} visible={gridSwitch(3, 0)}>
                    <mesh name="sdl0_1" geometry={nodes.sdl0_1.geometry} material={matExterior()} />
                    <mesh name="sdl0_2" geometry={nodes.sdl0_2.geometry} material={matInterior()} />
                </group>
                <group name="flat1" position={[0, 0, 0.063]} visible={gridSwitch(1, 1)}>
                    <mesh name="flat1_1" geometry={nodes.flat1_1.geometry} material={matExterior()} />
                    <mesh name="flat1_2" geometry={nodes.flat1_2.geometry} material={matInterior()} />
                </group>
                <group name="gbg1" position={[0, 0.001, 0.063]} visible={gridSwitch(2, 1)}>
                    <mesh name="gbg1_1" geometry={nodes.gbg1_1.geometry} material={matExterior()} />
                    <mesh name="gbg1_2" geometry={nodes.gbg1_2.geometry} material={matInterior()} />
                </group>
                <group name="sdl1" position={[0, 0, 0.063]} visible={gridSwitch(3, 1)}>
                    <mesh name="sdl1_1" geometry={nodes.sdl1_1.geometry} material={matExterior()} />
                    <mesh name="sdl1_2" geometry={nodes.sdl1_2.geometry} material={matInterior()} />
                </group>
                <group name="flat2" position={[0, 0, 0.063]} visible={gridSwitch(1, 2)}>
                    <mesh name="flat2_1" geometry={nodes.flat2_1.geometry} material={matExterior()} />
                    <mesh name="flat2_2" geometry={nodes.flat2_2.geometry} material={matInterior()} />
                </group>
                <group name="gbg2" position={[0, 0.001, 0.063]} visible={gridSwitch(2, 2)}>
                    <mesh name="gbg2_1" geometry={nodes.gbg2_1.geometry} material={matExterior()} />
                    <mesh name="gbg2_2" geometry={nodes.gbg2_2.geometry} material={matInterior()} />
                </group>
                <group name="sdl2" position={[0, 0, 0.063]} visible={gridSwitch(3, 2)}>
                    <mesh name="sdl2_1" geometry={nodes.sdl2_1.geometry} material={matExterior()} />
                    <mesh name="sdl2_2" geometry={nodes.sdl2_2.geometry} material={matInterior()} />
                </group>
                <group name="flat3" position={[0, 0, 0.063]} visible={gridSwitch(1, 3)}>
                    <mesh name="flat3_1" geometry={nodes.flat3_1.geometry} material={matExterior()} />
                    <mesh name="flat3_2" geometry={nodes.flat3_2.geometry} material={matInterior()} />
                </group>
                <group name="gbg3" position={[0, 0.001, 0.063]} visible={gridSwitch(2, 3)}>
                    <mesh name="gbg3_1" geometry={nodes.gbg3_1.geometry} material={matExterior()} />
                    <mesh name="gbg3_2" geometry={nodes.gbg3_2.geometry} material={matInterior()} />
                </group>
                <group name="sdl3" position={[0, 0, 0.063]} visible={gridSwitch(3, 3)}>
                    <mesh name="sdl3_1" geometry={nodes.sdl3_1.geometry} material={matExterior()} />
                    <mesh name="sdl3_2" geometry={nodes.sdl3_2.geometry} material={matInterior()} />
                </group>
                <mesh name="lock2002" geometry={nodes.lock2002.geometry} material={materials.Black} position={[0.373, -0.404, 0.016]} scale={0.529} />

            </group>
        </group>
    )
}

useGLTF.preload('/Lifestyle_Casement.glb')