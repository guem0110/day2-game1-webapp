// 웹 게임(../index.html)을 앱용(www/)으로 변환합니다.
//  - Three.js 를 인터넷(CDN) 대신 앱 안에 넣어 오프라인에서도 실행
//  - Firebase 온라인 순위표 설정(src/firebase-config.js) 연결
//  - 앱 용량을 줄이려고 게임 코드·스타일을 압축 (웹 원본 index.html 은 그대로)
import { readFileSync, writeFileSync, mkdirSync, copyFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { minify } from 'terser';
import CleanCSS from 'clean-css';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const www = join(root, 'www');
mkdirSync(www, { recursive: true });

const CDN = '<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>';
let html = readFileSync(join(root, '..', 'index.html'), 'utf8');
if (!html.includes(CDN)) throw new Error('index.html 에서 Three.js CDN 태그를 찾지 못했습니다.');
html = html.replace(CDN, '<script src="firebase-config.js"></script>\n<script src="three.min.js"></script>');

// 테스트용 훅은 앱에서 빼기 (eval 이 있으면 이름 줄이기가 안 돼요)
const before = html.length;
html = html.replace("window.__ev=(c)=>eval(c);   // 테스트용", '');
const js = html.match(/<script>\n([\s\S]*?)<\/script>/);
if (!js) throw new Error('게임 스크립트를 찾지 못했습니다.');
const out = await minify(js[1], { ecma: 2020, compress: { passes: 2, drop_debugger: true }, mangle: true, format: { comments: false } });
html = html.replace(js[0], () => '<script>\n' + out.code + '\n</script>');
const css = html.match(/<style>([\s\S]*?)<\/style>/);
if (css) { const c = new CleanCSS({ level: 1 }).minify(css[1]); if (c.errors.length) throw new Error(c.errors.join('\n')); html = html.replace(css[0], () => '<style>' + c.styles + '</style>'); }
console.log('압축: ' + Math.round(before / 1024) + 'KB → ' + Math.round(html.length / 1024) + 'KB');
writeFileSync(join(www, 'index.html'), html);
copyFileSync(join(root, 'node_modules/three/build/three.min.js'), join(www, 'three.min.js'));
copyFileSync(join(root, 'node_modules/three/LICENSE'), join(www, 'three-LICENSE.txt'));
copyFileSync(join(root, 'src/firebase-config.js'), join(www, 'firebase-config.js'));
console.log('www/ 준비 완료');
