import React from 'react';
import swal from 'sweetalert'

const CommentForm = ({handleChange,addComment,id,comment}) => {
    return (
        <div>
            <form className='' onSubmit={(e)=>addComment(e,id,comment,swal)}>
                  <textarea 
                        name="text"
                        rows="2"
                        placeholder='write your comment'
                        className='w-full border rounded p-2 focus:outline-none focus:border-blue-300'
                        onChange={handleChange}>
                  </textarea>
                  <input 
                        type="submit"
                        value="Comment"
                        className='bg-blue-400 text-white py-1 px-3 rounded'
                   />
            </form>
        </div>
    );
};

export default CommentForm;