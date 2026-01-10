import AddData1 from "../Components/AddData1";

const TodoDatas = ({ todoData }) => {
  console.log(todoData.dataName);

  return (
    <>
      {todoData.map((item) => {
        return <AddData1 dataName={item.dataName} date={item.date} />;
      })}
    </>
  );
};

export default TodoDatas;
