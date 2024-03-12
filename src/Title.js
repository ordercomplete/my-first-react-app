import { Fragment } from "react";

import "./Title.css";

export function Title({ text = "Empty text", isRed = false, children }) {
  const Text = () => <span>{text}</span>;

  return (
    <Fragment>
      <h1 style={{ color: isRed ? "red" : "black" }} className="title">
        <Text />
      </h1>
      <p>{children}</p>
      <div>
        <button>Click</button>
      </div>
    </Fragment>
  );
}

// export default Title; - може використовуватись тільки один
