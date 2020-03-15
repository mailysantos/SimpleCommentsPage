import React, { Component } from 'react';
import Post from './Post';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Pedro Rodrigues',
          avatar:
            'https://api.adorable.io/avatars/95/abott@adorable.png',
        },
        date: '10 Mar 2020',
        content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer',
        comments: [
          {
            id: 1,
            author: {
              name: 'João Fernando',
              avatar:
                'https://api.adorable.io/avatars/95/abott@adorable.png',
            },
            content:
              'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
          },
        ],
      },
      {
        id: 2,
        author: {
          name: 'Mariana Santos',
          avatar:
            'https://api.adorable.io/avatars/95/abott@adorable.png',
        },
        date: '12 Mar 2020',
        content: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.`,
        comments: [
          {
            id: 1,
            author: {
              name: 'Clara Dias',
              avatar:
                'https://api.adorable.io/avatars/95/abott@adorable.png',
            },
            content:
              'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo.',
          },
          {
            id: 2,
            author: {
              name: 'Lucas Pedreira',
              avatar:
                'https://api.adorable.io/avatars/95/abott@adorable.png',
            },
            content:
              'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium.',
          },
        ],
      },
      {
        id: 3,
        author: {
          name: 'Tony Stark',
          avatar: 'https://api.adorable.io/avatars/95/abott@adorable.png',
        },
        date: '15 Mar 2020',
        content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.',
        comments: [
          {
            id: 1,
            author: {
              name: 'Pedro Guerra',
              avatar: 'https://api.adorable.io/avatars/95/abott@adorable.png',
            },
            content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient',
          },
          {
            id: 2,
            author: {
              name: 'Pedro Guerra',
              avatar: 'https://api.adorable.io/avatars/95/abott@adorable.png',
            },
            content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient',
          },
        ],
      },
    ],
  };

  render() {
    const { posts } = this.state;
    return (
      <>
        {posts.map(post => (
          <Post key={post.id} data={post} />
        ))}
      </>
    );
  }
}

export default PostList;
