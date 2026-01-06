"use client";

import { useEffect, useRef } from "react";

export default function PipelineBackground() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // --- Constants from your script ---
    const TO_RAD = Math.PI / 180;
    const TAU = Math.PI * 2;
    const HALF_PI = Math.PI / 2;

    const pipeCount = 30;
    const pipePropCount = 8;
    const pipePropsLength = pipeCount * pipePropCount;
    const turnCount = 8;
    const turnAmount = (360 / turnCount) * TO_RAD;
    const turnChanceRange = 58;
    const baseSpeed = 0.3;
    const rangeSpeed = 1;
    const baseTTL = 100;
    const rangeTTL = 300;
    const baseWidth = 2;
    const rangeWidth = 4;
  const baseHue = 110;
  const rangeHue = 40;
const backgroundColor = "hsla(120, 3%, 6%, 1.00)";

    // --- Helpers (your original code assumes these exist) ---
    const rand = (n: number) => Math.random() * n;
    const round = (n: number) => Math.round(n);
    const cos = (n: number) => Math.cos(n);
    const sin = (n: number) => Math.sin(n);
    const fadeInOut = (life: number, ttl: number) => {
      const half = ttl * 0.5;
      return life < half ? life / half : 1 - (life - half) / half;
    };

    // --- Canvas setup ---
    const container = containerRef.current;

    const canvasA = document.createElement("canvas");
    const canvasB = document.createElement("canvas");

    canvasB.style.position = "fixed";
    canvasB.style.top = "0";
    canvasB.style.left = "0";
    canvasB.style.width = "100%";
    canvasB.style.height = "100%";
    canvasB.style.pointerEvents = "none";
    canvasB.style.zIndex = "-1"; // behind everything

    container.appendChild(canvasB);

    const ctxA = canvasA.getContext("2d");
    const ctxB = canvasB.getContext("2d");

    if (!ctxA || !ctxB) return;

    const canvas = { a: canvasA, b: canvasB };
    const ctx = { a: ctxA, b: ctxB };

    const center: number[] = [];
    let tick = 0;
    let raf = 0;
    let pipeProps = new Float32Array(pipePropsLength);

    function initPipe(i: number) {
      const x = rand(canvas.a.width);
      const y = center[1];
      const direction = round(rand(1)) ? HALF_PI : TAU - HALF_PI;
      const speed = baseSpeed + rand(rangeSpeed);
      const life = 0;
      const ttl = baseTTL + rand(rangeTTL);
      const width = baseWidth + rand(rangeWidth);
      const hue = baseHue + rand(rangeHue);

      pipeProps.set([x, y, direction, speed, life, ttl, width, hue], i);
    }

    function initPipes() {
      pipeProps = new Float32Array(pipePropsLength);
      for (let i = 0; i < pipePropsLength; i += pipePropCount) initPipe(i);
    }

    function drawPipe(x: number, y: number, life: number, ttl: number, width: number, hue: number) {
      ctx.a.save();
      ctx.a.strokeStyle = `hsla(${hue},75%,50%,${fadeInOut(life, ttl) * 0.125})`;
      ctx.a.beginPath();
      ctx.a.arc(x, y, width, 0, TAU);
      ctx.a.stroke();
      ctx.a.closePath();
      ctx.a.restore();
    }

    function resize() {
      const { innerWidth, innerHeight } = window;

      canvas.a.width = innerWidth;
      canvas.a.height = innerHeight;
      ctx.a.drawImage(canvas.b, 0, 0);

      canvas.b.width = innerWidth;
      canvas.b.height = innerHeight;
      ctx.b.drawImage(canvas.a, 0, 0);

      center[0] = 0.5 * canvas.a.width;
      center[1] = 0.5 * canvas.a.height;
    }

    function render() {
      ctx.b.save();
      ctx.b.fillStyle = backgroundColor;
      ctx.b.fillRect(0, 0, canvas.b.width, canvas.b.height);
      ctx.b.restore();

      ctx.b.save();
      ctx.b.filter = "blur(12px)";
      ctx.b.drawImage(canvas.a, 0, 0);
      ctx.b.restore();

      ctx.b.save();
      ctx.b.drawImage(canvas.a, 0, 0);
      ctx.b.restore();
    }

    function updatePipe(i: number) {
      const i2 = 1 + i,
        i3 = 2 + i,
        i4 = 3 + i,
        i5 = 4 + i,
        i6 = 5 + i,
        i7 = 6 + i,
        i8 = 7 + i;

      let x = pipeProps[i];
      let y = pipeProps[i2];
      let direction = pipeProps[i3];
      const speed = pipeProps[i4];
      let life = pipeProps[i5];
      const ttl = pipeProps[i6];
      const width = pipeProps[i7];
      const hue = pipeProps[i8];

      drawPipe(x, y, life, ttl, width, hue);

      life++;
      x += cos(direction) * speed;
      y += sin(direction) * speed;

      const turnChance =
        !(tick % round(rand(turnChanceRange))) &&
        (!(round(x) % 6) || !(round(y) % 6));
      const turnBias = round(rand(1)) ? -1 : 1;
      direction += turnChance ? turnAmount * turnBias : 0;

      pipeProps[i] = x;
      pipeProps[i2] = y;
      pipeProps[i3] = direction;
      pipeProps[i5] = life;

      // wrap
      if (x > canvas.a.width) x = 0;
      if (x < 0) x = canvas.a.width;
      if (y > canvas.a.height) y = 0;
      if (y < 0) y = canvas.a.height;

      if (life > ttl) initPipe(i);
    }

    function updatePipes() {
      tick++;
      for (let i = 0; i < pipePropsLength; i += pipePropCount) updatePipe(i);
    }

    function draw() {
      updatePipes();
      render();
      raf = window.requestAnimationFrame(draw);
    }

    // start
    resize();
    initPipes();
    draw();

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      window.cancelAnimationFrame(raf);
      canvasB.remove();
    };
  }, []);

  return <div ref={containerRef} aria-hidden />;
}