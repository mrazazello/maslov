import './button.css';

interface ButtonProps {
    children: React.ReactNode;
}


export const Button = (props: ButtonProps) => {
    const { children } = props;
  return (
    <button className="btn">
    {children}
    </button>
  )

}