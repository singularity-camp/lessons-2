type Func = () => void;

const someFn: Func = () => {
  console.log("Hello");
  return {};
};

const a = someFn();

const num = Number(a);
