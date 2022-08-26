import React, { useEffect } from "react";
import "./Scene.css";
import Matter from "matter-js";
import { createRef } from "react";
import Image from "../../assets/logo.svg";

const Scene = () => {
  const scene = createRef();

  useEffect(() => {
    const cw = document.body.clientWidth;
    const ch = 800;

    const Engine = Matter.Engine,
      Render = Matter.Render,
      Runner = Matter.Runner,
      World = Matter.World,
      Composites = Matter.Composites,
      Bodies = Matter.Bodies,
      Events = Matter.Events,
      Mouse = Matter.Mouse,
      MouseConstraint = Matter.MouseConstraint;

    const engine = Engine.create({
      // positionIterations: 20
    });

    const render = Render.create({
      element: scene.current,
      engine: engine,
      options: {
        width: cw,
        height: ch,
        wireframes: false,
        background: "white",
        showAngleIndicator: false,
        bounds: true,
        showBounds: false,
      },
    });

    // add bodies
    const stack = Composites.stack(10, 60, 20, 3, 20, 20, function (x, y) {
      return Bodies.circle(x, y, 40, {
        restitution: 0.7,
        friction: 0.05,
        density: 0.0005,
        render: { fillStyle: "#004737" },
      });
    });

    World.add(engine.world, [
      // walls
      Bodies.rectangle(cw / 2, -11, cw, 20, { isStatic: true }),
      Bodies.rectangle(-11, ch / 2, 20, ch, { isStatic: true }),
      Bodies.rectangle(cw / 2, ch + 11, cw, 20, { isStatic: true }),
      Bodies.rectangle(cw + 10, ch / 2, -19, ch, { isStatic: true }),
      stack,
    ]);

    // add mouse control
    const mouse = Mouse.create(render.canvas),
      mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          stiffness: 0.2,
          render: {
            visible: false,
          },
        },
      });

    World.add(engine.world, mouseConstraint);
    Events.on(mouseConstraint, "mousedown", function (event) {
      World.add(
        engine.world,
        Bodies.circle(150, 50, 40, {
          restitution: 0.7,
          render: { fillStyle: "#004737" },
        })
      );
    });
    mouseConstraint.mouse.element.removeEventListener(
      "mousewheel",
      mouseConstraint.mouse.mousewheel
    );
    mouseConstraint.mouse.element.removeEventListener(
      "DOMMouseScroll",
      mouseConstraint.mouse.mousewheel
    );

    Runner.run(engine);
    Render.run(render);

    return () => {
      Render.stop(render);
      World.clear(engine.world);
      Engine.clear(engine);
      render.canvas.remove();
      render.canvas = null;
      render.context = null;
      render.textures = {};
    };
  }, []);

  return (
    <div className="fallbox-canvas">
      <div ref={scene} style={{ width: "100%", height: "100%" }} />
    </div>
  );
};

export default Scene;
