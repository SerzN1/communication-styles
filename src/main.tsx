import { render } from 'preact';
import App from './App';
import './index.css';

const root = document.getElementById('root') as HTMLElement;
render(<App />, root);
