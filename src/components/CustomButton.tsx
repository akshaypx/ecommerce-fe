import { Button } from "antd"; // Optional: Use Ant Design button for styling; you can use regular HTML buttons as well.
// Optional: You can add your CSS here or use inline styles.

interface CustomButtonProps {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset"; // Button type
  disabled?: boolean;
  loading?: boolean; // Optional loading state for async actions
  style?: React.CSSProperties; // Custom styles
  className?: string; // Custom CSS classes
}

const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  onClick,
  type = "button",
  disabled = false,
  loading = false,
  style,
  className = "",
}) => {
  return (
    <Button
      type="primary" // Ant Design type; remove if using plain HTML button
      htmlType={type}
      onClick={onClick}
      disabled={disabled}
      loading={loading} // Ant Design-specific; remove if using plain button
      style={style}
      className={`custom-button ${className}`} // Default class for additional styling
    >
      {label}
    </Button>
  );
};

export default CustomButton;
