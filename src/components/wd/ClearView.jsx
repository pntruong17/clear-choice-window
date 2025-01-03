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

export function ClearView(props) {
  const group = React.useRef()
  const { nodes, materials, animations } = useGLTF('/ClearView.glb')

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
        return materials.White;
      case _win.inColor[1]:
        return materials.Beige;
      case _win.inColor[2]:
        return materials.GoldenOak;
      case _win.inColor[3]:
        return materials.ProvincialWood;
      case _win.inColor[4]:
        return materials.BrazilianCherryWood;

      default:
        return 'Invalid value';
    }
  }

  function matExterior() {
    switch (_win.excolorSelected) {
      case _win.exColor[0]:
        return materials.White;
      case _win.exColor[1]:
        return materials.Beige;
      case _win.exColor[2]:
        return materials.Cashmere;
      case _win.exColor[3]:
        return materials.Ivory;
      case _win.exColor[4]:
        return materials.Wicker;
      case _win.exColor[5]:
        return materials.Sandalwood;
      case _win.exColor[6]:
        return materials.Clay;
      case _win.exColor[7]:
        return materials.Sandtone;
      case _win.exColor[8]:
        return materials.AmericanBrown;
      case _win.exColor[9]:
        return materials.UniversalBrown;
      case _win.exColor[10]:
        return materials.WedgeWoodBlue;
      case _win.exColor[11]:
        return materials.OldWorldBlue;
      case _win.exColor[12]:
        return materials.ForestGreen;
      case _win.exColor[13]:
        return materials.Sable;
      case _win.exColor[14]:
        return materials.Bronze;
      case _win.exColor[15]:
        return materials.Black;
      case _win.exColor[16]:
        return materials.Cranberry;
      case _win.exColor[17]:
        return materials.Burgundy;
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
        <mesh name="AmericanBrown" geometry={nodes.AmericanBrown.geometry} material={materials.AmericanBrown} />
        <mesh name="Beige" geometry={nodes.Beige.geometry} material={materials.Beige} />
        <mesh name="Black" geometry={nodes.Black.geometry} material={materials.Black} />
        <mesh name="Burgundy" geometry={nodes.Burgundy.geometry} material={materials.Burgundy} />
        <mesh name="Cashmere" geometry={nodes.Cashmere.geometry} material={materials.Cashmere} />
        <mesh name="Clay" geometry={nodes.Clay.geometry} material={materials.Clay} />
        <mesh name="Cranberry" geometry={nodes.Cranberry.geometry} material={materials.Cranberry} />
        <mesh name="Ivory" geometry={nodes.Ivory.geometry} material={materials.Ivory} />
        <mesh name="OldWorldBlue" geometry={nodes.OldWorldBlue.geometry} material={materials.OldWorldBlue} />
        <mesh name="Sable" geometry={nodes.Sable.geometry} material={materials.Sable} />
        <mesh name="Sandalwood" geometry={nodes.Sandalwood.geometry} material={materials.Sandalwood} />
        <mesh name="Sandtone" geometry={nodes.Sandtone.geometry} material={materials.Sandtone} />
        <mesh name="UniversalBrown" geometry={nodes.UniversalBrown.geometry} material={materials.UniversalBrown} />
        <mesh name="WedgeWoodBlue" geometry={nodes.WedgeWoodBlue.geometry} material={materials.WedgeWoodBlue} />
        <mesh name="Wicker" geometry={nodes.Wicker.geometry} material={materials.Wicker} />
        <mesh name="OakWood" geometry={nodes.OakWood.geometry} material={materials.OakWood} />
        <mesh name="BrazilianCherryWood" geometry={nodes.BrazilianCherryWood.geometry} material={materials.BrazilianCherryWood} />
        <mesh name="ProvincialWood" geometry={nodes.ProvincialWood.geometry} material={materials.ProvincialWood} />
        <mesh name="GoldenOak" geometry={nodes.GoldenOak.geometry} material={materials.GoldenOak} />
        <mesh name="White" geometry={nodes.White.geometry} material={materials['White.001']} />
        <mesh name="Brown" geometry={nodes.Brown.geometry} material={materials.Brown} />
        <mesh name="Bronze" geometry={nodes.Bronze.geometry} material={materials.Bronze} />
        <mesh name="ForestGreen" geometry={nodes.ForestGreen.geometry} material={materials.ForestGreen} />
      </group>
      <group name="Scene">
        <group name="window001" position={[-0.11, 0, 0]}>
          <mesh name="w1" geometry={nodes.w1.geometry} material={matExterior()} />
          <mesh name="w1_1" geometry={nodes.w1_1.geometry} material={matInterior()} />
        </group>
        <group name="window" position={[0, 0, -0.022]}>
          <mesh name="window_1" geometry={nodes.window_1.geometry} material={matExterior()} />
          <mesh name="window_2" geometry={nodes.window_2.geometry} material={matInterior()} />
        </group>
        <mesh name="glass" geometry={nodes.glass.geometry} material={materials['glass.001']} position={[0, 0, 0.013]} />
        <mesh name="lock4" geometry={nodes.lock4.geometry} material={matInterior()} position={[0.231, -0.116, -0.057]} />
        <mesh name="lock3" geometry={nodes.lock3.geometry} material={matInterior()} position={[0.228, -0.087, -0.056]} />
        <mesh name="moc2" geometry={nodes.moc2.geometry} material={nodes.moc2.material} position={[0.228, -0.185, -0.017]} />
        <mesh name="metal1" geometry={nodes.metal1.geometry} material={materials.metal} position={[0.219, -0.086, 0.001]} />
        <mesh name="bar4" geometry={nodes.bar4.geometry} material={nodes.bar4.material} position={[0.062, 0.317, 0.01]} rotation={[0, 0.001, 0]} />
        <mesh name="Bolt005" geometry={nodes.Bolt005.geometry} material={nodes.Bolt005.material} position={[0.061, -0.321, 0.01]} />
        <mesh name="metal6" geometry={nodes.metal6.geometry} material={materials.metal} position={[-0.24, 0, 0.024]} />
        <mesh name="bar3" geometry={nodes.bar3.geometry} material={nodes.bar3.material} position={[-0.009, -0.32, 0.001]} rotation={[0, 0.019, 0]} />
        <mesh name="bar2" geometry={nodes.bar2.geometry} material={nodes.bar2.material} position={[0.016, 0.322, 0.01]} />
        <mesh name="bar1" geometry={nodes.bar1.geometry} material={nodes.bar1.material} position={[0.016, -0.322, 0.01]} />
        <mesh name="Cube031" geometry={nodes.Cube031.geometry} material={nodes.Cube031.material} position={[-0.027, 0.315, -0.013]} rotation={[0, 0.005, 0]} />
        <mesh name="lock2" geometry={nodes.lock2.geometry} material={nodes.lock2.material} position={[0.023, -0.316, -0.061]} rotation={[0.379, -1.511, 1.725]} />
        <mesh name="metal2" geometry={nodes.metal2.geometry} material={materials.metal} position={[0.227, -0.044, 0.005]} />
        <mesh name="moc1" geometry={nodes.moc1.geometry} material={nodes.moc1.material} position={[0.227, 0.178, 0.005]} />
        <mesh name="lock1" geometry={nodes.lock1.geometry} material={matInterior()} position={[0.031, -0.321, -0.047]} />
        <mesh name="Bolt006" geometry={nodes.Bolt006.geometry} material={nodes.Bolt006.material} position={[-0.072, -0.321, 0.003]} rotation={[Math.PI, -1.224, Math.PI]} />
        <mesh name="Bolt007" geometry={nodes.Bolt007.geometry} material={nodes.Bolt007.material} position={[-0.108, 0.312, -0.011]} rotation={[0, 1.477, 0]} />
        <mesh name="Cube027" geometry={nodes.Cube027.geometry} material={nodes.Cube027.material} position={[-0.073, -0.317, 0.002]} rotation={[0, 0.071, 0]} />
        <mesh name="Plane001" geometry={nodes.Plane001.geometry} material={matInterior()} position={[0.026, -0.315, -0.067]} rotation={[-2.845, -0.973, 1.635]} />
        <mesh name="metal3" geometry={nodes.metal3.geometry} material={materials.metal} position={[0.22, -0.106, -0.005]} rotation={[0, 0, -Math.PI / 2]} />
        <mesh name="metal4" geometry={nodes.metal4.geometry} material={materials.metal} position={[0.222, -0.106, 0.005]} rotation={[0, 0, -Math.PI / 2]} />
        <mesh name="metal5" geometry={nodes.metal5.geometry} material={materials.metal} position={[0.217, -0.106, 0.005]} rotation={[0, 0, -Math.PI / 2]} />
        <group name="sdl0" position={[0, 0, 0.003]} scale={1.074} visible={gridSwitch(3, 0)}>
          <mesh name="sdl0_1" geometry={nodes.sdl0_1.geometry} material={matExterior()} />
          <mesh name="sdl0_2" geometry={nodes.sdl0_2.geometry} material={matInterior()} />
        </group>
        <group name="flat0" position={[0, 0, 0.003]} scale={1.074} visible={gridSwitch(1, 0)}>
          <mesh name="flat0_1" geometry={nodes.flat0_1.geometry} material={matExterior()} />
          <mesh name="flat0_2" geometry={nodes.flat0_2.geometry} material={matInterior()} />
        </group>
        <group name="gbg0" position={[0, 0, 0.003]} scale={1.074} visible={gridSwitch(2, 0)}>
          <mesh name="gbg0_1" geometry={nodes.gbg0_1.geometry} material={matExterior()} />
          <mesh name="gbg0_2" geometry={nodes.gbg0_2.geometry} material={matInterior()} />
        </group>
        <group name="flat1" position={[0, 0, 0.003]} scale={1.074} visible={gridSwitch(1, 1)}>
          <mesh name="flat1_1" geometry={nodes.flat1_1.geometry} material={matExterior()} />
          <mesh name="flat1_2" geometry={nodes.flat1_2.geometry} material={matInterior()} />
        </group>
        <group name="sdl1" position={[0, 0, 0.003]} scale={1.074} visible={gridSwitch(3, 1)}>
          <mesh name="sdl1_1" geometry={nodes.sdl1_1.geometry} material={matExterior()} />
          <mesh name="sdl1_2" geometry={nodes.sdl1_2.geometry} material={matInterior()} />
        </group>
        <group name="gbg1" position={[0, 0, 0.003]} rotation={[0, 0, -Math.PI / 2]} scale={1.074} visible={gridSwitch(2, 1)}>
          <mesh name="gbg1_1" geometry={nodes.gbg1_1.geometry} material={matExterior()} />
          <mesh name="gbg1_2" geometry={nodes.gbg1_2.geometry} material={matInterior()} />
        </group>
        <group name="flat2" position={[0, 0, 0.003]} scale={1.074} visible={gridSwitch(1, 2)}>
          <mesh name="flat2_1" geometry={nodes.flat2_1.geometry} material={matExterior()} />
          <mesh name="flat2_2" geometry={nodes.flat2_2.geometry} material={matInterior()} />
        </group>
        <group name="gbg2" position={[0, 0, 0.003]} rotation={[0, 0, -Math.PI / 2]} scale={1.074} visible={gridSwitch(2, 2)}>
          <mesh name="gbg2_1" geometry={nodes.gbg2_1.geometry} material={matExterior()} />
          <mesh name="gbg2_2" geometry={nodes.gbg2_2.geometry} material={matInterior()} />
        </group>
        <group name="sdl2" position={[0, 0, 0.003]} scale={1.074} visible={gridSwitch(3, 2)}>
          <mesh name="sdl2_1" geometry={nodes.sdl2_1.geometry} material={matExterior()} />
          <mesh name="sdl2_2" geometry={nodes.sdl2_2.geometry} material={matInterior()} />
        </group>
        <group name="flat3" position={[0, 0, 0.003]} scale={1.074} visible={gridSwitch(1, 3)}>
          <mesh name="flat3_1" geometry={nodes.flat3_1.geometry} material={matExterior()} />
          <mesh name="flat3_2" geometry={nodes.flat3_2.geometry} material={matInterior()} />
        </group>
        <group name="gbg3" position={[0, 0, 0.003]} rotation={[0, 0, -Math.PI / 2]} scale={1.074} visible={gridSwitch(2, 3)}>
          <mesh name="gbg3_1" geometry={nodes.gbg3_1.geometry} material={matExterior()} />
          <mesh name="gbg3_2" geometry={nodes.gbg3_2.geometry} material={matInterior()} />
        </group>
        <group name="sdl3" position={[0, 0, 0.003]} scale={1.074} visible={gridSwitch(3, 3)}>
          <mesh name="sdl3_1" geometry={nodes.sdl3_1.geometry} material={matExterior()} />
          <mesh name="sdl3_2" geometry={nodes.sdl3_2.geometry} material={matInterior()} />
        </group>
        <mesh name="screen" geometry={nodes.screen.geometry} material={matInterior()} position={[0, 0, -0.049]} visible={switchScreen('Full Screen')} />
        <mesh name="screen_glass" geometry={nodes.screen_glass.geometry} material={materials['glass.001']} position={[0, 0, -0.047]} visible={switchScreen('Full Screen')} />

      </group>
    </group>
  )
}

useGLTF.preload('/ClearView.glb')