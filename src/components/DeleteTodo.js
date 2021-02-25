const DeleteTodo = ({ onClick, ...props }) => {
  return (
    <div {...props}>
      <button onClick={onClick} className="btn delete-btn">&#10007;</button>
    </div>
  )
}

export default DeleteTodo;