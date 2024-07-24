import './style.scss';
import { formatAttributes } from './src/js/utils';
import Alpine from 'alpinejs';

window.Alpine = Alpine;
Alpine.start();


document.addEventListener('DOMContentLoaded', () => {
    formatAttributes(['title']);
});