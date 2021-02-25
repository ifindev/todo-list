const ChecklistTodo = ({ onClick, ...props }) => {
  return (
    <div {...props}>
      <button onClick={onClick} className="btn util-btn">&#10003;</button>
    </div>
  )
}

export default ChecklistTodo;