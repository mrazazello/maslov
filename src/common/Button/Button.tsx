import './button.css';

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary';
}


export const Button = (props: ButtonProps) => {
    const { children, variant = 'primary' } = props;
  return (
    <button className={`btn btn-${variant}`}>
        {children}
    </button>
  )
}