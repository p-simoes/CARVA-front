export interface ButtonConfig {
    label: string;
    severity?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger';
    raised?: boolean;
    outlined?: boolean;
    icon?: string;
    badge?: number;
    size?: 'small' | 'large';
    ariaLabel?: string;
    iconPos?: string;
    loading?: boolean;
    disabled?: boolean;
    text?: string;
}