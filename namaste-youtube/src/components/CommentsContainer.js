import React from 'react';

const CommentsContainer = () => {
  const commentsData = [
    {
      name: 'Ashish Vason',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      reply: [
        {
          name: 'Ashish Vason',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          reply: [
            {
              name: 'Ashish Vason',
              description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
              reply: [],
            },
          ],
        },
      ],
    },
    {
      name: 'Ashish Vason',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      reply: [
        {
          name: 'Ashish Vason',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          reply: [
            {
              name: 'Ashish Vason',
              description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
              reply: [
                {
                  name: 'Ashish Vason',
                  description:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                  reply: [
                    {
                      name: 'Ashish Vason',
                      description:
                        'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                      reply: [
                        {
                          name: 'Ashish Vason',
                          description:
                            'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                          reply: [],
                        },
                      ],
                    },
                    {
                      name: 'Ashish Vason',
                      description:
                        'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                      reply: [
                        {
                          name: 'Ashish Vason',
                          description:
                            'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                          reply: [],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'Ashish Vason',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      reply: [],
    },
    {
      name: 'Ashish Vason',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      reply: [],
    },
    {
      name: 'Ashish Vason',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      reply: [],
    },
    {
      name: 'Ashish Vason',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      reply: [],
    },
  ];
  const Comment = ({ comments }) => {
    const { name, description, reply } = comments;
    console.log(comments);
    return (
      <div className="flex mt-3 bg-gray-200 p-5">
        <img
          className="w-12 rounded-full border border-black mr-3"
          src="https://img.freepik.com/premium-photo/graphic-designer-digital-avatar-generative-ai_934475-9292.jpg"
          alt="avatar"
        />
        <div>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
    );
  };

  const CommentsList = ({ comments }) => {
    // console.log(comments[0].reply, 'replies');
    return comments.map((comment) => (
      <div>
        <Comment comments={comment} />
        <div className="pr-5 border border-l-black ml-5">
          <CommentsList comments={comment.reply} />
        </div>
      </div>
    ));
  };
  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold">Comments:</h1>
        {/* <Comment comments={commentsData[0]} /> */}
        <CommentsList comments={commentsData} />
      </div>
    </div>
  );
};

export default CommentsContainer;
