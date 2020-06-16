import { createElement } from 'react';
import styles from 'src/styles.module.css';

const ExampleComponent = ({
  text
}) => {
  return createElement("div", {
    className: styles.test
  }, "Example Component: ", text);
};

export { ExampleComponent };
//# sourceMappingURL=index.modern.js.map
