
import 'numjs'

// シミュレーションのパラメタ
const SPACE_GRID_SIZE = 256
const dx = 0.01
const dt = 1
const VISUALIZATION_STEP = 8 
// モデルのパラメタ
const Du = 2e-5
const Dv = 1e-5
const f  = 0.04
const k  = 0.06

// 初期化
let u = nj.ones((SPACE_GRID_SIZE,SPACE_GRID_SIZE))
let v = nj.zeros((SPACE_GRID_SIZE,SPACE_GRID_SIZE))
// 中央にSQ四方の正方形を置く
const SQUARE_SIZE = 20
const H = Math.floor(SPACE_GRID_SIZE / 2) - Math.floor(SQUARE_SIZE / 2)
const T = Math.floor(SPACE_GRID_SIZE / 2) + Math.floor(SQUARE_SIZE / 2)
u[H,T][H,T] = 0.5
v[H,T][H,T] = 0.25

u += nj.random(SPACE_GRID_SIZE, SPACE_GRID_SIZE)*0.1
v += nj.random(SPACE_GRID_SIZE, SPACE_GRID_SIZE)*0.1

while (true) {
    for (let i = 0; i < VISUALIZATION_STEP; i++) {
        
        
    }
}
