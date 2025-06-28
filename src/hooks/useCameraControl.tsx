import { useFrame, useThree } from '@react-three/fiber';
import { useControls } from 'leva';
import React, { useState } from 'react';
import { useEffect } from 'react';
import * as THREE from 'three';

type cameraPos = {
  x: number;
  y: number;
  z: number;
};

const useCameraControl = () => {
  const camera = useThree().camera as THREE.PerspectiveCamera;

  // Camera cur position state
  const [position, setPositionState] = useState<cameraPos>({
    x: camera.position.x,
    y: camera.position.y,
    z: camera.position.z,
  });

  // Camera target state
  const [target, setTargetState] = useState<cameraPos>({
    x: camera.position.x,
    y: camera.position.y,
    z: camera.position.z,
  });

  const [near, setNearState] = useState<number>(0.1);
  const [far, setFarState] = useState<number>(500);
  const [fov, setFovState] = useState<number>(50);

  // Update camera pos
  useEffect(() => {
    camera.position.set(position.x, position.y, position.z);
  }, [position]);

  // Update camera target
  useEffect(() => {
    camera.lookAt(target.x, target.y, target.z);
  }, [target]);

  useEffect(() => {
    camera.near = near;
    camera.updateProjectionMatrix();
  }, [near]);

  useEffect(() => {
    camera.far = far;
    camera.updateProjectionMatrix();
  }, [far]);

  useEffect(() => {
    camera.fov = fov;
    camera.updateProjectionMatrix();
  }, [far]);

  // Set camera position
  const setPosition = (x: number, y: number, z: number) => {
    setPositionState((prev: cameraPos) => ({
      x: x,
      y: y,
      z: z,
    }));
  };

  // Set target position
  const setTarget = (x: number, y: number, z: number) => {
    setTargetState((prev: cameraPos) => ({
      x: x,
      y: y,
      z: z,
    }));
  };

  const setNear = (v: number) => {
    setNearState(v);
  };

  const setFar = (v: number) => {
    setFarState(v);
  };

  const setFov = (v: number) => {
    setFovState(v);
  };

  return {
    camera,
    position,
    target,
    near,
    far,
    fov,
    setPosition,
    setTarget,
    setNear,
    setFar,
    setFov,
  };
};

const useCameraControlTest = () => {
  const camera = useThree().camera as THREE.PerspectiveCamera;

  const { x, y, z, fov } = useControls({
    x: { value: 0, min: -10, max: 10, step: 0.1 },
    y: { value: 6.7, min: -10, max: 10, step: 0.1 },
    z: { value: 2, min: -10, max: 10, step: 0.1 },
    fov: { value: 50, min: 10, max: 100, step: 0.1 },
  });

  // Init position
  useEffect(() => {
    camera.position.set(x, y, z);
    camera.lookAt(0, 6.7, 2);
    camera.near = 0.1;
    camera.far = 500;
    camera.fov = fov;
    camera.updateProjectionMatrix();
  }, []);

  // Rendering when move position
  useEffect(() => {
    camera.position.set(x, y, z);
    camera.fov = fov;
  }, [x, y, z]);

  useEffect(() => {
    camera.fov = fov;
    camera.updateProjectionMatrix();
  }, [fov]);

  return { camera };
};

export default useCameraControl;
