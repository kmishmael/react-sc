import styled from "styled-components";

const Newcom = () => {
  return (
    <div>
      <h2>Heading 2</h2>
      <button>Click Me!</button>
    </div>
  );
};

const Wrapper = styled(Newcom)`
  h2 {
    color: green;
    text-align: center;
  }

  button {
    padding: 4px 10px;
    background-color: var(--primary-color);
    border: none;
  }
`;

export default Wrapper;