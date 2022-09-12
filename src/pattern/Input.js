import React from 'react'
import { clsx } from 'clsx'

const Input = (props) => {
     
     return (
          <div>
               <input 
                    className={clsx('outline-none px-5 py-2 border-1 w-full bg-gray-50 rounded-sm', {
                         'border-red-500 + text-red-500': (props.notify && props.notify.type === props.type) || (props.notify && props.notify.type === 'empty' && props.value === ''),
                    })}
                    placeholder={props.placeholder}
                    type={props.type}
                    value={props.value}
                    onChange={e => {
                         props.handleChangeValue(e.target.value)
                    }}
                    onMouseDown={() => {
                         if(props.notify && props.notify.message !== '') {
                              props.handleRemoveNotify('')
                         }
                    }}
               />
               <p className='text-red-500'>{props.notify && props.notify.type === props.type && '* ' + props.notify.message}</p>
               <p className='text-red-500'>{props.notify && props.notify.type === 'empty' && props.value === '' && '* ' + props.notify.message}</p>
          </div>
     )
}

export default React.memo(Input)