import React from 'react';
import ReactDOM from 'react-dom';
import ImageList from './components/image_list';

const App = () =>
{
    return (
        <div>
            <ImageList></ImageList>
        </div>
    );
}

Meteor.startup(() =>
{
    ReactDOM.render(<App/>,document.querySelector('.container'))
});
