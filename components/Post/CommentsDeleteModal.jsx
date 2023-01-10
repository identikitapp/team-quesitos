const CommentsDeleteModal = ({ deleteModal, setDeleteModal, onDeleteCommentHandler })=> {
    if (deleteModal) {
        return(
            <div className="deleteModal">
                <div>
                    <span>¿Seguro que desea eliminar el comentario?</span>
                    <button onClick={()=> setDeleteModal(false)} >Cancelar</button>
                    <button onClick={onDeleteCommentHandler} >Confirmar</button>
                </div>
            </div>
        )
    }
}

export default CommentsDeleteModal