import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">

            <ApprovalCard>
                <CommentDetail author="Sam" faker = {faker.image.avatar()} date="Today at 4:45PM" words={faker.random.words()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author = "Alex" faker = {faker.image.avatar()} date="Today at 4:45PM" words={faker.random.words()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Jane" faker = {faker.image.avatar()} date="Today at 4:45PM" words={faker.random.words()} />
            </ApprovalCard>    
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));