import { Theme, Components } from '@mui/material';
import merge from 'lodash/merge';
import { createButton } from './button';

export function createComponentsOverrides(theme: Theme): Components {
  return merge(createButton(theme));
}
