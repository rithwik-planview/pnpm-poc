import './Button.css';
import type { ReactNode } from 'react';

export interface ButtonProps {
    primary?: boolean;
    backgroundColor?: string;
    size?: 'small' | 'medium' | 'large';
    label: string;
    onClick?: () => void;
    icon?: ReactNode;
}

export const Button = ({
    primary = false,
    size = 'medium',
    backgroundColor,
    label,
    icon,
    ...props
}: ButtonProps) => {
    const mode = primary ? 'demo-button--primary' : 'demo-button--secondary';
    return (
        <button
            type="button"
            className={['demo-button', `demo-button--${size}`, mode].join(' ')}
            style={{ backgroundColor }}
            {...props}
        >
            {icon && <span className="demo-button__icon">{icon}</span>}
            {label}
        </button>
    );
};
