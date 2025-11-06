import { defineConfig, presetAttributify, presetIcons } from 'unocss'
import { presetWind3 } from 'unocss';

/*
내용 - presetIcons() 등록 후 아이콘 데이터도 추가함. 코드 스플릿팅은 자동 적용
 */

export default defineConfig({
    presets: [
        presetWind3(),
        presetAttributify(),
        presetIcons(),
    ],
})