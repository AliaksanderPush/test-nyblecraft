import styles from "./Button.module.scss";
import cn from "classnames";

export const Button = ({ appearance, type, children, className, ...props }) => {
  return (
    <button
      type={type}
      className={cn(styles.button, className, {
        [styles.primary]: appearance === "primary",
        [styles.ghost]: appearance === "ghost",
      })}
      {...props}
    >
      {children}
    </button>
  );
};
