export const Loading = () => {
  return (
    <div className='min-h-[65vh] md:min-h-[80vh] flex justify-center items-center flex-col'>
      <span className="loading loading-dots loading-md bg-base-content"></span>
      <p className='text-xl text-base-content'>Loading...</p>
    </div>
  )
}
