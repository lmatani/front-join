const ItemDetailPage = ({item}) => {

  return (
    <>
      <div>
        <h3>{item.title}</h3>
        <p>Completed: {`${item.completed}`}</p>
      </div>
    </>
 
  );
};

export default ItemDetailPage;
