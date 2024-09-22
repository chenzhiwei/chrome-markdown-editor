import { Container } from 'nonaction';
import useText from './Hooks/useText.js';
import useFile from './Hooks/useFile.js';

export const TextContainer = Container(useText);
export const FileContainer = Container(useFile);
