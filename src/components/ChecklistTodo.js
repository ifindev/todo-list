const ChecklistTodo = ({ onClick, ...props }) => {
  return (
    <div>
      <button onClick={onClick} {...props} className="btn util-btn">&#10003;</button>
    </div>
  )
}

export default ChecklistTodo;