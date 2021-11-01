const Comment = () => {
  return (
    <div className='mx-auto padding paddingy text-primary'>
      <h1 className='text-5xl font-bold'>Leave a Reply</h1>
      <p className='text-[#AAAAAA] my-6'>
        Your email address will not be published.
      </p>
      <form>
        <div className='mb-6'>
          <label for='comment' className='font-bold block mb-2'>
            Comment
          </label>
          <textarea
            id='comment'
            cols='45'
            rows='8'
            className='bg-gray-50 border border-gray-300 text-[#AAAAAA] sm:text-sm rounded-lg  block w-full p-2.5
            focus:outline-none focus:border-primary'
          />
        </div>
        <div className='mb-6'>
          <label for='name' className='font-bold block mb-2'>
            Name
          </label>
          <input
            type='text'
            id='name'
            className='bg-gray-50 border border-gray-300 text-[#AAAAAA] sm:text-sm rounded-lg  block w-full p-2.5
            focus:outline-none focus:border-primary'
          />
        </div>
        <div className='mb-6'>
          <label for='email' className='font-bold block mb-2'>
            Email
          </label>
          <input
            type='email'
            id='email'
            className='bg-gray-50 border border-gray-300 text-[#AAAAAA] sm:text-sm rounded-lg  block w-full p-2.5
            focus:outline-none focus:border-primary'
          />
        </div>
        <div className='mb-6'>
          <label for='website' className='font-bold block mb-2'>
            Website
          </label>
          <input
            type='email'
            id='email'
            className='bg-gray-50 border border-gray-300 text-[#AAAAAA] sm:text-sm rounded-lg  block w-full p-2.5
            focus:outline-none focus:border-primary'
          />
        </div>
        <div className='flex items-start mb-6'>
          <div className='flex items-center h-5'>
            <input
              id='remember'
              aria-describedby='remember'
              type='checkbox'
              className='bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded'
              required=''
            />
          </div>
          <div className='text-sm ml-3'>
            <label for='remember' className='font-medium'>
              Save my name, email, and website in this browser for the next time
              I comment.
            </label>
          </div>
        </div>
        <button
          type='submit'
          className='text-white bg-primary px-10 py-4 transition rounded shadow ripple hover:shadow-lg focus:outline-none w-[fit-content]'
        >
          Post Comment
        </button>
      </form>
    </div>
  );
};

export default Comment;
