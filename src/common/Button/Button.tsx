import './button.css';

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'transparent';
    type?: "button" | "submit";
    onClick?: () => void;
}


export const Button = (props: ButtonProps) => {
    const { children, variant = 'primary', type = "button", onClick } = props;
  return (
    <button className={`btn btn-${variant}`} type={type} onClick={onClick}>
        {children}
    </button>
  )
}