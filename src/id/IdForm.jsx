import React, {useId} from 'react'

const IdForm = () => {
    const userNameId = useId();
    const passwordHintId = useId();
  return (
    <div className='flex flex-col p-4'>
        <h1 className='text-3xl my-3'>This is a simple form</h1>
        <form>
            <div className='mx-2'>
                <label htmlFor={userNameId}>User Name</label>
                <input
                    type="text"
                    id={userNameId}
                    className='border mx-2 rounded border-slate-300' />
            </div>

            <div className='mx-2'>
                <input
                    type="password"
                    className='border mx-2 rounded border-slate-300'
                    aria-describedby={passwordHintId} />
                <p id={passwordHintId}>Password should be 8 characters long.</p>
            </div>
        </form>
    </div>
  )
}

export default IdForm