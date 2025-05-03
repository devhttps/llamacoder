import { ComponentProps, forwardRef } from "react";
import { useFormStatus } from "react-dom";

interface FieldsetProps extends ComponentProps<"fieldset"> {
  isLoading?: boolean;
}

const Fieldset = forwardRef<HTMLFieldSetElement, FieldsetProps>(
  ({ children, isLoading, ...rest }, ref) => {
    const { pending } = useFormStatus();
    const isDisabled = isLoading || pending;

    return (
      <fieldset
        ref={ref}
        {...rest}
        disabled={isDisabled}
        aria-busy={isDisabled}
        className={`${rest.className || ""} ${isDisabled ? "opacity-50" : ""}`}
      >
        {children}
      </fieldset>
    );
  }
);

Fieldset.displayName = "Fieldset";

export default Fieldset;
