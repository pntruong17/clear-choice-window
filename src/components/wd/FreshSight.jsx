import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'
import { useSnapshot } from 'valtio'
import { state } from '../store'
import { gl } from '../../global'

export function FreshSight(props) {
  const offsetF2 = 0.52  // điều chỉnh gốc tọa độ xoay của vật
  const offsetPosF2 = 0 // điều chỉnh vị trí trục Y của vật
  const restPosF2 = -1 * offsetF2 - offsetPosF2 // trả về vị trí ban đầu của vật 

  const frame2 = useRef()
  const fullWindow = useRef()
  const _gl = useSnapshot(gl)
  const _win = useSnapshot(state)[_gl.window]
  const { nodes, materials } = useGLTF('/FreshSight.glb')
  console.log(_win.colorSelected)

  function matInterior() {
    switch (_win.colorSelected) {
      case _win.color[0]:
        return materials.White;
      case _win.color[1]:
        return materials.clay;
      case _win.color[2]:
        return materials.sandtone;
      case _win.color[3]:
        return materials.White;
      case _win.color[4]:
        return materials.White;
      default:
        return 'Invalid value';
    }
  }

  function matExterior() {
    switch (_win.colorSelected) {
      case _win.color[0]:
        return materials.white;
      case _win.color[1]:
        return materials.clay;
      case _win.color[2]:
        return materials.sandtone;
      case _win.color[3]:
        return materials.black;
      case _win.color[4]:
        return materials.bronze;
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
    //_win.anims[0] && !_win.anims[1] ? easing.damp3(frame1.current.position, [0, restPosF1 - 0.5, 0], 0.4, delta) : easing.damp3(frame1.current.position, [0, restPosF1, 0], 0.4, delta)
    _win.anims[0] && !_win.anims[1] ? easing.damp3(frame2.current.position, [0, restPosF2 + 0.9, 0], 0.4, delta) : easing.damp3(frame2.current.position, [0, restPosF2, 0], 0.4, delta)

    _win.anims[1] ? easing.damp3(frame2.current.position, [0, restPosF2 + 0.1, 0], 0.4, delta) : easing.damp3(frame2.current.position, [0, restPosF2, 0], 0.4, delta)
    _win.anims[1] ? easing.dampE(frame2.current.rotation, [49, 0, 0], 0.3, delta) : easing.dampE(frame2.current.rotation, [0, 0.0, 0], 0.3, delta)

    //_win.anims[1] ? easing.damp3(frame1.current.position, [0, restPosF1 - 0.3, 0], 0.4, delta) : easing.damp3(frame1.current.position, [0, restPosF1, 0], 0.4, delta)
    //_win.anims[1] ? easing.dampE(frame1.current.rotation, [0, 0, 49], 0.3, delta) : easing.dampE(frame1.current.rotation, [0, 0.0, 0], 0.3, delta)
  })
  return (

    <>

      <group ref={fullWindow} {...props} dispose={null}>

        <group ref={frame2} position={[0, -1 * offsetF2, 0]}>
          <group position={[0, offsetF2, 0]}>
            <mesh geometry={nodes.frame2_glass.geometry} material={materials['glass.001']} />
            <mesh geometry={nodes.frame2_p1.geometry} material={matInterior()} />
            <mesh geometry={nodes.frame2_p2.geometry} material={matInterior()} />
            <mesh geometry={nodes.frame2_p3.geometry} material={matInterior()} />
            <mesh geometry={nodes.frame2_bolt.geometry} material={materials.metal} />
            <mesh geometry={nodes.frame2_1.geometry} material={matExterior()} />
            <mesh geometry={nodes.frame2_2.geometry} material={matInterior()} />

            <mesh geometry={nodes.sdl0_down_1.geometry} material={matExterior()} visible={gridSwitch(2, 0)} />
            <mesh geometry={nodes.sdl0_down_2.geometry} material={matInterior()} visible={gridSwitch(2, 0)} />
            <mesh geometry={nodes.flat0_down_1.geometry} material={matExterior()} visible={gridSwitch(1, 0)} />
            <mesh geometry={nodes.flat0_down_2.geometry} material={matInterior()} visible={gridSwitch(1, 0)} />
            <mesh geometry={nodes.flat1_down_1.geometry} material={matExterior()} visible={gridSwitch(1, 1)} />
            <mesh geometry={nodes.flat1_down_2.geometry} material={matInterior()} visible={gridSwitch(1, 1)} />
            <mesh geometry={nodes.sdl1_down_1.geometry} material={matExterior()} visible={gridSwitch(2, 1)} />
            <mesh geometry={nodes.sdl1_down_2.geometry} material={matInterior()} visible={gridSwitch(2, 1)} />
            <mesh geometry={nodes.flat2_down_1.geometry} material={matExterior()} visible={gridSwitch(1, 2)} />
            <mesh geometry={nodes.flat2_down_2.geometry} material={matInterior()} visible={gridSwitch(1, 2)} />
            <mesh geometry={nodes.sdl2_down_1.geometry} material={matExterior()} visible={gridSwitch(2, 2)} />
            <mesh geometry={nodes.sdl2_down_2.geometry} material={matInterior()} visible={gridSwitch(2, 2)} />
            <mesh geometry={nodes.flat3_down_1.geometry} material={matExterior()} visible={gridSwitch(1, 3)} />
            <mesh geometry={nodes.flat3_down_2.geometry} material={matInterior()} visible={gridSwitch(1, 3)} />
            <mesh geometry={nodes.sdl3_down_1.geometry} material={matExterior()} visible={gridSwitch(2, 3)} />
            <mesh geometry={nodes.sdl3_down_2.geometry} material={matInterior()} visible={gridSwitch(2, 3)} />
            <mesh geometry={nodes.flat4_down_1.geometry} material={matExterior()} visible={gridSwitch(1, 4)} />
            <mesh geometry={nodes.flat4_down_2.geometry} material={matInterior()} visible={gridSwitch(1, 4)} />
            <mesh geometry={nodes.sdl4_down_1.geometry} material={matExterior()} visible={gridSwitch(2, 4)} />
            <mesh geometry={nodes.sdl4_down_2.geometry} material={matInterior()} visible={gridSwitch(2, 4)} />
            <mesh geometry={nodes.flat5_down_1.geometry} material={matExterior()} visible={gridSwitch(1, 5)} />
            <mesh geometry={nodes.flat5_down_2.geometry} material={matInterior()} visible={gridSwitch(1, 5)} />
            <mesh geometry={nodes.sdl5_down_1.geometry} material={matExterior()} visible={gridSwitch(2, 5)} />
            <mesh geometry={nodes.sdl5_down_2.geometry} material={matInterior()} visible={gridSwitch(2, 5)} />
          </group>
        </group>

        <group visible={false}>
          <mesh geometry={nodes.white.geometry} material={materials.white} />
          <mesh geometry={nodes.glass.geometry} material={materials['glass.001']} />
          <mesh geometry={nodes.clay.geometry} material={materials.clay} />
          <mesh geometry={nodes.sandtone.geometry} material={materials.sandtone} />
          <mesh geometry={nodes.bronze.geometry} material={materials.bronze} />
          <mesh geometry={nodes.black.geometry} material={materials.black} />
          <mesh geometry={nodes.metal.geometry} material={materials.metal} />
        </group>

        <mesh geometry={nodes.cut1021.geometry} material={matInterior()} />
        <mesh geometry={nodes.glass1005.geometry} material={materials['glass.001']} />
        <mesh geometry={nodes.bolt1001.geometry} material={materials.metal} />
        <mesh geometry={nodes.cut1028.geometry} material={matExterior()} />
        <mesh geometry={nodes.frame3b_glass.geometry} material={materials['glass.001']} visible={switchScreen("Half Screen")} />
        <mesh geometry={nodes.window_1.geometry} material={matExterior()} />
        <mesh geometry={nodes.window_2.geometry} material={matInterior()} />
        <mesh geometry={nodes.frame3b_1.geometry} material={matExterior()} visible={switchScreen("Half Screen")} />
        <mesh geometry={nodes.frame3b_2.geometry} material={matExterior()} visible={switchScreen("Half Screen")} />

        <mesh geometry={nodes.sdl0_up_1.geometry} material={matExterior()} visible={gridSwitch(2, 0)} />
        <mesh geometry={nodes.sdl0_up_2.geometry} material={matInterior()} visible={gridSwitch(2, 0)} />
        <mesh geometry={nodes.flat0_up_1.geometry} material={matExterior()} visible={gridSwitch(1, 0)} />
        <mesh geometry={nodes.flat0_up_2.geometry} material={matInterior()} visible={gridSwitch(1, 0)} />
        <mesh geometry={nodes.flat1_up_1.geometry} material={matExterior()} visible={gridSwitch(1, 1)} />
        <mesh geometry={nodes.flat1_up_2.geometry} material={matInterior()} visible={gridSwitch(1, 1)} />
        <mesh geometry={nodes.sdl1_up_1.geometry} material={matExterior()} visible={gridSwitch(2, 1)} />
        <mesh geometry={nodes.sdl1_up_2.geometry} material={matInterior()} visible={gridSwitch(2, 1)} />
        <mesh geometry={nodes.flat2_up_1.geometry} material={matExterior()} visible={gridSwitch(1, 2)} />
        <mesh geometry={nodes.flat2_up_2.geometry} material={matInterior()} visible={gridSwitch(1, 2)} />
        <mesh geometry={nodes.sdl2_up_1.geometry} material={matExterior()} visible={gridSwitch(2, 2)} />
        <mesh geometry={nodes.sdl2_up_2.geometry} material={matInterior()} visible={gridSwitch(2, 2)} />
        <mesh geometry={nodes.flat3_up_1.geometry} material={matExterior()} visible={gridSwitch(1, 3)} />
        <mesh geometry={nodes.flat3_up_2.geometry} material={matInterior()} visible={gridSwitch(1, 3)} />
        <mesh geometry={nodes.sdl3_up_1.geometry} material={matExterior()} visible={gridSwitch(2, 3)} />
        <mesh geometry={nodes.sdl3_up_2.geometry} material={matInterior()} visible={gridSwitch(2, 3)} />
        <mesh geometry={nodes.flat4_up_1.geometry} material={matExterior()} visible={gridSwitch(1, 4)} />
        <mesh geometry={nodes.flat4_up_2.geometry} material={matInterior()} visible={gridSwitch(1, 4)} />
        <mesh geometry={nodes.sdl4_up_1.geometry} material={matExterior()} visible={gridSwitch(2, 4)} />
        <mesh geometry={nodes.sdl4_up_2.geometry} material={matInterior()} visible={gridSwitch(2, 4)} />
        <mesh geometry={nodes.flat5_up_1.geometry} material={matExterior()} visible={gridSwitch(1, 5)} />
        <mesh geometry={nodes.flat5_up_2.geometry} material={matInterior()} visible={gridSwitch(1, 5)} />
        <mesh geometry={nodes.sdl5_up_1.geometry} material={matExterior()} visible={gridSwitch(2, 5)} />
        <mesh geometry={nodes.sdl5_up_2.geometry} material={matInterior()} visible={gridSwitch(2, 5)} />
      </group>
    </>


  )
}

useGLTF.preload('/FreshSight.glb')
