import { useEffect, useRef } from 'react'

const vertexSrc = `
attribute vec2 a_pos;
varying vec2 v_uv;
void main() {
  v_uv = a_pos * 0.5 + 0.5;
  gl_Position = vec4(a_pos, 0.0, 1.0);
}
`

const fragmentSrc = `
precision mediump float;
uniform float u_time;
uniform vec2 u_res;
uniform float u_noiseIntensity;
uniform float u_tintStrength;
varying vec2 v_uv;

float hash12(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}

float vnoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float a = hash12(i);
  float b = hash12(i + vec2(1.0, 0.0));
  float c = hash12(i + vec2(0.0, 1.0));
  float d = hash12(i + vec2(1.0, 1.0));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

float fbm3(vec2 p) {
  float v = 0.0;
  v += 0.5000 * vnoise(p); p *= 2.1;
  v += 0.2500 * vnoise(p); p *= 2.1;
  v += 0.1250 * vnoise(p);
  return v;
}

void main() {
  vec2 uv = v_uv;
  vec2 tuv = uv * vec2(u_res.x / u_res.y, 1.0);
  tuv *= 3.0;
  float anim = u_time * 0.15;
  float n = fbm3(tuv + vec2(anim, anim * 0.7));
  vec3 tint = vec3(0.85, 0.75, 0.55) * (0.5 + 0.5 * n);
  vec3 grain = vec3(n * u_noiseIntensity);
  vec3 color = mix(grain, tint, u_tintStrength);
  gl_FragColor = vec4(color, 0.0);
}
`

interface GrainOverlayProps {
  noiseIntensity?: number
  tintStrength?: number
}

export function GrainOverlay({ noiseIntensity = 0.25, tintStrength = 0 }: GrainOverlayProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const glRef = useRef<WebGLRenderingContext | null>(null)
  const programRef = useRef<WebGLProgram | null>(null)
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const gl = canvas.getContext('webgl', { alpha: true, premultipliedAlpha: false })
    if (!gl) return
    glRef.current = gl

    const compile = (type: number, src: string) => {
      const shader = gl.createShader(type)!
      gl.shaderSource(shader, src)
      gl.compileShader(shader)
      return shader
    }

    const program = gl.createProgram()!
    gl.attachShader(program, compile(gl.VERTEX_SHADER, vertexSrc))
    gl.attachShader(program, compile(gl.FRAGMENT_SHADER, fragmentSrc))
    gl.linkProgram(program)
    gl.useProgram(program)
    programRef.current = program

    const buf = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buf)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW)

    const aPos = gl.getAttribLocation(program, 'a_pos')
    gl.enableVertexAttribArray(aPos)
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0)

    const uTime = gl.getUniformLocation(program, 'u_time')
    const uRes = gl.getUniformLocation(program, 'u_res')
    const uNoise = gl.getUniformLocation(program, 'u_noiseIntensity')
    const uTint = gl.getUniformLocation(program, 'u_tintStrength')

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2)
      canvas.width = canvas.offsetWidth * dpr
      canvas.height = canvas.offsetHeight * dpr
      gl.viewport(0, 0, canvas.width, canvas.height)
      gl.uniform2f(uRes, canvas.width, canvas.height)
    }
    resize()
    window.addEventListener('resize', resize)

    const render = (t: number) => {
      gl.uniform1f(uTime, t * 0.001)
      gl.uniform1f(uNoise, noiseIntensity)
      gl.uniform1f(uTint, tintStrength)
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
      rafRef.current = requestAnimationFrame(render)
    }
    rafRef.current = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', resize)
      gl.deleteProgram(program)
    }
  }, [noiseIntensity, tintStrength])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ mixBlendMode: 'overlay' }}
    />
  )
}
