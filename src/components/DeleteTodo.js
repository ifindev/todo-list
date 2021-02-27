const DeleteTodo = ({ onClick, ...props }) => {
  return (
    <div>
      <button onClick={onClick} {...props} className="btn util-btn delete">&#10007;</button>
    </div>
  )
}

export default DeleteTodo;