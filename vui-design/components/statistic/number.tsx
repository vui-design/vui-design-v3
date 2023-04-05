import type { FunctionalComponent } from "vue";
import type { VueNodeAtom } from "../../types";
import type { NumberProps } from "./types";
import is from "../../utils/is";
import padEnd from "../../utils/padEnd";

const Number: FunctionalComponent<NumberProps> = props => {
  const { classPrefix, value, precision, placeholder, decimalSeparator = "", groupSeparator = "", formatter } = props;
  let children: VueNodeAtom[] = [];

  if (is.null(value) || is.undefined(value)) {
    children.push(
      <div class={`${classPrefix}-placeholder`}>
        {placeholder}
      </div>
    );
  }
  else {
    const prefix = is.function(props.prefix) ? props.prefix() : props.prefix;
    const suffix = is.function(props.suffix) ? props.suffix() : props.suffix;

    if (prefix) {
      children.push(
        <div class={`${classPrefix}-value-prefix`}>{prefix}</div>
      );
    }

    if (is.function(formatter)) {
      children.push(formatter(value));
    }
    else {
      const number = String(value);
      const matched = number.match(/^(-?)(\d*)(\.(\d+))?$/);

      if (matched) {
        const negative = matched[1];
        let int = matched[2] || "0";
        let decimal = matched[4] || "";

        int = int.replace(/\B(?=(\d{3})+(?!\d))/g, groupSeparator);

        if (is.number(precision)) {
          decimal = padEnd(decimal, precision, "0").slice(0, precision);
        }

        if (decimal) {
          decimal = decimalSeparator + decimal;
        }

        children.push(
          <div key="int" class={`${classPrefix}-value-int`}>
            {negative}
            {int}
          </div>
        );

        if (decimal) {
          children.push(
            <div key="decimal" class={`${classPrefix}-value-decimal`}>
              {decimal}
            </div>
          );
        }
      }
      else {
        children.push(value);
      }
    }

    if (suffix) {
      children.push(
        <div class={`${classPrefix}-value-suffix`}>{suffix}</div>
      );
    }
  }

  return (
    <div class={`${classPrefix}-value`} style={props.style}>{children}</div>
  );
};

export default Number;