const SaveItem = ({ save }) => {
  const { id, name, type, saveType, img } = save;
  return (
    <li className="save-item">
      <img src={img} alt={name} />
      {name}
    </li>
  );
};

export default SaveItem;
