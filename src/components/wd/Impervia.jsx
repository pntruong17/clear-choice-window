import React, { useRef } from 'react'
import * as THREE from 'three';
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'
import { useSnapshot } from 'valtio'
import { state } from '../store'
import { gl } from '../../global'

export function Impervia(props) {
  const { nodes, materials } = useGLTF('/Impervia.glb')
  const offsetF2 = 0.38  // điều chỉnh gốc tọa độ xoay của vật
  const offsetPosF2 = 0 // điều chỉnh vị trí trục Y của vật
  const restPosF2 = -1 * offsetF2 - offsetPosF2 // trả về vị trí ban đầu của vật 

  const offsetF1 = 0.0
  const offsetPosF1 = 0
  const restPosF1 = -1 * offsetF1 - offsetPosF1
  const frame1 = useRef()
  const frame2 = useRef()
  const fullWindow = useRef()
  const _gl = useSnapshot(gl)
  const _win = useSnapshot(state)[_gl.window]

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
  useFrame((state, delta) => {
    //!_gl.intro && easing.dampE(fullWindow.current.rotation, [0, 45, 0], 0.5, delta)
    _win.anims[0] && !_win.anims[1] ? easing.damp3(frame1.current.position, [0, restPosF1 - 0.5, 0], 0.4, delta) : easing.damp3(frame1.current.position, [0, restPosF1, 0], 0.4, delta)
    _win.anims[0] && !_win.anims[1] ? easing.damp3(frame2.current.position, [0, restPosF2 + 0.5, 0], 0.4, delta) : easing.damp3(frame2.current.position, [0, restPosF2, 0], 0.4, delta)

    _win.anims[1] ? easing.damp3(frame2.current.position, [0, restPosF2 + 0.1, 0], 0.4, delta) : easing.damp3(frame2.current.position, [0, restPosF2, 0], 0.4, delta)
    _win.anims[1] ? easing.dampE(frame2.current.rotation, [49, 0, 0], 0.3, delta) : easing.dampE(frame2.current.rotation, [0, 0.0, 0], 0.3, delta)

    _win.anims[1] ? easing.damp3(frame1.current.position, [0, restPosF1 - 0.3, 0], 0.4, delta) : easing.damp3(frame1.current.position, [0, restPosF1, 0], 0.4, delta)
    _win.anims[1] ? easing.dampE(frame1.current.rotation, [49, 0, 0], 0.3, delta) : easing.dampE(frame1.current.rotation, [0, 0.0, 0], 0.3, delta)
  })
  return (

    <>

      <group ref={fullWindow} {...props} dispose={null}>
        <group visible={false}>
          <mesh geometry={nodes.Black.geometry} material={materials.Black} />
          <mesh geometry={nodes.Brown.geometry} material={materials.Brown} />
          <mesh geometry={nodes.MorningSkyGray.geometry} material={materials.MorningSkyGray} />
          <mesh geometry={nodes.Tan.geometry} material={materials.Tan} />
          <mesh geometry={nodes.White.geometry} material={materials.White} />
        </group>

        <group ref={frame1} position={[0, -1 * offsetF1, 0]}>
          <group position={[0, offsetF1, 0]}>
            <mesh geometry={nodes.frame1_glass.geometry} material={materials['glass.001']} />
            <mesh geometry={nodes.frame1_p1.geometry} material={matInterior()} />
            <mesh geometry={nodes.frame1_1.geometry} material={matExterior()} />
            <mesh geometry={nodes.frame1_2.geometry} material={matInterior()} />

            <mesh geometry={nodes.gbg0_up_1.geometry} material={matExterior()} visible={gridSwitch(1, 0)} />
            <mesh geometry={nodes.gbg0_up_2.geometry} material={matInterior()} visible={gridSwitch(1, 0)} />
            <mesh geometry={nodes.sdl0_up_1.geometry} material={matExterior()} visible={gridSwitch(2, 0)} />
            <mesh geometry={nodes.sdl0_up_2.geometry} material={matInterior()} visible={gridSwitch(2, 0)} />
            <mesh geometry={nodes.gbg1_up_1.geometry} material={matExterior()} visible={gridSwitch(1, 1)} />
            <mesh geometry={nodes.gbg1_up_2.geometry} material={matInterior()} visible={gridSwitch(1, 1)} />
            <mesh geometry={nodes.sdl1_up_1.geometry} material={matExterior()} visible={gridSwitch(2, 1)} />
            <mesh geometry={nodes.sdl1_up_2.geometry} material={matInterior()} visible={gridSwitch(2, 1)} />
            <mesh geometry={nodes.gbg2_up_1.geometry} material={matExterior()} visible={gridSwitch(1, 2)} />
            <mesh geometry={nodes.gbg2_up_2.geometry} material={matInterior()} visible={gridSwitch(1, 2)} />
            <mesh geometry={nodes.sdl2_up_1.geometry} material={matExterior()} visible={gridSwitch(2, 2)} />
            <mesh geometry={nodes.sdl2_up_2.geometry} material={matInterior()} visible={gridSwitch(2, 2)} />
            <mesh geometry={nodes.gbg3_up_1.geometry} material={matExterior()} visible={gridSwitch(1, 3)} />
            <mesh geometry={nodes.gbg3_up_2.geometry} material={matInterior()} visible={gridSwitch(1, 3)} />
            <mesh geometry={nodes.sdl3_up_1.geometry} material={matExterior()} visible={gridSwitch(2, 3)} />
            <mesh geometry={nodes.sdl3_up_2.geometry} material={matInterior()} visible={gridSwitch(2, 3)} />
            <mesh geometry={nodes.gbg4_up_1.geometry} material={matExterior()} visible={gridSwitch(1, 4)} />
            <mesh geometry={nodes.gbg4_up_2.geometry} material={matInterior()} visible={gridSwitch(1, 4)} />
            <mesh geometry={nodes.sdl4_up_1.geometry} material={matExterior()} visible={gridSwitch(2, 4)} />
            <mesh geometry={nodes.sdl4_up_2.geometry} material={matInterior()} visible={gridSwitch(2, 4)} />
            <mesh geometry={nodes.gbg5_up_1.geometry} material={matExterior()} visible={gridSwitch(1, 5)} />
            <mesh geometry={nodes.gbg5_up_2.geometry} material={matInterior()} visible={gridSwitch(1, 5)} />
            <mesh geometry={nodes.sdl5_up_1.geometry} material={matExterior()} visible={gridSwitch(2, 5)} />
            <mesh geometry={nodes.sdl5_up_2.geometry} material={matInterior()} visible={gridSwitch(2, 5)} />
          </group>
        </group>

        <group ref={frame2} position={[0, -1 * offsetF2, 0]}>
          <group position={[0, offsetF2, 0]}>
            <mesh geometry={nodes.frame2_glass.geometry} material={materials['glass.001']} />
            <mesh geometry={nodes.frame2_p1.geometry} material={matInterior()} />
            <mesh geometry={nodes.frame2_p2.geometry} material={matInterior()} />
            <mesh geometry={nodes.frame2_1.geometry} material={matExterior()} />
            <mesh geometry={nodes.frame2_2.geometry} material={matInterior()} />

            <mesh geometry={nodes.gbg0_down_1.geometry} material={matExterior()} visible={gridSwitch(1, 0)} />
            <mesh geometry={nodes.gbg0_down_2.geometry} material={matInterior()} visible={gridSwitch(1, 0)} />
            <mesh geometry={nodes.sdl0_down_1.geometry} material={matExterior()} visible={gridSwitch(2, 0)} />
            <mesh geometry={nodes.sdl0_down_2.geometry} material={matInterior()} visible={gridSwitch(2, 0)} />
            <mesh geometry={nodes.gbg1_down_1.geometry} material={matExterior()} visible={gridSwitch(1, 1)} />
            <mesh geometry={nodes.gbg1_down_2.geometry} material={matInterior()} visible={gridSwitch(1, 1)} />
            <mesh geometry={nodes.sdl1_down_1.geometry} material={matExterior()} visible={gridSwitch(2, 1)} />
            <mesh geometry={nodes.sdl1_down_2.geometry} material={matInterior()} visible={gridSwitch(2, 1)} />
            <mesh geometry={nodes.gbg2_down_1.geometry} material={matExterior()} visible={gridSwitch(1, 2)} />
            <mesh geometry={nodes.gbg2_down_2.geometry} material={matInterior()} visible={gridSwitch(1, 2)} />
            <mesh geometry={nodes.sdl2_down_1.geometry} material={matExterior()} visible={gridSwitch(2, 2)} />
            <mesh geometry={nodes.sdl2_down_2.geometry} material={matInterior()} visible={gridSwitch(2, 2)} />
            <mesh geometry={nodes.gbg3_down_1.geometry} material={matExterior()} visible={gridSwitch(1, 3)} />
            <mesh geometry={nodes.gbg3_down_2.geometry} material={matInterior()} visible={gridSwitch(1, 3)} />
            <mesh geometry={nodes.sdl3_down_1.geometry} material={matExterior()} visible={gridSwitch(2, 3)} />
            <mesh geometry={nodes.sdl3_down_2.geometry} material={matInterior()} visible={gridSwitch(2, 3)} />
            <mesh geometry={nodes.gbg4_down_1.geometry} material={matExterior()} visible={gridSwitch(1, 4)} />
            <mesh geometry={nodes.gbg4_down_2.geometry} material={matInterior()} visible={gridSwitch(1, 4)} />
            <mesh geometry={nodes.sdl4_down_1.geometry} material={matExterior()} visible={gridSwitch(2, 4)} />
            <mesh geometry={nodes.sdl4_down_2.geometry} material={matInterior()} visible={gridSwitch(2, 4)} />
            <mesh geometry={nodes.gbg5_down_1.geometry} material={matExterior()} visible={gridSwitch(1, 5)} />
            <mesh geometry={nodes.gbg5_down_2.geometry} material={matInterior()} visible={gridSwitch(1, 5)} />
            <mesh geometry={nodes.sdl5_down_1.geometry} material={matExterior()} visible={gridSwitch(2, 5)} />
            <mesh geometry={nodes.sdl5_down_2.geometry} material={matInterior()} visible={gridSwitch(2, 5)} />
          </group>
        </group>

        <mesh geometry={nodes.frame3_full_glass.geometry} material={materials['glass.001']} visible={switchScreen('Full Screen')} />
        <mesh geometry={nodes.frame3_half_down_glass.geometry} material={materials['glass.001']} visible={switchScreen('Half Screen')} />
        <mesh geometry={nodes.frame3_full_1.geometry} material={matExterior()} visible={switchScreen('Full Screen')} />
        <mesh geometry={nodes.frame3_full_2.geometry} material={matInterior()} visible={switchScreen('Full Screen')} />
        <mesh geometry={nodes.frame3_half_down_1.geometry} material={materials.Color1} visible={switchScreen('Half Screen')} />
        <mesh geometry={nodes.frame3_half_down_2.geometry} material={matInterior()} visible={switchScreen('Half Screen')} />
        <mesh geometry={nodes.window1002.geometry} material={matExterior()} />
        <mesh geometry={nodes.window1002_1.geometry} material={matInterior()} />
      </group>
    </>

  )
}

useGLTF.preload('/Impervia.glb')
