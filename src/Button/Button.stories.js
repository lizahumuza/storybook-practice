import React from 'react';
import './Button'
import Button from './Button';

export default{
    title: 'Button',
    argTypes: { onClick: { action: 'clicked' } },
}
export const DefaultButton = () => <Button>click me!</Button>
export const OutlineButton = () => <Button>click me!</Button>
export const SmallButton = () => <Button size='small'>click me!</Button>
export const LargeButton = () => <Button size='large'>click me!</Button>