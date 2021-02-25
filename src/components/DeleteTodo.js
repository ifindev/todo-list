const DeleteTodo = ({ onClick, ...props }) => {
  return (
    <div {...props}>
      <button onClick={onClick} className="btn util-btn">&#10007;</button>
    </div>
  )
}

export default DeleteTodo;