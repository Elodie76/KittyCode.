import React from 'react';

const txtCitation = "«Le plus difficile, ce n'est pas de sortir de Polytechnique, c'est de sortir de l'ordinaire»."
const author = "- général de Gaulle."

const Citation = () => {
    return (
        <div className='citationHome'>
            <blockquote><p className='citationHome-txt'>{txtCitation}</p></blockquote>
            <cite className='citationHome-txt author'>{author}</cite>
        </div>
    );
};

export default Citation;