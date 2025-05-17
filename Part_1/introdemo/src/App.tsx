interface HeaderProps {
  course: string;
}

interface Part {
  name: string;
  excercises: number;
}

interface PartProps {
  parts: Part[];
}

const Header = ({ course }: HeaderProps) => {
  return <h1>{course}</h1>;
};

const Total = ({ parts }: PartProps) => {
  let total = 0;
  parts.forEach((p) => (total += p.excercises));
  return <p>The total number of excercises is {total}</p>;
};

const Component = ({ parts }: PartProps) => {
  return (
    <>
      {parts.map((p) => (
        <p key={p.name}>
          '{p.name}' has {p.excercises} excercises.
        </p>
      ))}
    </>
  );
};

const App = () => {
  const course = {
    name: "Half stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        excercises: 10,
      },
      {
        name: "Using props to pass data",
        excercises: 7,
      },
      {
        name: "State of a component",
        excercises: 14,
      },
    ],
  };
  return (
    <div>
      <Header course={course.name}></Header>
      <Component parts={course.parts}></Component>
      <Total parts={course.parts}></Total>
    </div>
  );
};

export default App;
