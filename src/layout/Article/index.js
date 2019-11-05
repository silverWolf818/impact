import React from 'react';
import './index.less';
import Markdown from "react-markdown";
import CodeBlock from '@/components/Code';
function Article(props) {
    return (
        <div className="z-article-content">
            <div className="z-article-header">title</div>
            <div className="z-article-body">
                <div className="z-article-left z-markdown">
                    <Markdown source={props.md} renderers={{code: CodeBlock}}/>
                </div>
                <div className="z-article-right">
                    {props.content}
                </div>
            </div>
        </div>
    )
}

export default Article;