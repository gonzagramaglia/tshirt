import { proxy } from 'valtio';

const state = proxy({
    intro: true,
    color: '#20BB9A',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './laugh.png',
    fullDecal: './laugh.png'
})

export default state