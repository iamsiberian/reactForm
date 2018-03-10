const REMOVE_ARTICLE = 'REMOVE_ARTICLE';

export function removeArticle(id) {
    return (dispatch) => {
        dispatch({
            type: REMOVE_ARTICLE,
            payload: {
                id: id
            }
        })
    }
}