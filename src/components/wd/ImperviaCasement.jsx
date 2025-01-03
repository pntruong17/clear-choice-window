/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 public/ClearView.glb 
*/

import { useGLTF, useAnimations } from '@react-three/drei'
import React, { useState, useEffect } from 'react'
import { LoopOnce } from 'three'
import { useSnapshot } from 'valtio'
import { state } from '../store'
import { gl } from '../../global'

export function ImperviaCasement(props) {
    const group = React.useRef()
    const { nodes, materials, animations } = useGLTF('/Impervia_Casement.glb')
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
        switch (_win.colorSelected) {
            case _win.color[0]:
                return materials.White;
            case _win.color[1]:
                return materials.Brown;
            case _win.color[2]:
                return materials.Black;
            case _win.color[3]:
                return materials.Tan;
            case _win.color[4]:
                return materials.MorningSkyGray;
            case _win.color[5]:
                return materials.White;
            case _win.color[6]:
                return materials.White;
            case _win.color[7]:
                return materials.White;
            case _win.color[8]:
                return materials.White;
            default:
                return 'Invalid value';
        }
    }

    function matExterior() {
        switch (_win.colorSelected) {
            case _win.color[0]:
                return materials.White;
            case _win.color[1]:
                return materials.Brown;
            case _win.color[2]:
                return materials.Black;
            case _win.color[3]:
                return materials.Tan;
            case _win.color[4]:
                return materials.MorningSkyGray;
            case _win.color[5]:
                return materials.Brown;
            case _win.color[6]:
                return materials.Black;
            case _win.color[7]:
                return materials.Tan;
            case _win.color[8]:
                return materials.MorningSkyGray;
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
                <mesh name="Black" geometry={nodes.Black.geometry} material={materials.Black} />
                <mesh name="Brown" geometry={nodes.Brown.geometry} material={materials.Brown} />
                <mesh name="MorningSkyGray" geometry={nodes.MorningSkyGray.geometry} material={materials.MorningSkyGray} />
                <mesh name="Tan" geometry={nodes.Tan.geometry} material={materials.Tan} />
                <mesh name="White" geometry={nodes.White.geometry} material={materials['White.001']} />
            </group>
            <group name="Scene">
                <group name="window" position={[0, 0, -0.067]} rotation={[Math.PI, 0, Math.PI]}>
                    <mesh name="window_1" geometry={nodes.window_1.geometry} material={matExterior()} />
                    <mesh name="window_2" geometry={nodes.window_2.geometry} material={matInterior()} />
                </group>
                <group name="frame1" position={[-0.368, 0, -0.009]} rotation={[Math.PI, 0, Math.PI]}>
                    <mesh name="frame1_1" geometry={nodes.frame1_1.geometry} material={matExterior()} />
                    <mesh name="frame1_2" geometry={nodes.frame1_2.geometry} material={matInterior()} />
                </group>
                <mesh name="bar1" geometry={nodes.bar1.geometry} material={matInterior()} position={[0, 0, -0.067]} rotation={[Math.PI, 0, Math.PI]} />
                <mesh name="bar2" geometry={nodes.bar2.geometry} material={matInterior()} position={[0, 0, -0.067]} rotation={[Math.PI, 0, Math.PI]} />
                <mesh name="glass1" geometry={nodes.glass1.geometry} material={materials['glass.001']} position={[0, 0, -0.014]} rotation={[Math.PI, 0, Math.PI]} scale={[1, 1, 0.914]} />
                <mesh name="button" geometry={nodes.button.geometry} material={materials.Black} position={[-0.346, -0.566, -0.048]} rotation={[Math.PI, 0, Math.PI]} />
                <mesh name="frame1001" geometry={nodes.frame1001.geometry} material={materials.Black} position={[-0.09, -0.608, -0.026]} rotation={[Math.PI, 0, Math.PI]} />
                <mesh name="Bolt" geometry={nodes.Bolt.geometry} material={materials.Black} position={[-0.206, -0.606, -0.023]} rotation={[Math.PI / 2, 0, Math.PI]} scale={0.772} />
                <mesh name="frame1002" geometry={nodes.frame1002.geometry} material={materials.Black} position={[-0.145, -0.604, -0.029]} rotation={[-Math.PI, 0.055, -Math.PI]} />
                <mesh name="lock1" geometry={nodes.lock1.geometry} material={materials.Black} position={[0.36, -0.373, -0.063]} rotation={[Math.PI, 0, Math.PI]} />
                <mesh name="lock2" geometry={nodes.lock2.geometry} material={materials.Black} position={[0.361, -0.354, -0.061]} rotation={[Math.PI, 0, Math.PI]} />
                <mesh name="lock3" geometry={nodes.lock3.geometry} material={materials.Black} position={[0.361, -0.354, -0.061]} rotation={[Math.PI, 0, Math.PI]} />

                <group name="flat0" position={[0, 0, -0.014]} scale={1.049} visible={gridSwitch(1, 0)}>
                    <mesh name="flat0_1" geometry={nodes.flat0_1.geometry} material={matExterior()} />
                    <mesh name="flat0_2" geometry={nodes.flat0_2.geometry} material={matInterior()} />
                </group>
                <group name="gbg0" position={[0, 0.001, -0.014]} rotation={[0, 0, -Math.PI / 2]} scale={1.049} visible={gridSwitch(2, 0)}>
                    <mesh name="gbg0_1" geometry={nodes.gbg0_1.geometry} material={matExterior()} />
                    <mesh name="gbg0_2" geometry={nodes.gbg0_2.geometry} material={matInterior()} />
                </group>
                <group name="sdl0" position={[0, 0, -0.014]} scale={1.049} visible={gridSwitch(3, 0)}>
                    <mesh name="sdl0_1" geometry={nodes.sdl0_1.geometry} material={matExterior()} />
                    <mesh name="sdl0_2" geometry={nodes.sdl0_2.geometry} material={matInterior()} />
                </group>
                <group name="flat1" position={[0, 0, -0.014]} scale={1.049} visible={gridSwitch(1, 1)}>
                    <mesh name="flat1_1" geometry={nodes.flat1_1.geometry} material={matExterior()} />
                    <mesh name="flat1_2" geometry={nodes.flat1_2.geometry} material={matInterior()} />
                </group>
                <group name="gbg1" position={[0, 0.001, -0.014]} rotation={[0, 0, -Math.PI / 2]} scale={1.049} visible={gridSwitch(2, 1)}>
                    <mesh name="gbg1_1" geometry={nodes.gbg1_1.geometry} material={matExterior()} />
                    <mesh name="gbg1_2" geometry={nodes.gbg1_2.geometry} material={matInterior()} />
                </group>
                <group name="sdl1" position={[0, 0, -0.014]} scale={1.049} visible={gridSwitch(3, 1)}>
                    <mesh name="sdl1_1" geometry={nodes.sdl1_1.geometry} material={matExterior()} />
                    <mesh name="sdl1_2" geometry={nodes.sdl1_2.geometry} material={matInterior()} />
                </group>
                <group name="flat2" position={[0, 0, -0.014]} scale={1.049} visible={gridSwitch(1, 2)}>
                    <mesh name="flat2_1" geometry={nodes.flat2_1.geometry} material={matExterior()} />
                    <mesh name="flat2_2" geometry={nodes.flat2_2.geometry} material={matInterior()} />
                </group>
                <group name="gbg2" position={[0, 0.001, -0.014]} rotation={[0, 0, -Math.PI / 2]} scale={1.049} visible={gridSwitch(2, 2)}>
                    <mesh name="gbg2_1" geometry={nodes.gbg2_1.geometry} material={matExterior()} />
                    <mesh name="gbg2_2" geometry={nodes.gbg2_2.geometry} material={matInterior()} />
                </group>
                <group name="sdl2" position={[0, 0, -0.014]} scale={1.049} visible={gridSwitch(3, 2)}>
                    <mesh name="sdl2_1" geometry={nodes.sdl2_1.geometry} material={matExterior()} />
                    <mesh name="sdl2_2" geometry={nodes.sdl2_2.geometry} material={matInterior()} />
                </group>
                <group name="flat3" position={[0, 0, -0.014]} scale={1.049} visible={gridSwitch(1, 3)}>
                    <mesh name="flat3_1" geometry={nodes.flat3_1.geometry} material={matExterior()} />
                    <mesh name="flat3_2" geometry={nodes.flat3_2.geometry} material={matInterior()} />
                </group>
                <group name="gbg3" position={[0, 0.001, -0.014]} rotation={[0, 0, -Math.PI / 2]} scale={1.049} visible={gridSwitch(2, 3)}>
                    <mesh name="gbg3_1" geometry={nodes.gbg3_1.geometry} material={matExterior()} />
                    <mesh name="gbg3_2" geometry={nodes.gbg3_2.geometry} material={matInterior()} />
                </group>
                <group name="sdl3" position={[0, 0, -0.014]} scale={1.049} visible={gridSwitch(3, 3)}>
                    <mesh name="sdl3_1" geometry={nodes.sdl3_1.geometry} material={matExterior()} />
                    <mesh name="sdl3_2" geometry={nodes.sdl3_2.geometry} material={matInterior()} />
                </group>

            </group>
        </group>
    )
}

useGLTF.preload('/Impervia_Casement.glb')